import React from 'react';

function LoginSignUpConatiner(props) {
    return (
        <form className="login-container">
           {props.children}
        </form>
    );
}

export default LoginSignUpConatiner;
