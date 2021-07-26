import React, { Component, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import DisplayData from './DisplayData';
// we use functional  components. usestate hook the received data is stored in the state variable of the componenet  using setState the Data is 
//rendered using a separate functional component Display Data In Display data, we  pass the state variable Books  as data recieved  axious lib
export default function FncDisplayCovid() {
    const [Covid, setCovid] = useState([]);
    const url ="http://localhost:5002/allcases/"

    useEffect(()=>{
      axios.get(url)
      .then(res=>{
       setCovid(res.data)    
  })
      .catch(err => {
        console.log("error has occured")
      })
      },[])
    return(
        <div>
         <DisplayData Covid={Covid}/>
    </div>
    )
    }
