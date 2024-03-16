import { auth } from '../firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'

const baseUrl = 'https://sell-your-phone-6fc13-default-rtdb.europe-west1.firebasedatabase.app';

export const login = (email, password) => {
    // return fetch(`${baseUrl}/accounts:signInWithPassword?key=${API_KEY}`, {
    //     method: 'POST',
    //     'content-type': 'application/json',
    //     body: { email, password }
    // })
    //     .then(res => {
    //         console.log(res);

    //         res.json()
    //     })
    //     .catch(err => console.log(err));

    return signInWithEmailAndPassword(auth, email, password)
        .then((res) => res)
        .catch(err => err)
};

export const register = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
        .then((res) => res)
        .catch(err => console.log(err.message))


    // return fetch(`${baseUrl}/accounts:signUp?key=${API_KEY}`, {
    //     method: 'POST',
    //     'content-type': 'application/json',
    //     body: JSON.stringify({ email, password, name, phoneNumber }),
    // })
    //     .then(res => {
    //         console.log(res);
    //         res.json()
    //     })
    //     .catch(err => console.log(err));
};

export const createNewUser = (newUser, token) => {
    return fetch(`${baseUrl}/users.json`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify({ ...newUser })
    })
};

export const getOwnerData = (ownerId) => fetch(`${baseUrl}/users.json?userId=${ownerId}` )

export const logout = () => {
    // return fetch(`${baseUrl}/users/logout`, {
    //     headers: {
    //         'X-Authorization': accessToken
    //     }
    // })
    //     .catch(err => console.log(err));

    signOut(auth)
        .then(res => res)
        .catch(err => err)
};

export const isOwner = (ownerId, userId) => ownerId === userId;