import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import Loading from './Loading';
import './Register.css'

const Register = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const [agree, setAgree] = useState(false);
    let errorMessage;

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    if (user) {
        navigate('/');
    }

    if (loading || updating) {
        return <Loading></Loading>;
    }

    if (error || updateError) {
        errorMessage = <p className='text-danger'>Error: {error?.message || updateError?.message} </p>
    }

    const handleRegister = async e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        toast.success('User registered successfully!!!');
    }

    return (
        <div className='bg-light register w-50 container shadow p-5 rounded mx-auto my-5'>
            <h2 style={{ textAlign: 'center' }}>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type='text' name='name' placeholder='Your Name' required></input>

                <input type="email" name='email' placeholder='Your Email' required />

                <input type="password" name='password' placeholder='Password' required />

                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="terms">Accept GET-A-LOAN terms and conditions</label>
                <input className='w-50 mx-auto btn btn-primary border-0 mt-2' type="submit" value="Register" disabled={!agree} />
            </form>
            {errorMessage}
            <p>Already have an account? <Link to='/login' className='text-primary pe-auto'>Please Login</Link></p>
            <hr />
            <button
                onClick={() => signInWithGoogle()}
                className="w-50 mx-auto d-block mb-2 btn btn-outline-secondary">Continue with Google</button>
        </div >
    );
};

export default Register;