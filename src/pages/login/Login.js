import React from 'react';
import './login.css'

function Login() {
    return (
        <div className='loginContainer'>
           <div className='loginOuterBox'>
            <h2 className='loginHead'>Login</h2>
            <input className='inputBox' type='email'/>
            <input className='inputBox' type='password'/>
            <button className='submitButton'>Login</button>

           </div>
        </div>
    );
}

export default Login;