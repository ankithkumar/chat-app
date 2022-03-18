import React, { useState } from 'react';
import InputComponent from '../../Components/Shared/InputComponent';
import DisplayMsgs from './DisplayMsgs';
import '../../Css/chatwindow.css';

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
            <div className="chatboxz">
                <DisplayMsgs/>
                <InputComponent setMsgs={() => handleMsgs(displayMsg)}/>
            </div>
        </div>
    )
}

export default ChatWindow;