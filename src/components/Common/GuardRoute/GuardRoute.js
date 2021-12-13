import { Navigate, Outlet } from 'react-router-dom';
import { useAuthContext } from '../../../contexts/authContext';

const GuardRoute = () => {
    const { isAuthenticated } = useAuthContext();

    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />
}

export default GuardRoute;