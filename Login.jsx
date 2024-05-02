import React, { useState } from "react";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');

    const handleSubmit = {} = (e) => {
        e.preventDefualt();
        console.log(email);

    }

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
        <form className="login-form" onSubmit={(handleSubmit)}>
            <label for="email">email</label>
            <input value={email} onChange={(e) => setEmail(e.tart.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label for="email">password</label>
            <input value={password} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            <button>Log In</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('reigster')}>Don't have an account? Register here.</button>
        </div>
    )
}