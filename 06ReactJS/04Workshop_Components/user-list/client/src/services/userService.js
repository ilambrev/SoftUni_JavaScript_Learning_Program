const baseUrl = 'http://localhost:3030/jsonstore/users';

// Named export
export const getAll = async () => {

    try {
        const response = await fetch(baseUrl);
        const result = await response.json();

        const data = Object.values(result);

        return data;
    } catch (error) {
        console.log(error);
    }

};