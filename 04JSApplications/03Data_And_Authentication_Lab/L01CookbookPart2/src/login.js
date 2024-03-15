window.addEventListener("load", solve);

function solve() {
    const loginForm = document.querySelector('form');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(e.currentTarget);

        const email = formData.get('email');
        const password = formData.get('password');

        fetch('http://localhost:3030/users/login', {
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