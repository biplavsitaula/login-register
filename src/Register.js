import React, { useState } from 'react';

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [userName, setUserName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        console.log(userName);

    }

    return (
        <div className='auth-form-container'>
            <h2>Register</h2>
            <form onSubmit={handleSubmit} className='register-form'>
                <label htmlFor="userName">User Name</label>
                <input vaule={userName} onChange={(e) => setUserName(e.target.value)} type="text" placeholder="yourname" id="userName" />
                <label htmlFor="email">email</label>
                <input vaule={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" />
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" />
                <button type="submit">Sign Up</button>
            </form>
            <button className='link-btn' onClick={() => props.onFormSwitch('Login')}>Already have an account.</button>
        </div>
    )
}