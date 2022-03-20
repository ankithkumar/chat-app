import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LoginComponent from '../Screens/Login/LoginComponent';
import SignUpComponent from '../Screens/signup/SignUpComponent';
import ChatWindow from "../Screens/Chatwindow/ChatWindow";


function Navigation() {
  return (
    <div className="Navigation" style={{textAlign: 'center'}}>
      <Router>
        {
            <Switch>
                <Route path="/login">
                    <LoginComponent />
                </Route>
                <Route path="/signup">
                    <SignUpComponent location={window}/>
                </Route>
                <Route path="/">
                    <ChatWindow />
                </Route>
                <Route path="/chat">
                    <ChatWindow />
                </Route>
            </Switch>
        }
      </Router>
    </div>
  );
}

export default Navigation;
