import React, { useEffect, useState } from "react";
import {userListApi} from '../../../API/Api';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

const ListComponent = (props) => {
    const { list } = props;
    console.log('list', list);
    return(
        <div className="listBox">
            {list.length > 0 && list.map((name) => (          
            <div>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt={name} src="/static/images/avatar/2.jpg" />
                </ListItemAvatar>
                <ListItemText
                    primary={name}
                    secondary={
                        <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            />
                            {" Wish I could come, but I'm out of town this…"}
                        </React.Fragment>
                    }
                />
                </ListItem>
                <Divider variant="inset" />
                </div>
      ))}
        </div>
    )
}

export default ListComponent;