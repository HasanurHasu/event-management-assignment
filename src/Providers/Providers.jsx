import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from '../firebase/firebase.config';
import { GoogleAuthProvider } from "firebase/auth";
export const AuthContext = createContext(null)

const Providers = ({ children }) => {
    const [user, setUser] = useState(null);
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const provider = new GoogleAuthProvider();
 

    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const singIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }
    const singInWithGoogle = () =>{
        return signInWithPopup(auth, provider);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            
            setLoading(false);
        });
        return () => {
            unSubscribe();
        }
    }, [])




    const info = {
        user,
        events,
        loading,
        createUser,
        singIn,
        logOut,
        singInWithGoogle
    }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

Providers.propTypes = {
    children: PropTypes.node
};

export default Providers;