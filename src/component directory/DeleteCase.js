import React,{useEffect,useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import DisplayData from './DisplayData';
export default function DeleteCovid(props) 
 {
    const [state, setState] = useState([]);

   
    useEffect(()=>{
        console.log("useeff delete"+props.match.params.id)
        axios.post("http://localhost:5002/deleteCase/"+props.match.params.id)
        .then(res => {
            axios.get("http://localhost:5002/allcases/")
        .then(res => {
                
                setState(res.data)
                console.log("data set in the state and state length"+state.length)
            })
        .catch(err => {
              console.log("error has occured")
            })
                      }) 
        .catch(err => {
          console.log("error has occured")
        })
    },[props.match.params.id])

   
     return (
        <div>
            <DisplayData Covid={state}/>
        </div>
    )
    }

