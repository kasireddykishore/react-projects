import React,{useState} from "react";

import './login-signup.css'
import email_icon from "../assets/email_icon.png";
import lock_icon from "../assets/lock_icon.jpg";
import person_icon from "../assets/person_icon.jpg";


const LoginSignup = () => {
   const [action,setAction] = useState("Login");
    return(
        <div className="container">
        <div className="header">
        <div className="text">{action}</div> 
        <div className="underline"></div>
        </div>
        <div className="inputs">
        {action==="Login"?<div></div>: <div className="input">
                <img src={person_icon} alt=""/>
                <input type="text" placeholder="name"></input>
            </div>}
        
            <div className="input">
                <img src={email_icon} alt=""/>
                <input type="email" placeholder="email"></input>
            </div>
            <div className="input">
                <img src={lock_icon} alt=""/>
                <input type="password " placeholder="password"></input>
            </div>
            <div className="forgot-password">Lost password?<span>Click here!</span></div>
            <div className="submit-container">
                <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
                <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
            </div>
        </div>
        </div>
    )
}

export default LoginSignup