import React from 'react';
import { useContext } from 'react';
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { Button } from 'react-bootstrap';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import './Loginbutton.css'
import app from '../../../firebase/firebase.init';

const auth = getAuth(app);


const Loginbutton = () => {
    const { providerLogIn } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = () =>{
        providerLogIn(googleProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.error(error))
    }



    const handleGitHubSignIn = () =>{
        signInWithPopup(auth, githubProvider)
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
        .catch(error =>{
            console.error('error', error)
        })
    }

    return (
        <div className='lg-sg'>
                  <Button  id='login' onClick={handleGoogleSignIn}>LogIn With Google</Button>
            <Button  id='signin' onClick={handleGitHubSignIn}>Log In with Github</Button>
        </div>
    );
};

export default Loginbutton;