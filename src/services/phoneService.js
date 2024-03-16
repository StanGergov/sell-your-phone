
const baseUrl = 'https://sell-your-phone-6fc13-default-rtdb.europe-west1.firebasedatabase.app';

export const getAll = () => fetch(`${baseUrl}/phone-collection.json`);

export const create = (phoneData, token) => {
    return fetch(`${baseUrl}/phone-collection.json`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify({ ...phoneData })
    })
};

export const getOne = (phoneId, signal) => fetch(`${baseUrl}/phone-collection/${phoneId}.json`, { signal });


export const update = (phoneId, phoneData, token) => {
    return fetch(`${baseUrl}/phone-collection/${phoneId}.json`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify({ ...phoneData })
    })
};

// export const getMyPhones = (userId) => {
//     // let query = encodeURIComponent(`ownerId="${userId}"`);

//     return fetch(`${baseUrl}/phone-collection.json?ownerId=${userId}`);
//     // ${baseUrl}/users.json?userId=${ownerId}
// }

export const deletePhone = (phoneId, accessToken) => {
    return fetch(`${baseUrl}/phone-collection/${phoneId}.json`, {
        method: 'DELETE',
        headers: {
            'X-Authorization': accessToken
        }
    }).then(res => res.json());
}