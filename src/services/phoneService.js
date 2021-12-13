
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
};

export const getOne = (phoneId, signal) => fetch(`${baseUrl}/phone-collection/${phoneId}`, { signal });

export const update = (phoneId, phoneData, token) => {
    return fetch (`${baseUrl}/phone-collection/${phoneId}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify({...phoneData})
    })
};

export const getMyPhones = (userId) => {
    let query = encodeURIComponent(`_ownerId="${userId}"`);

    return fetch (`${baseUrl}/phone-collection?where=${query}`);
}