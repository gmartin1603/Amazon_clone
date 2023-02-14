import React, { useState } from 'react';
import '../style/LogIn.css'
import {Link} from 'react-router-dom'
import { auth } from '../firebase';
import {useHistory} from 'react-router-dom'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

function LogIn(props) {
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signIn = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
        .then(auth => {
            history.push('/')
        }).catch(
            error => alert(error)
        )
    }

    const register = (e) => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
        .then((authObj) => {
            console.log(authObj)
            if (authObj){
                history.push('/')
            }
        }).catch(
            err => alert(err)
        )
    }

    return (
        <div className='login'>
        <div className='login-container'>
            <Link to='/'>
            <img
            className='login-logo'
            src='http://pngimg.com/uploads/amazon/amazon_PNG24.png'
            alt='logo'
            />
            </Link>
            <h1>Sign In</h1>
            <form>
                <h5>Email</h5>
                <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>

                <h5>Password</h5>
                <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>
                <button className='login-button' onClick={signIn} type='submit'>Sign In</button>
            </form>
            <p>By signing in you agree to the FAKE AMAZON
                CLONE terms and conditions.
            </p>
            <button className='create-account-button' onClick={register}>Create Account</button>
        </div>
        </div>
    );
}

export default LogIn;