import { useContext } from "react";
import { AuthContext } from "../../Providers/UserProvider";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';


const PrivateRoute = ({children}) => {

    const { user, loading } = useContext(AuthContext)

    if (loading) {
        return <span className="loading loading-ring loading-lg flex justify-center items-center"></span>
    }

    if (user) {
        return children
    }

    return <Navigate to='/login'></Navigate>
};

export default PrivateRoute;

PrivateRoute.propTypes = {
    children: PropTypes.node
}