import { Card, CardHeader, CardBody, CardTitle, CardText } from "reactstrap";
import CompanyTable2 from "../../@core/components/componentsDashbord/CompanyTable2";
import { Row, Col, Breadcrumb } from 'reactstrap'
import { useEffect, useState , useRef } from "react";
const SelectionListCursesUse = () => {
  return (
   
   <div>
      <Row className="match-height">
        <Col lg="12" xs="12">
        <CompanyTable2 />
        </Col>
      </Row>
   </div>
  );
};

export default SelectionListCursesUse
;
