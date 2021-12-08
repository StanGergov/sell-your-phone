
const baseUrl = 'http://localhost:3030'


export const login = (email, password) => {
    return fetch(`${baseUrl}/users/login`, {
        method: 'POST',
        'content-type': 'application/json',
        body: JSON.stringify({ email, password })
    })
        .then(res => res.json())
        .then(result => result)
        .catch(err => console.log(err))
}