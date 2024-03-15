window.addEventListener("load", solve);

function solve() {
    const URL = 'http://localhost:3030/data/recipes';
    const mainElement = document.querySelector('main');
    const guestNavBarContainer = document.querySelector('#guest');
    const userNavBarContainer = document.querySelector('#user');
    const logoutButton = document.querySelector('#logoutBtn');

    if (sessionStorage.getItem('accessToken') !== null) {
        userNavBarContainer.style.display = 'inline-block';
        logoutButton.addEventListener('click', logout);
    } else {
        guestNavBarContainer.style.display = 'inline-block';
    }

    mainElement.textContent = '';

    loadAllRecipes();

    function loadAllRecipes() {
        fetch(`${URL}?select=_id%2Cname%2Cimg`)
            .then(res => res.json())
            .then(body => {
                const recipes = Object.values(body);
                recipes.forEach(r => mainElement.appendChild(renderRecipePreview(r)));
            });
    }

    function loadSelectedReciepe(e) {
        const reciepePreviewArticle = e.currentTarget;
        const id = reciepePreviewArticle.dataset._id;

        fetch(`${URL}/${id}`)
            .then(res => res.json())
            .then(recipe => {
                togleRecipeView(reciepePreviewArticle, recipe);
            });
    }

    function togleRecipeView(reciepePreviewArticle, recipe) {
        renderRecipeFullInfo(reciepePreviewArticle, recipe);
        reciepePreviewArticle.style.display = 'none';
        reciepePreviewArticle.nextSibling.addEventListener('click', (e) => {
            reciepePreviewArticle.style.display = '';
            e.currentTarget.remove();
        });
    }

    function renderRecipePreview(recipe) {
        const recipeArticle = document.createElement('article');
        recipeArticle.classList.add('preview');
        recipeArticle.dataset._id = recipe._id;
        recipeArticle.addEventListener('click', loadSelectedReciepe);

        const titleContainer = document.createElement('div');
        titleContainer.classList.add('title');

        const titleHeading = document.createElement('h2');
        titleHeading.textContent = `${recipe.name}`;

        titleContainer.appendChild(titleHeading);

        const imageContainer = document.createElement('div');
        imageContainer.classList.add('small');

        const imageElement = document.createElement('img');
        imageElement.src = `${recipe.img}`;

        imageContainer.appendChild(imageElement);

        recipeArticle.appendChild(titleContainer);
        recipeArticle.appendChild(imageContainer);

        return recipeArticle;
    }

    function renderRecipeFullInfo(reciepePreviewArticle, recipe) {
        const recipeArticle = document.createElement('article');

        const titleHeading = document.createElement('h2');
        titleHeading.textContent = `${recipe.name}`;

        const bandContainer = document.createElement('div');
        bandContainer.classList.add('band');

        const imageContainer = document.createElement('div');
        imageContainer.classList.add('thumb');

        const imageElement = document.createElement('img');
        imageElement.src = `${recipe.img}`;

        imageContainer.appendChild(imageElement);

        const ingredientsContainer = document.createElement('div');
        ingredientsContainer.classList.add('ingredients');

        const ingredientsHeading = document.createElement('h3');
        ingredientsHeading.textContent = 'Ingredients:';

        const ingredientsList = document.createElement('ul');

        const ingredientsListItems = recipe.ingredients.map(i => {
            const listItem = document.createElement('li');
            listItem.textContent = `${i}`;

            return listItem;
        });

        ingredientsListItems.forEach(i => ingredientsList.appendChild(i));

        ingredientsContainer.appendChild(ingredientsHeading);
        ingredientsContainer.appendChild(ingredientsList);

        bandContainer.appendChild(imageContainer);
        bandContainer.appendChild(ingredientsContainer);

        const descriptionContainer = document.createElement('div');
        descriptionContainer.classList.add('description');

        const preparationHeading = document.createElement('h3');
        preparationHeading.textContent = 'Preparation:';

        const stepsParagraphs = recipe.steps.map(s => {
            const stepParagraph = document.createElement('p');
            stepParagraph.textContent = `${s}`;

            return stepParagraph;
        });

        descriptionContainer.appendChild(preparationHeading);

        stepsParagraphs.forEach(s => descriptionContainer.appendChild(s));

        recipeArticle.appendChild(titleHeading);
        recipeArticle.appendChild(bandContainer);
        recipeArticle.appendChild(descriptionContainer);

        reciepePreviewArticle.after(recipeArticle);
    }

    function logout() {
        fetch('http://localhost:3030/users/logout', {
            method: "GET",
            headers: {
                'X-Authorization': sessionStorage.getItem('accessToken'),
            }
        })
            .then(() => {
                sessionStorage.removeItem('accessToken');
                window.location.href = "index.html";;
            })
            .catch(err => console.log(err));
    }

}