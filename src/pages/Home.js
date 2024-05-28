// ** React Imports
import { useContext } from 'react'
// ** Icons Imports
import { List } from 'react-feather'
// ** Custom Components
import Avatar from '@components/avatar'
import Timeline from '@components/timeline'
import AvatarGroup from '@components/avatar-group'
// ** Reactstrap Imports

import { Row, Col, Card, CardHeader, CardTitle, CardBody } from 'reactstrap'

// ** Context
import CardBrowserState  from './../views/componentsDashbord/CardBrowserState'
// import {ThemeColors } from '../views/AllUse/ThemeColors'
import {ThemeColors} from '../views/AllUse/ThemeColors'

// ** Utils
import { kFormatter } from '@utils'

// ** Styles
import '@styles/react/libs/charts/apex-charts.scss'
import '@styles/base/pages/dashboard-ecommerce.scss'

  // ** Demo Components
import CardMedal from '../views/componentsDashbord/CardMedal'
import StatsCard from '../views/componentsDashbord/StatsCard'
import CardMeetup from '../views/componentsDashbord/CardMeetup' 
import CompanyTable from '../views/componentsDashbord/CompanyTable'
import SupportTracker from '../views/componentsDashbord/SupportTracker'
// import SupportTracker from '../views/componentsDashbord/SupportTracker'



const Home = () => {
    // ** Context
    const { colors } = useContext(ThemeColors)

    // ** vars
    const trackBgColor = '#e9ecef'
  return (
    <div id='dashboard-ecommerce'>
    <Row className='match-height'>
      <Col xl='4' md='6' xs='12'>
        <CardMedal />
      </Col>
      <Col xl='8' md='6' xs='12'>
        <StatsCard cols={{ xl: '3', sm: '6' }} />
      </Col>
    </Row>
    {/* <Row className='match-height'>
      <Col lg='4' md='12'>
        <Row className='match-height'>
          <Col lg='6' md='3' xs='6'>
            <OrdersBarChart warning={colors.warning.main} />
          </Col>
          <Col lg='6' md='3' xs='6'>
            <ProfitLineChart info={colors.info.main} />
          </Col>
          <Col lg='12' md='6' xs='12'>
            <Earnings success={colors.success.main} />
          </Col>
        </Row>
      </Col>
      <Col lg='8' md='12'>
        <RevenueReport primary={colors.primary.main} warning={colors.warning.main} />
      </Col>
    </Row> */}
    <Row className='match-height'>
      <Col lg='8' xs='12'>
        <CompanyTable />
      </Col>
      <Col lg='4' md='6' xs='12'>
        <CardMeetup />
      </Col>
      <Col lg='6' xs='12'>
          <SupportTracker primary={colors.primary.main} danger={colors.danger.main} />
        </Col>
      {/* <Col lg='4' md='6' xs='12'>
        <GoalOverview success={colors.success.main} />
      </Col> */}
      {/* <Col lg='4' md='6' xs='12'>
        <CardTransactions />
      </Col> */}
      {/* <Col lg='6' xs='12'>
          <SupportTracker primary={colors.primary.main} danger={colors.danger.main} />
        </Col> */}
        {/* <Col lg='6' xs='12'>
          <SupportTracker primary={colors.primary.main} danger={colors.danger.main} />
        </Col> */}
    </Row>
    <Row className='match-height bg-green'>
        <Col lg='6' xs='12'>
          <SupportTracker primary={colors.primary.main} danger={colors.danger.main} />
        </Col>
        <Col lg='6' xs='12'>
          <SupportTracker primary={colors.primary.main} danger={colors.danger.main} />
        </Col>
      </Row>
  </div>
  );
};

export default Home;
