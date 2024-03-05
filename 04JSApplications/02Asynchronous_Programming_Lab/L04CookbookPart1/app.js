window.addEventListener("load", solve);

function solve() {
    const URL = 'http://localhost:3030/jsonstore/cookbook/';
    const mainElement = document.querySelector('main');

    mainElement.textContent = '';

    loadAllRecipes();

    function loadAllRecipes() {
        fetch(`${URL}recipes`)
            .then(res => res.json())
            .then(body => {
                const recipes = Object.values(body);
                recipes.forEach(r => mainElement.appendChild(renderRecipePreview(r)));
            });
    }

    function loadSelectedReciepe(e) {
        const reciepePreviewArticle = e.currentTarget;
        const id = reciepePreviewArticle.dataset._id;

        fetch(`${URL}details/${id}`)
            .then(res => res.json())
            .then(recipe => {
                togleRecipeView(reciepePreviewArticle, recipe);
            });
    }

    function togleRecipeView(reciepePreviewArticle, recipe) {
        if (reciepePreviewArticle.dataset.expanded === 'false') {
            renderRecipeFullInfo(reciepePreviewArticle, recipe);
            reciepePreviewArticle.dataset.expanded = 'true';
        } else {
            reciepePreviewArticle.nextSibling.remove();
            reciepePreviewArticle.dataset.expanded = 'false';
        }
    }

    function renderRecipePreview(recipe) {
        const recipeArticle = document.createElement('article');
        recipeArticle.classList.add('preview');
        recipeArticle.dataset._id = recipe._id;
        recipeArticle.dataset.expanded = 'false';
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

}