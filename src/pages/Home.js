// ** React Imports
import { Fragment, useContext } from "react";
// ** Icons Imports
import { List } from "react-feather";
// ** Custom Components
import Avatar from "@components/avatar";
import Timeline from "@components/timeline";
import AvatarGroup from "@components/avatar-group";
// ** Reactstrap Imports

import { Row, Col, Card, CardHeader, CardTitle, CardBody } from "reactstrap";

// ** Context
import CardBrowserState from "../@core/components/componentsDashbord/CardBrowserState";
// import {ThemeColors } from '../views/AllUse/ThemeColors'
import { ThemeColors } from "../../src/utility/context/ThemeColors";

// ** Utils
import { kFormatter } from "@utils";
import Breadcrumbs from "@components/breadcrumbs";

// ** Styles
import "@styles/react/libs/charts/apex-charts.scss";
import "@styles/base/pages/dashboard-ecommerce.scss";


// ** Demo Components
import CardMedal from "../@core/components/componentsDashbord/CardMedal";
import StatsCard from "../@core/components/componentsDashbord/StatsCard";
import CardMeetup from "../@core/components/componentsDashbord/CardMeetup";
import CompanyTable from "../@core/components/componentsDashbord/CompanyTable";
import CompanyTable2 from "../@core/components/componentsDashbord/CompanyTable2";
import SupportTracker from "../@core/components/componentsDashbord/SupportTracker";
import AllListUser from "../../src/@core/components/componentsDashbord/AllListUser";
import ListTeacherBahrAcavemi from "../@core/components/componentsDashbord/ListTeacherBahrAcavemi";
// import SupportTracker from './componentsDashbord/SupportTracker'

const Home = () => {
  // ** Context
  const { colors } = useContext(ThemeColors);


  // ** vars
  const trackBgColor = "#e9ecef";
  return (
      <div id="dashboard-ecommerce">
        {/* <Breadcrumbs title='Analytics Cards' data={[{ title: 'Cards' }, { title: 'Analytics Actions' }]} /> */}
        <Row className="match-height">
          <Col xl="4" md="6" xs="12">
            <CardMedal />
          </Col>
          <Col xl="8" md="6" xs="12">
            <StatsCard cols={{ xl: "3", sm: "6" }} />
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
        <Row className="match-height">
          <Col lg="12" xs="12">
            {/* <CompanyTable /> */}
            {/* <CompanyTable2/> */}
            <ListTeacherBahrAcavemi/>
          </Col>
          {/* <Col lg="4" md="6" xs="12"> */}
            {/* <CardMeetup /> */}
            {/* <AllListUser/> */}
          {/* </Col> */}
          <Col lg="6" xs="12">
            <SupportTracker
              primary={colors.primary.main}
              danger={colors.danger.main}
            />
          </Col>
          <Col lg="6" xs="12">
            <SupportTracker
              primary={colors.primary.main}
              danger={colors.danger.main}
            />
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
      
      </div>
   
  );
};

export default Home;
