import React from 'react';
import Sections from './sections/Sections';
import Log from './login/Login'

function Login() {
    return (
        <div className="Login">
            <Sections cur_section='0'/>
            <Log />
        </div>
    )
}

export default Login;