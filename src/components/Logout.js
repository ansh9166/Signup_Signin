import { Button } from "@material-ui/core";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Logout.css";

export default class logout extends Component {
  constructor(props) {
    super(props);
    localStorage.removeItem("token");
  }

  render() {
    return (
      <div class="con">
      <span class="text1">Welcome To</span>
      <span class="text2">Manufac pvt lmtd</span>
     <br/>
      
          <form>
   <Button>
           <Link to="/">
          Logout
        </Link>
        </Button> 
          </form>
      
      </div>
    );
  }
}
