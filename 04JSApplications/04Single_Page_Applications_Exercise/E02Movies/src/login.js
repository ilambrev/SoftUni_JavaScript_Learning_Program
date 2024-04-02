import { homePage } from './home.js';
import { showView, updateNav } from './util.js';

const url = 'http://localhost:3030/users/login';
const section = document.querySelector('#form-login');
const form = section.querySelector('form');

form.addEventListener('submit', onSubmit);

export function loginPage() {
    showView(section);
}

async function onSubmit(e) {
    e.preventDefault();

    const formData = new FormData(form);
    const email = formData.get('email');
    const password = formData.get('password');

    await login(email, password);
    
    form.reset();
    
    updateNav();
    homePage();
}

async function login(email, password) {
    try {
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        if (!res.ok) {
            const error = await res.json();

            throw new Error(error.message);
        }

        const data = await res.json();
        localStorage.setItem('user', JSON.stringify(data));
    } catch (error) {
        alert(error.message);
        throw error;
    }
}