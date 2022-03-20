import React, { useEffect, useState } from "react";
import ListComponent from "./ListComponent";
import SearchComponent from "./SearchComponent";
import { userListApi } from "../../../API/Api";

const SidebarComponent = (props) => {
    const { chatClick } = props;
    const [user, setUser] = useState([]);
    const searchByName = (val) => {
        userListApi(val).then((response) => {
            setUser(response.list);
        })
    }
    useEffect(() => {
        searchByName();
    }, []);

    return(
        <div style={{display:'inline-grid'}}>
            <SearchComponent onChange={searchByName}/>
            <ListComponent list={user} onChatClick={(name) => chatClick(name)}/>
        </div>
    )
}

export default SidebarComponent;