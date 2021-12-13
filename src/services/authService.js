
const baseUrl = 'http://localhost:3030'


export const login = (email, password) => {
    return fetch(`${baseUrl}/users/login`, {
        method: 'POST',
        'content-type': 'application/json',
        body: JSON.stringify({ email, password })
    })
        .then(res => res.json())
        .catch(err => console.log(err));
};

export const register = (email, password, name, phoneNumber) => {
    return fetch(`${baseUrl}/users/register`, {
        method: 'POST',
        'content-type': 'application/json',
        body: JSON.stringify({ email, password, name, phoneNumber }),
    })
        .then(res => res.json())
        .catch(err => console.log(err));
};

export const logout = (accessToken) => {
    return fetch(`${baseUrl}/users/logout`, {
        headers: {
            'X-Authorization': accessToken
        }
    })
    .catch(err => console.log(err));
};