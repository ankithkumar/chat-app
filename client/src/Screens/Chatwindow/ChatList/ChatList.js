import React, { useState } from "react";
import InputComponent from '../../../Components/Shared/InputComponent';
import DisplayMsgs from './DisplayMsgs';

const LoginComponent = (props) => {
    const { name } = props;
    const [displayMsg, setDisplayMsg] = useState([]);
    const handleMsgs = (msg) => {
        // debugger;
        setDisplayMsg([...displayMsg, msg]);
        console.log(msg);
    }

    return(
        <div>
            <DisplayMsgs msgs={displayMsg} name={name}/>
            <InputComponent setMsgs={(msg) => handleMsgs(msg)}/>
        </div>
    )
}

export default LoginComponent;