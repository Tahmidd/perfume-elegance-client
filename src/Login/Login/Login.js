import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import 'react-toastify/dist/ReactToastify.css';
import GoogleLogin from '../GoogleLogin/GoogleLogin';
import Loading from '../../Shared/Loading/Loading';
import axios from 'axios';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const location = useLocation();
    let errorElement;

    let from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    const navigate = useNavigate();

    if (loading) {
        return <Loading></Loading>
    }

    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }

    if (user) {
        navigate(from, { replace: true });
    }


    const navigateRegister = event => {
        navigate('/register');
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('please enter your email address');
        }
    }

    const handleSubmit = async e => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        await signInWithEmailAndPassword(email, password);
        const { data } = await axios.post('https://morning-tundra-07720.herokuapp.com/login', { email });
        localStorage.setItem('accessToken', data.accessToken);
    }
    return (
        <div className='container w-50 bg-border text-pink border rounded border-dark mt-3'>
            <h1 className='text-pink text-center mt-3'>Please Login</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>

                {errorElement}

                <div className='d-flex justify-content-center'>
                    <Button className='bg-pink border-0 w-75' type="submit">
                        Login
                    </Button>
                </div>
            </Form>

            <p className='mt-3 text-center text-black'>New to the website? <Link to="/register" className='text-pink pe-auto text-decoration-none' onClick={navigateRegister}>Please Register</Link> </p>

            <p className='mt-3 text-center text-black'>Forgot your password? <button className='btn btn-link text-pink text-decoration-none' onClick={resetPassword}>Click Reset</button> </p>
            <GoogleLogin></GoogleLogin>
            <ToastContainer />
        </div>
    );
};

export default Login;