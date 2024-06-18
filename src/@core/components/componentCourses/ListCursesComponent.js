// ** User List Component
// import Table from './Table'
// ** Reactstrap Imports
import { Row, Col, Breadcrumb } from 'reactstrap'
import classnames from "classnames";
import Avatar from "@components/avatar";
// ** Custom Components
// import StatsHorizontal from '@components/widgets/stats/StatsHorizontal'

// ** Icons Imports
import { User, UserPlus,Trash2, UserCheck,BookOpen,Book, UserX } from 'react-feather'

// ** Styles
import '@styles/react/apps/app-users.scss'
// import Table from './ComponentCourse/Table'

import Breadcrumbs from '@components/breadcrumbs'
import StatsHorizontal from '../../components/widgets/stats/StatsHorizontal'
import TableCourses from '../componentCourses/CourseTable/TableCourses'
import { useNavigate } from 'react-router-dom'
import { useQuery } from 'react-query'
// import { useQuery } from 'react-query'
import http from '../../core/services/interceptore'
const ListCursesComponent = ({ cols }) => {
  // ***************
  const {data: siteStats, status} = useQuery("siteStats", () =>  http.get(`/Course/CourseList?PageNumber=1&RowsOfPage=10&SortingCol=DESC&SortType=Expire&Query`))
  const navigate = useNavigate()

// *************DATA*****************

  return(
   
    <div className='app-user-list'>
     <Breadcrumbs title=' دوره ها' data={[{ title: 'دوره ها' }, { title: 'لیست دوره ' }]} />
      <Row>
        <Col lg='3' sm='6'>
          <StatsHorizontal
    
           href= "/Curses/ListCurses"
            color='primary'
            statTitle='همه دوره ها'
            icon={<BookOpen size={20} />}
            renderStats={<h3 className='fw-bolder mb-75'>{siteStats?.totalCount}</h3>}
           
           
           
            />
           </Col>
          
        <Col lg='3' sm='6'>
          <StatsHorizontal
            color='success'
            statTitle='دوره های فعال'
            icon={<BookOpen size={20} />}
            renderStats={<h3 className='fw-bolder mb-75'>4,567</h3>}
          />
        </Col>
        <Col lg='3' sm='6'>
          <StatsHorizontal
            color='danger'
            statTitle='دوره های حذف شده'
             
            icon={<Trash2 size={20} />}
            renderStats={<h3 className='fw-bolder mb-75'>19,860</h3>}
          />
        </Col>
        <Col lg='3' sm='6'>
          <StatsHorizontal
            color='warning'
            statTitle='دوره های در حال برگذاری'
            icon={<Book size={20} />}
            renderStats={<h3 className='fw-bolder mb-75'>237</h3>}
          />
        </Col>
      </Row>
      <Row className="match-height ">
          <Col lg="12" xs="12">
            <TableCourses />
          </Col>
       </Row>
        
       {/* <Table/> */}
    </div>

  )
   }

export default ListCursesComponent
