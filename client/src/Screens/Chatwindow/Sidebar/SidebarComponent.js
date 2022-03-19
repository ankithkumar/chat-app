import React, { useEffect, useState } from "react";
import ListComponent from "./ListComponent";
import SearchComponent from "./SearchComponent";
import { userListApi } from "../../../API/Api";

const SidebarComponent = () => {
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
        <div>
            <SearchComponent onChange={searchByName}/>
            <ListComponent list={user}/>
        </div>
    )
}

export default SidebarComponent;