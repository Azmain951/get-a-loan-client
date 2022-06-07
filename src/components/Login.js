import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Form } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../firebase.init'
import Loading from './Loading';

const Login = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const emailRef = useRef('');
    const passwordRef = useRef('');
    let errorElement;
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let signinError;
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    if (user || googleUser) {
        toast.success('user logged in successfully');
        navigate(from, { replace: true });
    }

    if (loading || googleLoading || sending) {
        return <Loading></Loading>
    };

    if (error || googleError) {
        signinError = <p className='text-danger text-center'><small>{error?.message || googleError?.message}</small></p>
    }

    const handleLogin = async e => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        await signInWithEmailAndPassword(email, password);
    }

    const handleResetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast.success('password reset link sent on email');
        }
        else {
            toast.error('Please enter your email!!!');
        }
    }

    return (
        <div className='bg-light login-form container w-50 shadow p-5 rounded mx-auto mt-3 mb-5'>
            <h2 className='text-center'>Please Login</h2>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                {signinError}
                <input className="btn btn-primary w-50 mx-auto d-block mb-2" type="submit" value='Login' />
            </Form>
            {errorElement}
            <p>New to GET-A-LOAN? <Link to='/register' className='text-primary pe-auto mt-3'>Please Register</Link></p>
            <p>Forget Password? <button onClick={handleResetPassword} className='btn btn-link text-secondary pe-auto'>Reset Password</button></p>
            <button
                onClick={() => signInWithGoogle()}
                className="w-50 mx-auto d-block mb-2 btn btn-outline-secondary">Continue with Google</button>
        </div >
    );
};

export default Login;