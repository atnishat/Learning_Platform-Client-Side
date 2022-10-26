import React from 'react';
import { useContext } from 'react';
import { GoogleAuthProvider } from 'firebase/auth';
import { Button } from 'react-bootstrap';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import './Loginbutton.css'

const Loginbutton = () => {
    const { providerLogIn } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();


    const handleGoogleSignIn = () =>{
        providerLogIn(googleProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.error(error))
    }

    return (
        <div className='lg-sg'>
                  <Button  id='login' onClick={handleGoogleSignIn}>LogIn With Google</Button>
            <Button  id='signin'>Log In with Github</Button>
        </div>
    );
};

export default Loginbutton;