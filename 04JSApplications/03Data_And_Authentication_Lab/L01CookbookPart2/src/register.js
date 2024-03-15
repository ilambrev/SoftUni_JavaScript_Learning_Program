window.addEventListener("load", solve);

function solve() {
    const registerForm = document.querySelector('form');

    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const email = formData.get('email');
        const password = formData.get('password');
        const repeatPassword = formData.get('rePass');

        if (password !== repeatPassword) {
            alert('Passwords do NOT match!');
            return;
        }

        fetch('http://localhost:3030/users/register', {
            method: 'POST',
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                email,
                password
            })
        })
            .then(res => res.json())
            .then(user => {
                sessionStorage.setItem('accessToken', user.accessToken);

                window.location.href = "index.html";
            })
            .catch(err => console.log(err));
    });
}