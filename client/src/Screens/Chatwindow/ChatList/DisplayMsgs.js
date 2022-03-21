import React, { useEffect, useState } from "react";
import {chatBetweenList} from "../../../API/Api";
import Avatar from '@mui/material/Avatar';
import store from "../../../Storage/Store";
import '../../../Css/displayMsgs.css';

const DisplayMsgs = (props) => {
    console.log('porppss', props);
    const { name, chats } = props;
    
    return(
        <div className="chat-container">
            {chats.length > 0 && chats.map((chat) => {
                return(
                    <div key={chat._id}>
                        <Avatar alt={chat.sender} src="/static/images/avatar/2.jpg" />
                        <span>{chat.msg}</span>
                    </div>
                )
            })}
        </div>
    )
}

export default DisplayMsgs;