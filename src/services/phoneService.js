
const baseUrl = 'http://localhost:3030/data'


export const getAll = () => fetch(`${baseUrl}/phone-collection`);

export const create = (phoneData, token) => {
    return fetch (`${baseUrl}/phone-collection`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify({...phoneData})
    })
}

export const getOne = (id) => fetch(`${baseUrl}/phone-collection/${id}`)