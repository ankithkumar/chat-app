import ChatWindow from './Screens/Chatwindow/ChatWindow';
import {
  BrowserRouter as Router,
  // Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import LoginComponent from './Login/LoginComponent';
import SignUpComponent from './Login/SignUpComponent';

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/login">Login</Link>
        <Link className="nav-link" to={"/signup"}>Sign up</Link>
          <Route path="/login" component={LoginComponent}/>
          <Route path="/signup" component={SignUpComponent}/>
      </Router>
      {false && <ChatWindow/>}
    </div>
  );
}

export default App;
