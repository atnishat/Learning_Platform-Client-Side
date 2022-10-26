import React from 'react';
import './login.css'
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Headers/Header';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import toast from 'react-hot-toast';



const LogIn = () => {

  const [error, setError] = useState('');

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';
  const { signIn } = useContext(AuthContext);


  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)

      .then(result => {
        const user = result.user;
        console.log(user);
        form.reset();
        setError('');
        toast.success('successfully Log in');
        navigate(from, {replace:true});
      })
      .catch(error => {
        console.error(error)
        setError(error.message);
      })

  }




  return (
    <div className="" >
      <Header></Header>

      <Form onSubmit={handleSubmit} className="my-5" id='form-login'>
        <Form.Group className="form-div" controlId="formBasicEmail" >
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" type="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className=" form-div" controlId="formBasicPassword" >
          <Form.Label>Password</Form.Label>
          <Form.Control name="password" type="password" placeholder="Password" required />
        </Form.Group>

        <Button type="submit" id="SignIn-button" >
          Log In

        </Button>
        <Form.Text className="text-danger" >

          {error}
        </Form.Text>
      </Form>

      <Footer></Footer>
    </div>
  );
};

export default LogIn;