import React, { Fragment,useState } from "react"
import cms1 from "../../../assets/Images/law44.jpg";
import lawj from "../../../assets/Images/lk.PNG";
import judgmentla from "../../../assets/Images/judgmentla.PNG";
import causel from "../../../assets/Images/causel.PNG";
import clll from "../../../assets/Images/clll.PNG";
import views from "../../../assets/Images/views.PNG";
import sec from "../../../assets/Images/sec.PNG";



import {Link} from 'react-router-dom';

 import "./Mod.css"
import InfoIcon from '@material-ui/icons/Info';
import ListAltIcon from '@material-ui/icons/ListAlt';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import GavelIcon from '@material-ui/icons/Gavel';
import ViewListIcon from '@material-ui/icons/ViewList';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import {Jumbotron,Container} from 'react-bootstrap'
const LawyerMod=(props)=>{
	const [islogout]=useState(true)
	//	const [state,setState]=useState()

	
	
	const logout=()=> {
    localStorage.clear();
    window.location.href = '/LoginLawyer';
  }
    return(
        <div>
    <img className="responsive-image" src={cms1} alt="My logo" />
    <Jumbotron className="jum-laws">
  <Container className="jum-laws">
   <img className="pi" src={lawj}/>
    <p className="ppp">
      This is the lawyer dashboard.Here  lawyer can view causelists(causelist is the schedule of the court)
      <br/>
      Lawyer can view judgments(judgments are the decision of the court)
      <br/>
      Lawyer can pay online court fee or can also view case status
      
    </p>
  </Container>
</Jumbotron>

<img className="case-judge-records"  src={judgmentla}/>

<Link  to="/Judgment"><p className="lawyer-ju-dashboard"> Judgment </p></Link>
<img className="efile-judge-records"  src={clll}/>
<Link  to="/Causelist"><p className="causelist-law-dashboard">Cause List</p></Link>
<img className="summon-judge-records"  src={causel}/>
<Link  to="/CourtFee"><p className="fee-dashboard">Court Fee</p></Link>
<img className="status-lawyer-records"  src={views}/>
<Link  to="/CaseStatusLaw"><p className="proceed-judge-dashboard">View Case Status</p></Link>
<img className="judgmentcaserecord"  src={sec}/>
<Link  to="/OnlineCaseSearchh"><p className="latestjudgmentupdateds">Online Case search</p></Link>


<button className="logoutlawyer" onClick={logout}><i className="fas fa-sign-out-alt"/>
</button>






    {/*
<button onClick={logout}>Logout</button>


	<button onClick={() => {
          props.history.push("/Causelist");
        }}
    
    className="btn-1">View Cause List<span class="material-icons"><ViewListIcon/></span>
    </button>
<button onClick={() => {
          props.history.push("/Judgment");
        }}

className="btn-2">View Judgments<span class="material-icons"><GavelIcon/></span></button>
     <button onClick={() => {
          props.history.push("/CourtFee");
        }}
     className="btn-3">Online Payment<span class="material-icons"><CreditCardIcon/></span></button>
    <button onClick={() => {
          props.history.push("/CaseStatusLaw");
        }}
    
    className="btn-4">View Case Status<span class="material-icons"><AccountBalanceIcon/></span></button> */}


        </div>
       
    )
}
export default LawyerMod;

