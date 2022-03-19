import React from "react";
import TextField from '@material-ui/core/TextField';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
// import SignUpComponent from "./SignUpComponent";
import Button from '@material-ui/core/Button';
import {
    // BrowserRouter as Router,
    // Route,
    Link
  } from "react-router-dom";
import '../../Css/login.css';

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: 200,
      },
    },
  }));

const LoginComponent = () => {
    const classes = useStyles();
    // debugger;
    return(
        <div className="container">
            <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm">
                <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '50vh' }} >
                    <div style={{paddingTop:'81px'}}>
                    <form className={classes.root} noValidate autoComplete="off">
                        <label>Email</label>
                        <TextField style={{top: '-18px'}} required id="standard-required" placeholder="john123@gmail.com" />
                        <br/>
                        <label>Password</label>
                        <TextField style={{top: '-18px'}} required id="standard-required" placeholder="Password" />
                    </form>
                    </div>
                    <Button variant="contained" color="primary" className="buttonW">
                        Login
                    </Button>
                    <br/>
                    <div>Don't Have account? <Link to="/signup">Signup</Link></div>
                </Typography>
            </Container>
    </React.Fragment>
        </div>
    )
}

export default LoginComponent;