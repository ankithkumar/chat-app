import React from "react";
import SendIcon from '@mui/icons-material/Send';

const SendMsgs = (props) => {
    const { onclick } = props;
    console.log('propsss', props.msg, onclick);
    return(
        <div>
            <SendIcon onClick={onclick} style={{right: 0,color: 'white',position: 'absolute', bottom: '19px', transform: 'translateX(-50%)'}}/>
        </div>
    )
}

export default SendMsgs;