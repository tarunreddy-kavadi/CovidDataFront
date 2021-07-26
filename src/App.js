import React,{ Component } from  "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Add_Case from "./component directory/AddCases";
import Covid_UpDate from "./component directory/CaseUpdate";
import FncDisplayCovid from "./component directory/DsplyBk_fnCompt";
import DeleteCovid from "./component directory/DeleteCase";

export default class App extends Component {
  render(){
    return(
      <Router>
        <div className="container">
          <center><h2>COVID DATA</h2></center>
          <br/>
          <nav className="navbar navbar-expand-lg navbar-light bg-success">
            <Link to="/addcase"className="navbar-brand"><h4>Add a Case</h4></Link>
             <Link to="/DisplayCovid" className="navbar-brand"><h4>Display All Cases</h4></Link>
          </nav>
          <br/>
          <Route path="/addcase"   component={Add_Case}/>
          <Route path="/edit/:id" component={Covid_UpDate}/>
          <Route path="/Delete/:id" component={DeleteCovid}/>
          <Route path="/DisplayCovid" component={FncDisplayCovid}/>
          
          
          
        </div>
      </Router>
    );
  }
}