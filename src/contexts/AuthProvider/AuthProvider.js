import React from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useState } from 'react';
import app from '../../firebase/firebase.config';
import { useEffect } from 'react';

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    const signInWithFacebook = () => {
        setLoading(true);
        return signInWithPopup(auth, facebookProvider)
    }

    const signInWithGithub = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider)
    }

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }


    const logOut = () => {
        return signOut(auth)
    }

    const updateUserProfile = async profile => {
        return await updateProfile(auth.currentUser, profile)
    };

    const passwordReset = email => {
        return sendPasswordResetEmail(auth, email)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false);
        })

        return () => unsubscribe();
    }, [])

    const authInfo = {
        user,
        loading,
        setLoading,
        signInWithGoogle,
        signInWithFacebook,
        signInWithGithub,
        createUser,
        logIn,
        logOut,
        updateUserProfile,
        passwordReset,
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;