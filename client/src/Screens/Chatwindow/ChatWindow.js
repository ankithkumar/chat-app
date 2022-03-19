import React, { useState } from 'react';
import InputComponent from '../../Components/Shared/InputComponent';
import DisplayMsgs from './DisplayMsgs';
import '../../App.css';
import '../../Css/chatwindow.css';
import SidebarComponent from './Sidebar/SidebarComponent';

const ChatWindow = () => {
    const [displayMsg, setDisplayMsg] = useState([]);
    console.log('hi');
    const sendMsg = (msg) => {
        setDisplayMsg([displayMsg, ...msg]);
    }
    const handleMsgs = (msg) => {
        console.log(msg);
    }
    return(
        <div>
            <div>
                <SidebarComponent/>
                <div className="App chatboxz">
                <DisplayMsgs/>
                <InputComponent setMsgs={() => handleMsgs(displayMsg)}/>
                </div>
            </div>
        </div>
    )
}

export default ChatWindow;