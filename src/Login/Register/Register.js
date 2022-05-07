import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import GoogleLogin from '../GoogleLogin/GoogleLogin';

const Register = () => {
    const [agree, setAgree] = useState(false);
    let errorElement;

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigate = useNavigate();

    const navigateLogin = event => {
        navigate('/login');
    }

    if (loading || updating) {

    }

    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }

    if (user) {

    }

    const handleRegister = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        navigate('/home');

    }
    return (
        <div className='container w-50 bg-border text-pink border rounded border-dark mt-3 '>
            <h1 className='text-pink text-center '>Please Register</h1>

            <Form className='text-center' onSubmit={handleRegister} >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <br />
                    <input className='w-75 ' type="text" name="name" id="" placeholder='Your Name' />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <br />
                    <input className='w-75' type="email" name="email" id="" placeholder='Email Address' required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <br />
                    <input className='w-75' type="password" name="password" id="" placeholder='Password' required />
                </Form.Group>
                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />

                <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="terms">Accept Terms and Conditions</label>
                <br />
                {errorElement}
                <div className='d-flex justify-content-center'>
                    <input
                        disabled={!agree}
                        className='w-50 mx-auto btn btn-primary mt-2 bg-pink border-0'
                        type="submit"
                        value="Register" />
                </div>
            </Form>


            <p className='mt-3 text-center text-black'>Already have an account? <Link to="/login" className='pe-auto text-decoration-none text-pink' onClick={navigateLogin}>Please Login First</Link> </p>

            <GoogleLogin></GoogleLogin>


        </div>
    );
};

export default Register;