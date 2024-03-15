window.addEventListener("load", solve);

function solve() {
    const newReciepeForm = document.querySelector('form');

    newReciepeForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const accessToken = sessionStorage.getItem('accessToken');
        const formData = new FormData(e.currentTarget);

        const name = formData.get('name');
        const img = formData.get('img');
        const ingredients = formData.get('ingredients').split('\n');
        const steps = formData.get('steps').split('\n');

        fetch('http://localhost:3030/data/recipes', {
            method: 'POST',
            headers: {
                "content-type": "application/json",
                "X-Authorization": `${accessToken}`,
            },
            body: JSON.stringify({
                name,
                img,
                ingredients,
                steps,
            })
        })
            .then(res => res.json())
            .then(recipe => {
                window.location.href = "index.html";
            })
            .catch(err => console.log(err));
    });
}