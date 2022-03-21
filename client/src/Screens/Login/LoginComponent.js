import React, { useState } from "react";
import TextField from '@material-ui/core/TextField';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import {postApi} from '../../API/Api';
import store from "../../Storage/Store";
// import SignUpComponent from "./SignUpComponent";
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";
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

const LoginComponent = (props) => {
    const classes = useStyles();
    // debugger;
    const history = useHistory();
    const [email, setEmail] = useState('ankith@123.com');
    const [pwd, setPwd] = useState('abc@1222');
    const [apiRes, setApiRes] = useState(false);
    console.log(props);
    const login = () => {
        const body = { email, pwd }

        postApi('login', body).then((response) => {
            // debugger;
            if (response.msg === 'success') {
                console.log(response.user);
                store.set("name",response.user.name);
                // debugger;
                setApiRes(true);
                history.push('/chat');
            }
        });
    }

    return(
        <div className="container">
            <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm">
                <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '50vh' }} >
                    <div style={{paddingTop:'81px'}}>
                    <form className={classes.root} noValidate autoComplete="off">
                        <label>Email</label>
                        <TextField style={{top: '-18px'}} onChange={(e) => setEmail(e.target.value)} required id="standard-required" placeholder="john123@gmail.com" />
                        <br/>
                        <label>Password</label>
                        <TextField style={{top: '-18px'}} onChange={(e) => setPwd(e.target.value)} required id="standard-required" placeholder="Password" />
                    </form>
                    </div>
                    <Button variant="contained" color="primary" className="buttonW" onClick={login}>
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