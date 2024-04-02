import { homePage } from './home.js';

const url = 'http://localhost:3030/data';

export async function deleteMovie(movieId) {
    const user = JSON.parse(localStorage.getItem('user'));

    try {
        const res = await fetch(`${url}/movies/${movieId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': `${user.accessToken}`
            },
            body: null
        });

        if (!res.ok) {
            const error = await res.json();

            throw new Error(error.message);
        }

        const data = await res.json();

        homePage();
    } catch (error) {
        alert(error.message);
        throw error;
    }
}