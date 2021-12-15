import { useEffect } from 'react';
import { useNavigate } from 'react-router'

import { useAuthContext } from '../../contexts/authContext';
import * as authServices from '../../services/authService';

const Logout = () => {

    const navigate = useNavigate();
    const {user, logout} = useAuthContext();

    useEffect(() => {
        authServices.logout(user.accessToken)
        .then(() => {
            logout();

            navigate('/');
        })
    })

    return null
};

export default Logout;