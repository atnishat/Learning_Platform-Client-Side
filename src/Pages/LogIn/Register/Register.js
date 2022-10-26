import React, { useState } from 'react';
import Header from '../../Shared/Headers/Header';
import img from '../../../asset/login-logo.jpg'
import Footer from '../../Shared/Footer/Footer';
import Form from 'react-bootstrap/Form';
import './Register.css'
import { Button } from 'react-bootstrap';
import { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const notify = () => toast(error);

    const [error, setError] = useState('');
    
    const {createUser} = useContext(AuthContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password);

        createUser(email,password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            setError('');
            form.reset();
        })
        .catch(e => {
            console.error(e)
            setError(e.message);
        });
    }


    return (

        <div className="" >
            <Header></Header>
            

                <div className="text-center">
                    <img src={img}
                        style={{ width: '285px' }} alt="logo" />
                   
                </div>
                <Form onSubmit={handleSubmit} className="my-5" id='form'>
                    <Form.Group className="form-div" controlId="formBasicEmail">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control name="name" type="text" placeholder="Your Name" />
                    </Form.Group>
                    <Form.Group className="form-div" controlId="formBasicEmail" >
                        <Form.Label>Photo URL</Form.Label>
                        <Form.Control name="photoURL" type="text" placeholder="Phot URL" />
                    </Form.Group>

                    <Form.Group className="form-div" controlId="formBasicEmail" >
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name="email" type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className=" form-div" controlId="formBasicPassword" >
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="password" type="password" placeholder="Password" required />
                    </Form.Group>

                    <Button  type="submit" id="SignIn-button" onClick={notify}>
                        Register
                        <ToastContainer />
                    </Button>
                    <Form.Text className="text-danger">

                    </Form.Text>
                </Form>

            <Footer></Footer>
        </div>
    );
};

export default Register;