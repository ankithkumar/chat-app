import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import { searchListApi } from '../../../API/Api';
import '../../../Css/userList.css';

const SearchComponent = (props) => {
    const [res, setRes] = useState([]);
    function debounce(func, wait) {
        let timeout;
        return function(...args) {
          const context = this;
          if (timeout) clearTimeout(timeout);
          timeout = setTimeout(() => {
            timeout = null;
            func.apply(context, args);
          }, wait);
        };
      }
    const debounceOnChange = React.useCallback(debounce(props.onChange, 1000), []);

    // function onChange(value) {
    //     searchListApi(value).then(res => {
    //         console.log('eeee', res);
    //         debugger;
    //         setRes(res);
    //   });
    // }

    return(
        <div>
            {/* {res} */}
            <TextField
                onChange={(e) => debounceOnChange(e.target.value)}
                style={{width: '20%',
                    backgroundColor: 'plum',
                    marginLeft: '19%',
                    borderRadius: '22px',
                    height: '55px',}}
                helperText=" "
                id="demo-helper-text-aligned-no-helper"
                label="Name"
            />
        </div>
    )
}

export default SearchComponent;