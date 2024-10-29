import React, { useState, useContext } from 'react';
import classes from './SignUp.module.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { auth } from "../../Utility/firebase"
 // Adjust path as needed
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { DataContext } from '../../Components/DataProvider/Dataprovider';
import { ClipLoader } from 'react-spinners';

function Auth() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navState = useLocation()
    const [loading, setLoading] = useState({
        signIn: false,
        signUp: false
    });

    const [{ user }, dispatch] = useContext(DataContext); // Corrected from userContext to useContext
    const navigate = useNavigate();

    const authHandler = (e) => {
        e.preventDefault();
        if (e.target.name === 'signin') {
            setLoading({ ...loading, signIn: true });

            signInWithEmailAndPassword(auth, email, password).then((userInfo) => {
                dispatch({
                    type: 'SET_USER', // Assuming 'Type' is an undefined variable here
                    user: userInfo.user
                });

                setLoading({ ...loading, signIn: false });
                navigate(navState?.state?.redirect ||'/');
            }).catch((err) => {
                setError(err.message);
                setLoading({ ...loading, signIn: false });
            });

        } else {
            setLoading({ ...loading, signUp: true });
            createUserWithEmailAndPassword(auth, email, password).then((userInfo) => {
                dispatch({
                    type: 'SET_USER', // Same assumption here
                    user: userInfo.user
                });
                setLoading({ ...loading, signUp: false });
                navigate(navState?.state?.redirect ||'/');
            }).catch((err) => {
                setError(err.message);
                setLoading({ ...loading, signUp: false });
            });
        }
    };

    return (
        <section className={classes.login}>
            <Link to="/">
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="" />
            </Link>

            <div className={classes.login_container}>
                <h1>Sign In</h1>
                <form action=" ">
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} type="email"
                            id='email' />
                    </div>

                    <div>
                        <label htmlFor="password">Password</label>
                        <input
                            value={password} // Corrected from email to password
                            onChange={(e) => setPassword(e.target.value)} type="password"
                            id='password' />
                    </div>
                    <button
                        type='submit'
                        onClick={authHandler}
                        name='signin'
                        className={classes.login_signin}>
                        {loading.signIn ? (
                            <ClipLoader color='#0000' size={25} />
                        ) : (
                            "Sign in"
                        )}
                    </button>
                </form>
                <p>
                    You are signing on fake Amazon
                </p>
                <button
                    type='submit'
                    name='signup'
                    onClick={authHandler}
                    className={classes.login_register}>
                    Create your Amazon account
                </button>
                {error && <small style={{ paddingTop: '5px', color: 'red' }}>{error}</small>}
            </div>
        </section>
    );
}

export default Auth;
