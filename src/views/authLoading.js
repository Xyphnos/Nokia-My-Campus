/* eslint-disable no-unused-vars */

import React, {useState, useEffect, useRef} from 'react';
import {CircularProgress,Container} from '@material-ui/core';
import Authentication from '../hooks/Authentication';
import LocalStorageOperations from '../hooks/LocalStorageOperations';

const AuthLoading = (props) =>{
    const {isLoggedIn} = Authentication();
    const [logged,setLogged] = useState(false)
    const {read} = LocalStorageOperations();

    const checkIfLogged = () =>{
        const login = read("user");
        if (login!==null){
            setLogged(true);
            window.location.href = '/home'
        } else {
            setLogged(false);
            window.location.href = '/login'
        }
    };

    useEffect(()=>{
       checkIfLogged()
    },[]); // eslint-disable-line

    const centered = {
        textAlign:"center",
        margin:"auto 0",
        height:"100%",
        position:"absolute",
        right:0,
        top:0,
        left:0,
        bottom:0,
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
    };

  return(
      <div style={centered}>
        <CircularProgress style={{}}/>
      </div>
  )
};

export default AuthLoading;
