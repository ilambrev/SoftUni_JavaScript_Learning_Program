const url = 'http://localhost:3030';

export const getAllRows = () => fetch(url + '/jsonstore/advanced/table');