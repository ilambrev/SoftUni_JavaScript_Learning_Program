import { homePage } from './home.js';
import { showView, updateNav } from './util.js';

const url = 'http://localhost:3030/users/register';
const section = document.querySelector('#form-sign-up');
const form = section.querySelector('form');

form.addEventListener('submit', onSubmit);

export function registerPage() {
    showView(section);
}

async function onSubmit(e) {
    e.preventDefault();

    const formData = new FormData(form);
    const email = formData.get('email');
    const password = formData.get('password');
    const repeatPassword = formData.get('repeatPassword');

    if (!email) {
        alert('The email input must be filled');
    } else if (password.length < 6) {
        alert('The password should be at least 6 characters long');
    } else if (repeatPassword !== password) {
        alert('The repeat password should be equal to the password');
    } else {
        await register(email, password);

        form.reset();

        updateNav();
        homePage();
    }
}

async function register(email, password) {
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