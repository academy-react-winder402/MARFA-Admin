// ** React Imports
import { useEffect, useState } from 'react'

// ** Third Party Components
import { ReactSortable } from 'react-sortablejs'

// ** Images
import img1 from '@src/assets/images/portrait/small/avatar-s-12.jpg'
import img2 from '@src/assets/images/portrait/small/avatar-s-1.jpg'
import img3 from '@src/assets/images/portrait/small/avatar-s-2.jpg'
import img4 from '@src/assets/images/portrait/small/avatar-s-3.jpg'
import img5 from '@src/assets/images/portrait/small/avatar-s-4.jpg'
import http from '../../core/services/interceptore';

// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, CardText, ListGroupItem } from 'reactstrap'
// import { active } from 'sortablejs'
// import { log } from 'console'

const listItems = [
  {
    id: '1',
    img: img1,
    name: 'استاد بحر العلوم',
    content: 'دکترای مهندسی کامپیوتر هوش مصنوعی'
  },
  {
    id: '2',
    img: img2,
    name: 'مهدی اصغری',
    content: 'فوق الیسانس کامپیوتر -برنامه نویس ارشد'
  },
  {
    id: '3',
    img: img3,
    name: 'محسن اسفندیاری',
    content: 'فوق الیسانس کامپیوتر برنامه نویس ارشد'
  },
  {
    id: '4',
    img: img4,
    name: 'محمد رضا ساداتی',
    content: 'برنامه نویس ارشد'
  },
  {
    id: '5',
    img: img5,
    name: 'عارف سالار',
    content: 'برنامه نویس ارشد'
  }
]

const ListTeacherBahrAcavemi = () => {
  // ** State
  const [listArr , setListArr] = useState(listItems)

  // const getTeacher = async()=>{
  //   const res = await http.get('/Home/GetTeachers')
  //   console.log(res.data && res.data);
  //   return res.data
  // }
  // useEffect(() => {
    
  //   getTeacher()
  // }, []);
  
  



  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4'>لیست اساتید آکادمی بحر</CardTitle>
      </CardHeader>
      <CardBody>
        <CardText>
    آکادمی بحر با اساتید باتجزبه و حرفه ای بهترین در ایران می باشد.
        </CardText>
        <ReactSortable tag='ul' className='list-group' list={listArr} setList={setListArr}>
          {/* {resizeBy.data.map(item => {return()})} */}
          {listArr.map(item => {
            return (
              <ListGroupItem className='draggable' key={item.name}>
                <div className='d-flex align-items-center'>
                  <div>
                    <img
                      src={item.img}
                      className='rounded-circle me-2'
                      alt='Generic placeholder image'
                      height='50'
                      width='50'
                    />
                  </div>
                  <div>
                    <h5 className='mt-0'>{item.name}</h5>
                    {item.content}
                  </div>
                </div>
              </ListGroupItem>
            )
          })}
        </ReactSortable>
      </CardBody>
    </Card>
  )
}

export default ListTeacherBahrAcavemi
