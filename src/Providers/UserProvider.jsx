import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import auth from "../Firebase/Firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";


export const AuthContext = createContext(null)
const UserProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
            console.log(currentUser);
        })
        return () => {
            unSubscribe()
        }
    }, [])

    const authInfo = {user, createUser, loginUser, logOut, loading}

    return (

        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserProvider;

UserProvider.propTypes = {
    children: PropTypes.node
}

/*** *
 * create context by any name and export it;
 * set provider;
 * set provider value;
 * use the UserProvider in the main.jsx file;
 * access the children in the middle of UserProvider by router provider as a component;
 * get access in UserProvider by desctructuring as a children;
 * ***/
