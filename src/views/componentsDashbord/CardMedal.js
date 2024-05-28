// ** Reactstrap Imports
import { Card, CardBody, CardText, Button } from 'reactstrap'

// ** Images
import WelCome from './../../assets/images/pic/w.jpg'

const CardMedal = () => {
  return (
    <Card className='card-congratulations-medal'>
      <CardBody>
        <h5>دوست عزیز خوش آمدید</h5>
        <CardText className='font-small-3'>شما با اسم دانشجو وارد شدید  </CardText>
        <h3 className='mb-75 mt-2 pt-50'>
          <a href='/' onClick={e => e.preventDefault()}>
           تکمیل اطلاعات : 50%
          </a>
        </h3>
        <Button color='primary'> پروفایل کاربری </Button>
        <img className='congratulation-medal pt-2 rounded-10' src={WelCome} alt='Medal Pic' />
      </CardBody>
    </Card>
  )
}

export default CardMedal
