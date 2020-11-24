import React, {useState} from 'react';
import './Login.css'
import db, {auth, provider} from './firebase'

function Login() {

    const login = (event) => {
        event.preventDefault() 
        auth.signInWithPopup(provider)
        .catch((err) => {alert(err.message)})
    }
    return (
        <div className="login">
            <h1>Welcome to chat app!</h1>
            <button onClick={login}>LOGIN WITH GOOGLE</button>
        </div>
    )
}

export default Login;
