const url = 'http://localhost:3030';

export const getOptions = () => fetch(url + '/jsonstore/advanced/dropdown');

export function addOption(option) {
    return fetch(url + '/jsonstore/advanced/dropdown', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(option)
    });
}