const views = [...document.querySelectorAll('.view-section')];
const userNav = [...document.querySelectorAll('.user')];
const guestNav = [...document.querySelectorAll('.guest')];
const msgContainer = document.querySelector('#welcome-msg');

function hideAll() {
    views.forEach(s => s.style.display = 'none');
}

export function showView(section) {
    hideAll();
    section.style.display = 'block';
}

export function spinner() {
    const element = document.createElement('p');
    element.textContent = 'Loading...';

    return element;
}

export function updateNav() {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user) {
        userNav.forEach(e => e.style.display = 'inline-block');
        guestNav.forEach(e => e.style.display = 'none');
        msgContainer.textContent = `Welcome, ${user.email}`;
    } else {
        guestNav.forEach(e => e.style.display = 'inline-block');
        userNav.forEach(e => e.style.display = 'none');
        msgContainer.textContent = '';
    }
}