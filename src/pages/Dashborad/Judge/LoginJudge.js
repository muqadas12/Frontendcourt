

import React, { Component } from 'react';
import { FormErrors } from "../../../components/FormErrors"
import CoveringCard from "../../../shared/UIElements/CoveringCard"
// import court from "../../../assets/Images/.PNG"
// import "./lawyer.css"
import "./Login.css"
import {Col,Row} from "react-bootstrap"
import axios from "axios"
import Left from "../../../components/LeftJudge"
import Right from "../../../components/RightJudge"


class LoginLawyer extends Component {
  

  render (props) {
    return (
      <div>
      <Row className="landinglogin-page">
      <Col><Left/></Col>
      <Col><Right/></Col>

      </Row>

      


      </div>
      
    )
  }
}

export default LoginLawyer;











