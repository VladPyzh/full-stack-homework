import React from 'react';

function Enter_button(el, login, navigate) {
    el.preventDefault();
    localStorage.setItem('user_login', login);
    navigate('/');
}

export default Enter_button;