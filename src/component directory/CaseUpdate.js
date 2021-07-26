import React, {useEffect, useState } from "react";
import axios from 'axios';

  function Covid_UpDate(props) {
  const [state, setState] = useState({
    State:"",
    Cases:"",
    Deaths:"",
    Date:"",
    
  });

  let url= "http://localhost:5002/updatecase/"

  
// this is on compunt Did Mount Event analogy
useEffect(() => {
    axios.get('http://localhost:5002/getCase/'+props.match.params.id)
        .then(res => {
            // set the state variable from the data received from the axios api
            console.log("updatecase"+res.data)
            setState(res.data)
        }) //
       
        .catch(err => {
          console.log("error has occured")
        })
}, []);



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

    console.log(props, "propsprops");
    
    axios.post(url+props.match.params.id, CovidData)
    .then(res => console.log(res.data));
    
   }
  return (
    <div style={{marginTop: 10}}>
      <h3> Update Case id: {state.State}</h3>
      <form onSubmit={OnSubmit} method="Post">
      <div className="form-group"> 
          <label>State: </label>
          <input  className="form-control" type="text" name="State"
            value={state.State}
            onChange={handleChange}
          />
      </div>

      <div className="form-groups">
          <label>
            Cases :{" "}
            <select className="form-control"
            name="Topic"
             value={state.Topic}
            onChange={handleChange}>
            <option value="1-1000">1-1000</option>
            <option value="1000-2000" >1000-2000</option>
            <option value="2000-3000">2000-3000</option>
            <option value="3000-4000">3000-4000</option>
            <option value="4000-5000">4000-5000</option>
          </select>
          </label>
        </div>
        <div className="form-group">
        <label>
          Deaths(between 1 and 10000): &nbsp;
            {state.Deaths}
            <br/>
          <input
            type="range"name="Deaths"
            min="1"max="10000" value={state.Deaths}
            onChange={handleChange} />
            
        </label>
        </div>
        {/* updating DATES */}
        <div className="form-group">
          <label> DATE</label>
          <input type="Date" id = "Date" name="Date" value = {state.Date} onChange={handleChange}/>
         </div>
        <br />
        <br />
        <center>
        <div className="form-group">
                        <input type="submit" value="UpDate" className="btn btn-primary" />
                    </div>
        </center>            
      </form>
      
    </div>
  );
}

export default Covid_UpDate;
