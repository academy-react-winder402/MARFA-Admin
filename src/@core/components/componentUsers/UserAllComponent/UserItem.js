import React from 'react'
import { MoreVertical, Edit, Trash } from 'react-feather'
import { Table, Badge, UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap'
import { Button } from 'reactstrap'
import { useNavigate } from 'react-router-dom';
import http from '../../../core/services/interceptore'


const UserItem = ({id=0 , fName,setIsOpenAddUser, setIsOpenAccessUser , isOpenAccessUser , lNmae ,isActive, role , gender , profileCompletionPercentage , gmail , phoneNumber}) => {
  
  const handleIsOpenAccess = () => {
    setIsOpenAddUser(false)
    setIsOpenAccessUser(!isOpenAccessUser)
  }
  
  
    const navigate = useNavigate()

    const  goDetail = () =>{
        navigate('/Users/UserDetails/' + id)
    }

    // for activ ...
    
  const handleActive = async (values) => {
    const courseobjAct = {
      active: isActive === true ? false : true,
      id: id,
    };
    const result = await http.put(
      `/Course/ActiveAndDeactiveCourse`,
      courseobjAct
    );
    refetch();
    return result;
  };
    
  return (
    <tr >
        <td>
            <div style={{ width:'150px', height:'30px' , overflow:'hidden'}}>
                <span className='align-middle fw-bold'> {fName +' ' + lNmae}</span>
            </div>
        </td>
        {/* <td>
            <span className='align-middle fw-bold'> {role}</span>
        </td> */}
        <td>
            <span className='align-middle fw-bold'> {gender === true ? 'مرد' : 'زن'}</span>
        </td>
        <td>
            <span className='align-middle fw-bold'> {id}</span>
        </td>
        
        {/* <td>
            <span className='align-middle fw-bold'> {profileCompletionPercentage}</span>
        </td> */}

        <td>
            <div style={{width:'200px' , height:'30px' , overflow:'hidden'}}>
                <span className='align-middle fw-bold'> {gmail}</span>           
            </div>
        </td>        

        <td>
        <Badge pill color='light-primary' className='me-1'>
            {phoneNumber}
        </Badge>
        </td>
        <td className="text-nowrap ">
        <Button
          // className={`isActive === true ? text-info : text-danger`}
          pill
          color={isActive === true ? "primary" : 'warning'}
          // text={isActive === true ? "info" : 'danger'}
         
          onClick={handleActive}
        >
          {isActive === true ? "فعال" : "غیر فعال"}
        </Button>
      </td>
        <td >
            {/* <span className='align-middle fw-bold'> {role}</span> */}
            <Button.Ripple onClick={handleIsOpenAccess} color='primary'>دسترسی</Button.Ripple>
        </td>
     
        <td>
            {/* <span className='align-middle fw-bold'> {id}</span> */}
            <Button.Ripple onClick={goDetail} color='primary'>جزئیات</Button.Ripple>
          
        </td>        

        <td>
            <UncontrolledDropdown>
              <DropdownToggle className='icon-btn hide-arrow ' color='transparent' size='sm' caret>
                <MoreVertical size={15} />
              </DropdownToggle>
              <DropdownMenu className='bg-light'>
                <DropdownItem href='/' onClick={e => e.preventDefault()}>
                  <Edit className='me-50' size={15} /> <span className='align-middle text-primary'>ویرایش</span>
                </DropdownItem>
                <DropdownItem href='/' onClick={e => e.preventDefault()}>
                  <Trash className='me-50' size={15} /> <span className='align-middle text-warning'>حذف</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
        </td>
      
    </tr>
    
  )
}

export default UserItem