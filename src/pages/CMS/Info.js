
 import React,{Component} from "react";
 import Accept from "../../assets/Images/ac.jpg";
 import axios from "axios"
 import "./info.css"
 class Info extends Component{
   constructor(props){
     super(props);
     this.state={
       caseNumber:'',
      crimeNumber:'',
       address:'',
       judgeName:'',
       policeOfficer:'',
       criminalName:'',
       locationCrime:''

     }
   }
   ChangeHandler=(e)=>{
     this.setState({[e.target.name]:e.target.value})
   }
   submitHandler=(event)=>{
     event.preventDefault();
     console.log(this.state)
     axios.post("http://localhost:2000/api/lawyer/saveinfo",this.state,
   
    
     )
     .then(response=>{
       alert('Case number have been assigned')
       console.log(response)
     })
     .catch(error=>{
       console.log(error)
     })
   }


   render(){
     const {caseNumber,crimeNumber,address,judgeName,policeOfficer,criminalName,locationCrime}=this.state;
     return(
       <div>
          <img className="fileview-image" src={Accept} />
     <p className="acceptcase">Information Of Case:</p>
     <p className="caseaccptprocedd">Fill the following fields for the cases information: </p>
     <hr className="accc"/>
     <br/>
 <form onSubmit={this.submitHandler}>
 <label className="casenumberlabel">Case number:</label>
         <input type="texttexttextpn" id="caseNumber"
        value={caseNumber}
        name="caseNumber"
       onChange={this.ChangeHandler}
                    />
         <br/>
 <label className="casenumberlabel">Crime Number:</label>
         <input type="texttexttext" id="caseNumber"
         value={crimeNumber}
         name="crimeNumber"
        onChange={this.ChangeHandler}
         
           />
         <br/>
        

       
         <label className="dateofhearinglabel">Address:</label>
         <input type="textaddress" id="DateofHearing"
         value={address}
         name="address"
         onChange={this.ChangeHandler}
		 style={{marginLeft:'75px'}}

          />
         <br/>
         <label className="casenumberlabel">Judge Name:</label>
        <input type="texttexttext" id="caseNumber"
        value={judgeName}
         name="judgeName"
        onChange={this.ChangeHandler}
		 style={{marginLeft:'45px'}}
         
          />
         <br/>
         <label className="casenumberlabel">Police Officer:</label>
         <input type="texttexttext" id="caseNumber"
         value={policeOfficer}
         name="policeOfficer"
         onChange={this.ChangeHandler}
		  style={{marginLeft:'35px'}}
         
           />
         <br/>
         <label className="casenumberlabel">Criminal Name:</label>
         <input type="texttexttext" id="caseNumber"
         value={criminalName}
         name="criminalName"
        onChange={this.ChangeHandler}
		 style={{marginLeft:'25px'}}
         
           />
         <br/>
         <label className="casenumberlabel">Criminal location:</label>
         <input type="texttexttext" id="locationCrime"
         value={locationCrime}
         name="locationCrime"
         onChange={this.ChangeHandler}
		  style={{marginLeft:'12px'}}
         
          />
         <br/>
        
         <br/>
       <button  type="submit"  className="assign-btn">Submit</button>

 </form>
      </div>
    )
   }
 }
 export default Info;


