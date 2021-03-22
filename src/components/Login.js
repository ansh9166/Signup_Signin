import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import { Grid,Paper, Avatar, TextField, Button, Typography} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
 import "./login.css";

export default class Login extends Component {
  constructor(props) {
    super(props);
    const token = localStorage.getItem("token");

    let loggedin = true;
    if (token == null) {
      loggedin = false;
    }

    this.state = {
      username: "",
      password: "",
      loggedin
    };
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  submitForm(e) {
    e.preventDefault();
    const useremail = localStorage.getItem("email");
    const userpassword = localStorage.getItem("password");
    const { username, password } = this.state;
    //logic
    if (username === useremail && password === userpassword) {
      localStorage.setItem("token", "dhsgdfsgdhsd");
      this.setState({
        loggedin: true
      });
    } else {
      alert("Username or password not match");
    }
  }
  render() {
    if (this.state.loggedin) {
      return <Redirect to="/Logout" />;
    }
     const paperStyle={padding :30,height:'60vh',width:290, margin:"100px auto"}
    const avatarStyle={backgroundColor:'hsl(197, 85%, 41%)'}
    const btnstyle={margin:'8px 0'}
    return (
      

      <form onSubmit={this.submitForm}>
      <Grid>
      <Paper elevation={10} style={paperStyle}>
          <Grid align='center'>
               <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
               <br/>
              <h2>Sign In</h2>
          </Grid>
          <TextField label='Username' placeholder='Enter username' 
            name="username"
            value={this.state.username}
            onChange={this.onChange} fullWidth required/>
            <br/>
          <TextField label='Password' placeholder='Enter password' type='password' name="password"
            value={this.state.password}
            onChange={this.onChange} fullWidth required/>
            <br/>
          <FormControlLabel
              control={
              <Checkbox
                  name="checkedB"
                  color="primary"
              />
              }
              label="Remember me"
           />
           <br/>
           <br/>
          <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
          <br/>
          <br/>
          <Typography >
               <Link href="#" >
                  Forgot password?
          </Link>
          </Typography>
          <br/>
          <Typography > Not a Member?
          <Link to="/Register">
            Sign Up 
          </Link>
          </Typography>
      </Paper>
  </Grid>
  </form>
)
}
}