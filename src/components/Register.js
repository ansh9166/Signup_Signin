import React, { Component } from "react";
import { Grid,Paper, Avatar, TextField, Button, Typography} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { isEmail } from "validator";
import "./register.css";
import { Redirect, Link } from "react-router-dom";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = this.getInitialState();
  }

  getInitialState = () => ({
    data: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: ""
    },
    errors: {}
  });

  handleChange = (e) => {
    this.setState({
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value
      },
      errors: {
        ...this.state.errors,
        [e.target.name]: ""
      }
    });
  };

  validate = () => {
    const { data } = this.state;
    let errors = {};

    if (data.firstName === "")
      errors.firstName = "First Name can not be blank.";
    if (data.lastName === "") errors.lastName = "Last Name can not be blank.";
    if (!isEmail(data.email)) errors.email = "Email must be valid.";
    if (data.email === "") errors.email = "Email can not be blank.";
    if (data.password === "") errors.password = "Password must be valid.";
    if (data.confirmPassword !== data.password)
      errors.confirmPassword = "Passwords must match.";

    return errors;
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { data } = this.state;

    const errors = this.validate();

    if (Object.keys(errors).length === 0) {
      localStorage.setItem("email", data.email);
      localStorage.setItem("password", data.password);

      //Call an api here
      //Resetting the form
      this.setState(this.getInitialState());
    } else {
      this.setState({ errors });
    }
  };

  render() {
    const { data, errors } = this.state;
    const paperStyle={padding :30,height:'60vh',width:290, margin:"100px auto"}
    const avatarStyle={backgroundColor:'#FFA500'}
    const btnstyle={margin:'8px 0'}
    return (
     
        <form onSubmit={this.handleSubmit}>
       <Grid>
      <Paper elevation={10} style={paperStyle}>
          <Grid align='center'>
               <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
               <br/>
              <h2>Sign Up</h2>
             
          </Grid>
          <br/>
          <TextField label='FirstName' placeholder='Enter Firstname'
              id="firstName"
              value={data.firstName}
              invalid={errors.firstName ? true : false}
              name="firstName"
              onChange={this.handleChange}
              required
            />
            <br/>
            <TextField label='LastName' placeholder='Enter Lastname'
              id="lastName"
              value={data.lastName}
              invalid={errors.lastName ? true : false}
              name="lastName"
              onChange={this.handleChange}
              required
            />
            <br/>
            <TextField label='Email' placeholder='Enter Email'
              id="email"
              value={data.email}
              invalid={errors.email ? true : false}
              name="email"
              onChange={this.handleChange}
              required
            />
           <br/>
            <TextField label='Password' placeholder='Enter Password'
              id="password"
              value={data.password}
              type="password"
              name="password"
              invalid={errors.password ? true : false}
              onChange={this.handleChange}
              required
            />
            <br/>
            <TextField label='Confirm Password' placeholder='Enter Confirm Password'
              id="confirmPassword"
              value={data.confirmPassword}
              type="password"
              name="confirmPassword"
              invalid={errors.confirmPassword ? true : false}
              onChange={this.handleChange}
              required
            />
            <br/>
            <br/>
            <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign Up</Button>
            <br/>
          <Typography > Not a Member? 
          <Link to="/">
                  Sign In
          </Link>
          </Typography>
      </Paper>
  </Grid>
  </form>
)
}
}

export default Register;
