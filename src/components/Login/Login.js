import React from 'react';
import useAuth from '../../contexts/useAuth';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const {  handleLogin, handleEmailChange, handlePasswordChange,error } = useFirebase();
    return (
        <div className='registration-section'>
            <form onSubmit={handleLogin}>
                <p>Email: <input className='w-100' onBlur={handleEmailChange} id='email' type="email" name="" /></p>
                <p>Password: <input className='w-100' onBlur={handlePasswordChange} id='password' type="password" name="" /></p>
                <input className='btn btn-primary' type="submit" value="Login" />
            </form>
            <p className='text-danger'>{error}</p>
        </div>
    );
};

export default Login;