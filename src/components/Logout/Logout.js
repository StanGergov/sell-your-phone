import { useEffect } from 'react';
import { useNavigate } from 'react-router'

import { useAuthContext } from '../../contexts/authContext';
import * as authServices from '../../services/authService';

const Logout = () => {

    const navigate = useNavigate();
    const { logout } = useAuthContext();

    useEffect(() => {
        authServices.logout();

        logout();

        navigate('/all-phones');
    })

    return null
};

export default Logout;