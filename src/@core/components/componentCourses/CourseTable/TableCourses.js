import { MoreVertical, Edit, Trash } from "react-feather";
import { Card,Table, Input, Row, Col } from 'reactstrap'

import http from "../../../core/services/interceptore";
import { useQuery } from "react-query";
import CourseItem from "./CourseItem";
import { useNavigate } from "react-router-dom";
import { useEffect, useState , useRef } from "react";
import Search from "antd/es/input/Search";
import MyNavbar from "./MyNavbar";
import CourseGroup from "./CourseGroup/CourseGroup";



const TableCourses = () => {

  const [search, setSearch] = useState("");

  const ref = useRef();

  const handleSearch = (e) => {
    clearTimeout(ref.current)
    const timeOut = setTimeout(()=>{
      e.target.value && setSearch(e.target.value) 
     },800)
    !e.target.value && setSearch('')

    ref.current = timeOut
   
  };

  const getAllCourses = async () => {
    const result = await http.get(
      `/Course/CourseList?PageNumber=1&RowsOfPage=10&SortingCol=DESC&SortType=Expire&Query${search}`
    );
    // console.log(result);
    return result;
  };

  const { data, status, refetch } = useQuery(["getAllCourses" , search], getAllCourses);

  // data && console.log(data.courseDtos);


  const show2 = (x) =>{
    console.log(x);
  }
 
  return (
    <div className='invoice-list-table-header w-100  me-1 ms-50 mt-2 mb-75'>
      <Row>
      
      <MyNavbar/>
      
      <h2>تمام دوره ها :</h2>

      <Input onChange={handleSearch}  type='text' placeholder='جستجو دوره' />

      <Table responsive>
      
        <thead>
          <tr>
            <th className="text-nowrap ">نام دوره</th>
            <th className="text-nowrap ">مدرس دوره</th>
            <th className="text-nowrap ">نوع دوره</th>
            <th className="text-nowrap ">قیمت</th>
            <th className="text-nowrap ">وضعیت برگزاری</th>
            <th className="text-nowrap ">وضعیت </th>
          </tr>
        </thead>
        
        <tbody>
          {data &&
            data.courseDtos.map((item, index) => {
              return (
              
                  
                  <CourseItem
                    key={index}
                    id={item.courseId}
                    fullName={item.fullName}
                    typeName={item.typeName}
                    // statusName={item.statusName}
                    // levelName={item.levelName}
                    cost={item.cost}
                    title={item.title}
                    refetch={refetch}
                    isActive={item.isActive}
                    isdelete={item.isdelete}
                
                  />
                
              );
            })}
        </tbody>
      </Table>
      
      </Row>
    </div>
  );
};

export default TableCourses;
