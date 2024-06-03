// ** User List Component
// import Table from './Table'
// ** Reactstrap Imports
import { Row, Col, Breadcrumb } from 'reactstrap'

// ** Custom Components
import StatsHorizontal from '@components/widgets/stats/StatsHorizontal'

// ** Icons Imports
import { User, UserPlus, UserCheck, UserX } from 'react-feather'

// ** Styles
import '@styles/react/apps/app-users.scss'
// import Table from './ComponentCourse/Table'

import Breadcrumbs from '@components/breadcrumbs'
import TableCourses from '../../@core/components/componentCourses/CourseTable/TableCourses'
// import Table from '../../@core/components/componentCourses/roles/Table'

// import ReserveCourselist from '../../@core/components/componentCourses/TableCourseList/ReserveCourseList'


const ListCurses = () => {
  return (
    <div className='app-user-list'>
     <Breadcrumbs title=' دوره ها' data={[{ title: 'دوره ها' }, { title: 'لیست دوره ' }]} />
      <Row>
        <Col lg='3' sm='6'>
          <StatsHorizontal
            color='primary'
            statTitle='Total Users'
            icon={<User size={20} />}
            renderStats={<h3 className='fw-bolder mb-75'>21,459</h3>}
          />
        </Col>
        <Col lg='3' sm='6'>
          <StatsHorizontal
            color='danger'
            statTitle='Paid Users'
            icon={<UserPlus size={20} />}
            renderStats={<h3 className='fw-bolder mb-75'>4,567</h3>}
          />
        </Col>
        <Col lg='3' sm='6'>
          <StatsHorizontal
            color='success'
            statTitle='Active Users'
            icon={<UserCheck size={20} />}
            renderStats={<h3 className='fw-bolder mb-75'>19,860</h3>}
          />
        </Col>
        <Col lg='3' sm='6'>
          <StatsHorizontal
            color='warning'
            statTitle='Pending Users'
            icon={<UserX size={20} />}
            renderStats={<h3 className='fw-bolder mb-75'>237</h3>}
          />
        </Col>
      </Row>
      <Row className="match-height">
          <Col lg="12" xs="12">
            <TableCourses />
          </Col>
        </Row>
       {/* <Table/> */}
    </div>
  )
}

export default ListCurses
