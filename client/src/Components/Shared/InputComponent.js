import React, { useState } from "react";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import SendMsgs from "./SendMsg";

const InputComponent = (props) => {
    const { setMsgs } = props;
    const [message, setMessage] = useState('Type a message');
    const handleMessage = (e) => {
        console.log(e.target.value);
        const val = e.target.value;
        setMessage(val);
    }

    const sendMsgs = () => {
        // debugger;
        setMsgs(message);
        // debugger;
    }
    return (
        <div>
            <FormControl style={{position: 'absolute', bottom: 0, borderRadius: '25px', transform: 'translateX(-50%)', width: '80%', backgroundColor: 'white'}} sx={{ m: 1, width: '25ch' }} variant="outlined" className="inputType">
                    <OutlinedInput
                        id="outlined-adornment-weight"
                        type="text"
                        placeholder="Type a message"
                        // value={message}
                        onChange={(e) => handleMessage(e)}
                        endAdornment={<InputAdornment position="end" style={{transform: 'rotate(40deg)'}}>{<AttachFileIcon/>}</InputAdornment>}
                        aria-describedby="outlined-weight-helper-text"
                        startAdornment={<InputAdornment position="start">{<SentimentSatisfiedAltIcon/>}</InputAdornment>}
                        // inputProps={{
                        //   'aria-label': 'weight',
                        // }}
                    />
                </FormControl>
                <SendMsgs onclick={sendMsgs()}/>
        </div>
    )
}

export default InputComponent;