import React, { useState } from 'react';
import '../../App.css';
import '../../Css/chatwindow.css';
import SidebarComponent from './Sidebar/SidebarComponent';
import ChatListComponent from './ChatList/ChatList';

const ChatWindow = () => {
    const [name, setName] = useState('');
    const [chatClick, setChatClick] = useState('');
    console.log('hi');
    
    const handleOnChatClick = (name) => {
        console.log(name);
        setName(name);
        // debugger;
    }

    return(
        <div>
            <div>
                <SidebarComponent chatClick={(name) => handleOnChatClick(name)}/>
                <div className="App chatboxz">
                    <ChatListComponent name={name}/>
                </div>
            </div>
        </div>
    )
}

export default ChatWindow;