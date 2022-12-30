import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Contexts/Authprovider';
// import Loading from './Loading';

const Privaterouets = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (!user) {
        return <Navigate to="/signup" state={{ from: location }} replace></Navigate>;
    }

    if (user) {
        return children;
    }

    return <Navigate to="/signup" state={{ from: location }} replace></Navigate>;
};



export default Privaterouets;