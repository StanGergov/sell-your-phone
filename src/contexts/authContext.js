import { createContext, useContext } from 'react';

import useLocalStorage from '../hooks/useLocaleStorage';

const initialAuthState = {
    _id: '',
    name: '',
    phoneNumber: '',
    email: '',
    accessToken: '',
};

export const AuthContext = createContext(initialAuthState);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useLocalStorage('user', initialAuthState);

    const login = (authData) => {
        const {uid, name, phoneNumber, email, accessToken} = authData.user;
        setUser({_id: uid, name, phoneNumber, email, accessToken});

        console.log(authData);
    }

    const logout = () => {
        setUser(initialAuthState);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, isAuthenticated: user.email }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () => {
    const authState = useContext(AuthContext);

    return authState;
}