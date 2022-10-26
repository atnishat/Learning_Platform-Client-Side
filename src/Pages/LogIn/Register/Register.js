import React, { useState } from 'react';
import Header from '../../Shared/Headers/Header';
import img from '../../../asset/login-logo.jpg'
import Footer from '../../Shared/Footer/Footer';
import Form from 'react-bootstrap/Form';
import './Register.css'
import { Button } from 'react-bootstrap';
import { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import { toast } from 'react-toastify';


const Register = () => {


    const [error, setError] = useState('');

    const { createUser, updateUserProfile } = useContext(AuthContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                toast.success('Registered')
                form.reset();
                handleUpdateUserProfile(name, photoURL);
            })
            .catch(e => {
                console.error(e)
                setError(e.message);
            });
    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error));
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

                <Button type="submit" id="SignIn-button" >
                    Register

                </Button>
                <Form.Text className="text-danger">
                    {error}
                </Form.Text>
            </Form>

            <Footer></Footer>
        </div>
    );
};

export default Register;