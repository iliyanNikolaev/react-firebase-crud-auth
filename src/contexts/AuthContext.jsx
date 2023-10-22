import { createContext, useContext, useEffect, useState } from "react";
import { auth } from '../config/firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

    const [userData, setUserData] = useState(() => {

        const stateInLocalStorage = localStorage.getItem('firebaseAuth');
        if(stateInLocalStorage) {
            const persistedState = JSON.parse(stateInLocalStorage);

            return {
                isAuthenticated: true,
                ...persistedState
            }
        }

        return {
            isAuthenticated: false
        }
    });

    const loginHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const { email, password } = Object.fromEntries(formData);

        if (email == '' || password == '') {
            return alert('All fields are required!');
        }
        try {
            await signInWithEmailAndPassword(auth, email, password);
            e.target.reset();
            const user = auth.currentUser;
            localStorage.setItem('firebaseAuth', JSON.stringify(user));
            setUserData(prev => ({
                isAuthenticated: true,
                ...user
            }));
        } catch (err) {
            console.log(err);
            return alert(err.code);
            // this is the alert message => auth/invalid-email
        }
    }

    const registerHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const { email, password } = Object.fromEntries(formData);
 
        if (email == '' || password == '') {
            return alert('All fields are required!');
        }
        console.log(email);
        console.log(password);
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            e.target.reset();
            const user = auth.currentUser;
            localStorage.setItem('firebaseAuth', JSON.stringify(user));
            setUserData(prev => ({
                isAuthenticated: true,
                ...user
            }));
        } catch (err) {
            console.log(err)
            return alert(err.code);
            // this is the alert message => auth/invalid-email
        }
    }

    const logoutHandler = async () => {
        try {
            await signOut(auth);
            localStorage.removeItem('firebaseAuth');
            setUserData(prev => ({
                isAuthenticated: false
            }));
        } catch (err) {
            return alert(err.code);
        }
    }

    const ctx = {
        loginHandler,
        registerHandler,
        logoutHandler,
        userData
    }

    return (
        <AuthContext.Provider value={ctx}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => {
    const ctx = useContext(AuthContext);
    return ctx;
}
