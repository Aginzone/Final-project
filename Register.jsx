import React, { useState } from "react";

export const Resgister = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const [name,setName] = useState('');
   

    const handleSubmit = {} = (e) => {
        e.preventDefualt();
        console.log(email);
        console.log(name);
    }

    return (
        <div className="auth-form-container">
            <h2>Login</h2>
        <form className="regster-form" onSubmit={(handleSubmit)}>
            <label>Full name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} name="name" id="name" placeholder="full Name" />
            <label htmlFor="email">email</label>
            <input value={email} onChange={(e) => setEmail(e.tart.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label htmlFor="email">password</label>
            <input value={password} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            <button>Log In</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
        </div>
    )
}