import React, { useEffect } from "react";

const DisplayMsgs = (props) => {
    console.log('porppss', props);
    const { msgs, name } = props;
    useEffect(() => {
        console.log(name);
    },[name])
    debugger;
    return(
        <div>
            {msgs && name && msgs.length > 0 && msgs.map((chat) => {
                return(
                    <div>{chat} <span>{name}</span></div>
                )
            })}
        </div>
    )
}

export default DisplayMsgs;