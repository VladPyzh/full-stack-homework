import React from 'react';
import '../../../style/login/Login.css'
import Login_button from './Login_button'
import {useNavigate} from "react-router-dom"


function Login_redir() {
    const navigate = useNavigate();
    return (
        <div className='login'>
            <button type='submit' className="submit"
                        onClick={elem => {
                                Login_button(elem, navigate);
                            }
                        }
                    >
                        Войти
                    </button>
        </div>
    )
}

export default Login_redir;