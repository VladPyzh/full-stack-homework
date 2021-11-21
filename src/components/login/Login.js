import {useNavigate} from "react-router-dom"
import React from 'react';
import '../../style/main_login/login.css'
import Enter_button from "./enter_button/Enter_button";

function Log() {
    const defaultLogin = '';
    const [login, setLogin] = React.useState(defaultLogin);
    const navigate = useNavigate();
    return (
        <div>
            <form className="login_block" method="post" id="login_form">
                <h1 className="enter">Войти</h1>
                <hr></hr>
                <div className="form-group">
                    <label className="form-label">Почта</label>
                    <input onBlur={(event) => { setLogin(event.target.value)}} className="form-control"/>
                </div>
                <div className="form-group">
                    <label className="form-label">Пароль</label>
                    <input className="form-control" type="password"/>
                </div>
                <div className="reset_password">
                    <a href="https://vk.com/vladistlove" className="reset_text"> Сброс пароля </a>
                </div>
                <div className="enter_link">
                    <button type='submit' className="enter_text"
                        onClick={(el) => {
                                Enter_button(el, login, navigate);
                            }
                        }
                    >
                        Войти
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Log;