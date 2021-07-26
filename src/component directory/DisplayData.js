import { useState } from 'react';
import { Link } from 'react-router-dom';
const ShowCovid = (props) => {
    const Data=props.Covid
    if (Data.length>0 )
    {
    return(
          Data.map((Covid,index)=>{
       return(    
    <tr>
        <td>{Covid.State}</td>
        <td>{Covid.Cases}</td>
        <td>{Covid.Deaths}</td>
        <td>{Covid.Date}</td>

        <td>
            <Link to={"/edit/"+Covid._id}>Edit</Link>
        </td>
        <td>
            <Link to={"/Delete/"+Covid._id}>Delete</Link>
        </td>
    </tr>
         )
     }) 
     ) 
}else 
return (<h1>No Data Returned </h1>) 
}
export default function DisplayData (props) {
   
    const Covid=props.Covid
    const [stateName, setStateName] = useState("");
    const handleChange = (e) => {
        const value = e.target.value;
        setStateName(value);
      };
    const filterState = (covid, state) => {
        console.log(covid, state, "hii");
        return state ? covid.filter((val) => val.State && val.State.includes(state)) : covid
    }
     return(
        <div>
        <h3>Covid List</h3>
        <input type = "search" value = {stateName} onChange = {handleChange} />
        <table className="table table-striped" class="table table-hover"style={{ marginTop: 20 }} >
            <thead>
                <tr>
                    <th>State</th>
                    <th>Cases</th>
                    <th>Deaths</th>
                    <th>Date</th>
                    
                   
                </tr>
            </thead>
            <tbody>
                < ShowCovid Covid={filterState(Covid, stateName)} />
            </tbody>
        </table>
    </div>

    )
    }
