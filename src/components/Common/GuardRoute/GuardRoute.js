import { Navigate, Outlet } from 'react-router-dom';
import { useAuthContext } from '../../../contexts/authContext';
import { useNotificationContext, types } from '../../../contexts/notificationContext';

const GuardRoute = () => {
    const { isAuthenticated } = useAuthContext();

    const { showNotification } = useNotificationContext();

    if(isAuthenticated){
        return <Outlet />
    } else {
        return <>
            {showNotification('You should login first', types.info)}
            <Navigate to="/login"/>
        </>
    }
}

export default GuardRoute;