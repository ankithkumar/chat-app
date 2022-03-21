import React, { useState } from "react";
import TextField from '@material-ui/core/TextField';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {postApi} from '../../API/Api';
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

const SignUpComponent = (props) => {
    const classes = useStyles();
    const history = useHistory();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [apiRes, setApiRes] = useState(false);
    console.log(props);
    const signUp = () => {
        const body = { name, email, pwd }

        postApi('signup', body).then((response) => {
            // debugger;
            if (response.msg === 'success') {
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
                        <label>Name</label>
                        <TextField error={false} onChange={(e) => setName(e.target.value)} style={{top: '-18px'}} required id="standard-required" placeholder="John snow" />
                        <br/>
                        <label>Email</label>
                        <TextField onChange={(e) => setEmail(e.target.value)} style={{top: '-18px'}} required id="standard-required" placeholder="john123@gmail.com" />
                        <br/>
                        <label>Password</label>
                        <TextField onChange={(e) => setPwd(e.target.value)} style={{top: '-18px'}} required id="standard-required" placeholder="Password" />
                    </form>
                    </div>
                    <Button onClick={() => signUp()} variant="contained" color="primary" className="buttonW">
                        SignUp
                    </Button>
                    <br/>
                    <div>Have account? <Link to="/login">Login</Link></div>
                </Typography>
            </Container>
    </React.Fragment>
        </div>
    )
}

export default SignUpComponent;