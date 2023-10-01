import { useContext } from "react";

const UserProvider = () => {

    // 1. create context by any name
    const AuthContext = useContext(null)
    // 3. set provider value;
    const authInfo = {name : 'one two three'}

    return (

        // 2. set provider
        <UserProvider.Provider value={authInfo}>

        </UserProvider.Provider>
    );
};

export default UserProvider;


