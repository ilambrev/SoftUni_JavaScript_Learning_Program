const baseUrl = 'http://localhost:3030';

export const getContacts = () => {
    return fetch(baseUrl + '/jsonstore/phonebook')
        .then(response => response.json())
        .then(result => Object.values(result));
}