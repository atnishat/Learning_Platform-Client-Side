import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../../firebase/firebase.init';
import { useState } from 'react';
import { useEffect } from 'react';



export const AuthContext = createContext();
const auth = getAuth(app);


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);


    const providerLogIn = (provider) => {
        setLoader(true);
        return signInWithPopup(auth, provider);
    }

    const createUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUserProfile = (profile) =>{
        return updateProfile(auth.currentUser, profile );
    }


    const logOut = () => {
        setLoader(true);
        return signOut(auth);
    }



    useEffect(() => {
        const unSubsCribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('user inside state change', currentUser);
            setUser(currentUser)
            setLoader(false);
        })
        return () => {
            unSubsCribe();
        }
    }, [])

    const authInfo = { user, loader,updateUserProfile, providerLogIn, logOut, createUser, signIn };


    return (
        <AuthContext.Provider value={authInfo}>

            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;