import React,{useState} from 'react';
import {NavLink} from 'reactstrap';
import{useDispatch} from "react-redux";
import { logoutUser } from '../../redux/actions/userAction';
import {useNavigate} from "react-router-dom"

function LogoutUser() {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const logoutt=()=>{
        dispatch(logoutUser())
        navigate("/dashboard")  
      }

    return <div>
        <NavLink href="#" onClick={logoutt}>
            Logout
        </NavLink>
    </div>   
}

export default LogoutUser