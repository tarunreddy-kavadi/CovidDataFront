import React, { useState } from "react";
import axios from 'axios';

export default function Add_Case() {
  let url= "http://localhost:5002/addcase/" 
  const [state, setState] = useState({
    State: "",
    Cases: "",
    Deaths: "",
    Date:"",
    });

 
  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };
  const OnSubmit=(e) =>
  {
  
   e.preventDefault();
   const CovidData={
           State:state.State,
           Cases:state.Cases,
           Deaths:state.Deaths,
           Date:state.Date,
           

   }
   //Adding the Cases
   axios.post(url="http://localhost:5002/addcase/", CovidData)
   .then(res => console.log(res.data));
   }
  return (
    <div style={{marginTop: 10}}>
      <h3><font colour="red">Add Cases</font></h3>
      <form onSubmit={OnSubmit} method="Post">
         {/* mentioning the State variable */}
        <div className="Covid-groups"> 
          <label>State: </label>
          <input  className="Covid-control"
            type="text" name="State"
            value={state.State}
            onChange={handleChange}/>
            
        </div>
        
        {/* //GETTING CERTAIN NUMBER OF CASES IN THE FORM OF OPTION  */}
        <div className="Covid-groups">
          <label>
            Cases :{" "}
            <select className="Covid-control"
            name="Topic" value={state.Topic}
            onChange={handleChange}>
            <option value="1-1000">1-1000</option>
            <option value="1000-2000" >1000-2000</option>
            <option value="2000-3000">2000-3000</option>
            <option value="3000-4000">3000-4000</option>
            <option value="4000-5000">4000-5000</option>
          </select>
          </label>
        </div>
        {/* range of deaths */}
        <div className="Covid-group">
        <label>
          Deaths(between 1 and 10000):
          <input
            type="range"name="Deaths"
            min="1"max="10000" value={state.Deaths}
            onChange={handleChange} />
        </label>
        </div>
        <br/>
        {/* ADDING DATES */}
        <p id="demo"></p>




        
         {/* BUTTON TO SUBMIT ALL THE APPLICATION */}
        <div className="form-group">
        <center>
            <input type="submit" value="Add Case" className="btn btn-primary" />
        </center>                   
        </div>
                
      </form>
      
    </div>
  );
 
}


