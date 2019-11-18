import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import SvgIcon from '@material-ui/core/SvgIcon';
import MuiPhoneNumber from 'material-ui-phone-number'
import { withStyles } from "@material-ui/core/styles";

import { connect } from "react-redux";

import { registerUser } from '../actions/index'


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Water My Plants
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const StyledButton = withStyles({
  root: {
    background: "#078B75",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)"
  }
})(Button);

const Register = props => {
  const classes = useStyles();

  const [user, setUser] = useState({
    username: "",
    password: "",
    phone: "",
    user_id: Date.now()
  });


  const handlerChange = event => {
    event.preventDefault()
    console.log('username and password change',user);
    setUser({ ...user, [event.target.name]: event.target.value });
  };
  const handlePhoneChange = value => {
    setUser({ phone:value })
    console.log('phone change', user);
  }

  const submitHandler = event => {

    event.preventDefault();

     setUser();
    props.registerUser(user)
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <form className={classes.form} onSubmit={props.submitHandler} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required ="true"
            fullWidth
            name="username"
            value={props.username}
            label="Username"
            type="text"
            id="username"
            autoComplete="current-password"
            onChange={handlerChange}
          />
        <MuiPhoneNumber
            defaultCountry={'us'}
            variant="outlined"
            margin="normal"
            required="true"
            fullWidth
            name="phone"
            label="Phone"
            type="phone"
            value={props.phone}
            id="phone"
            autoComplete="phone-password"
            onChange={handlePhoneChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required="true"
            fullWidth
            name="password"
            label="Password"
            type="password"
            value={props.password}
            id="password"
            autoComplete="current-password"
            onChange={handlerChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="phone"
            label="Phone Number"
            name="phone"
            autoComplete="phone"
            autoFocus
            onChange={handlerChange}
          />
          <StyledButton
            type="submit"
            fullWidth
            variant="contained"
            color="white"
            className={classes.submit}
          >
            Register
    
          </StyledButton>
          <Grid container>
            <Grid item xs>
              <Link href="" variant="body2">
                {"Already have an account? Log In."}
              </Link>

            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}


function mapStateToProps(state) {
  return {
    user: state.user,
  };
}
const mapDispatchToProps = {
  registerUser
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);