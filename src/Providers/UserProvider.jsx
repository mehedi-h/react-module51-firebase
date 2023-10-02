import { createContext, useState } from "react";
import PropTypes from 'prop-types';


export const AuthContext = createContext(null)
const UserProvider = ({children}) => {

    const [user, setUser] = useState(null)

    const authInfo = {user}

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
