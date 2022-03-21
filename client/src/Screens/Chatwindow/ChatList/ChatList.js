import React, { useEffect, useState } from "react";
import InputComponent from '../../../Components/Shared/InputComponent';
import store from '../../../Storage/Store';
import DisplayMsgs from './DisplayMsgs';
import {postApi, chatBetweenList}  from "../../../API/Api";

const ChatListComponent = (props) => {
    const { name } = props;
    const [chats, setChats] = useState([]);

    const chatBetween = () => {
        const currentUser = store.get('name');
        chatBetweenList(currentUser, name || currentUser)
            .then(res => {
                console.log(res);
                setChats(res.chats || []);
            })
    }

    const sendMsgApi = (sender, receiver, msg) => {
        const body = { sender, receiver , msg }

        postApi('sendmessage', body)
            .then((res => {
                if (res.msg === 'success') {
                    chatBetween(); 
                }
            }))
    }

    useEffect(() => {
        console.log(name);
        chatBetween();
    },[name]);

    const handleMsgs = (msg) => {
        const currentUser = store.get('name');
        sendMsgApi(currentUser, name || currentUser, msg);
    }

    return(
        <div>
            <DisplayMsgs chats={chats} name={name}/>
            <InputComponent setMsgs={(msg) => handleMsgs(msg)}/>
        </div>
    )
}

export default ChatListComponent;