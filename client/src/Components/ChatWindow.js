import React, { useState } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SendIcon from '@mui/icons-material/Send';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import '../Css/chatwindow.css';

const ChatWindow = () => {
    const [message, setMessage] = useState('Type a message');
    const [displayMsg, setDisplayMsg] = useState([]);
    console.log('hi');

    const handleMessage = (e) => {
        console.log(e.target.value);
        const val = e.target.value;
        setMessage(val);
    }
    const sendMsg = (msg) => {
        setDisplayMsg([displayMsg, ...msg]);
    }
    return(
        <div>
            <div className="chatboxz">
                <div>{displayMsg}</div>
                <FormControl style={{position: 'absolute', bottom: 0, borderRadius: '25px', transform: 'translateX(-50%)', width: '80%', backgroundColor: 'white'}} sx={{ m: 1, width: '25ch' }} variant="outlined" className="inputType">
                    <OutlinedInput
                        id="outlined-adornment-weight"
                        type="text"
                        placeholder="Type a message"
                        // value={message}
                        onChange={() => handleMessage()}
                        endAdornment={<InputAdornment position="end" style={{transform: 'rotate(40deg)'}}>{<AttachFileIcon/>}</InputAdornment>}
                        aria-describedby="outlined-weight-helper-text"
                        startAdornment={<InputAdornment position="start">{<SentimentSatisfiedAltIcon/>}</InputAdornment>}
                        // inputProps={{
                        //   'aria-label': 'weight',
                        // }}
                    />
                </FormControl>
                <SendIcon onClick={() => sendMsg(message)} style={{right: 0,color: 'white',position: 'absolute', bottom: '19px', transform: 'translateX(-50%)'}}/>
            </div>
        </div>
    )
}

export default ChatWindow;