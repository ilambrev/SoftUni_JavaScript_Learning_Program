function solve() {

    const newPostForm = document.querySelector('aside form');
    const authorInput = document.querySelector('#creator');
    const titleInput = document.querySelector('#title');
    const categoryInput = document.querySelector('#category');
    const contentTextarea = document.querySelector('#content');
    const createButton = document.querySelector('button.create');
    const contentSection = document.querySelector('.site-content section');
    const archiveOrderedList = document.querySelector('.archive-section ol');

    createButton.addEventListener('click', onClickSubmitPost);

    function onClickSubmitPost(e) {
        e.preventDefault();

        const author = authorInput.value;
        const title = titleInput.value;
        const category = categoryInput.value;
        const content = contentTextarea.value;

        if (author === '' || title === '' || category === '' || content === '') {
            return;
        }

        const postArticle = document.createElement('article');

        const titleHeading = document.createElement('h1');
        titleHeading.textContent = `${title}`;

        const categoryParagraph = document.createElement('p');
        categoryParagraph.textContent = 'Category: ';

        const categoryContentStrong = document.createElement('strong');
        categoryContentStrong.textContent = `${category}`;

        categoryParagraph.appendChild(categoryContentStrong);

        const creatorParagraph = document.createElement('p');
        creatorParagraph.textContent = 'Creator: ';

        const creatorContentStrong = document.createElement('strong');
        creatorContentStrong.textContent = `${author}`;

        creatorParagraph.appendChild(creatorContentStrong);

        const contentParagraph = document.createElement('p');
        contentParagraph.textContent = `${content}`;

        const buttonsContainer = document.createElement('div');
        buttonsContainer.classList.add('buttons');

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('btn', 'delete');
        deleteButton.addEventListener('click', onClickDelete);

        const archiveButton = document.createElement('button');
        archiveButton.textContent = 'Archive';
        archiveButton.classList.add('btn', 'archive');
        archiveButton.addEventListener('click', onClickArchive);

        buttonsContainer.appendChild(deleteButton);
        buttonsContainer.appendChild(archiveButton);

        postArticle.appendChild(titleHeading);
        postArticle.appendChild(categoryParagraph);
        postArticle.appendChild(creatorParagraph);
        postArticle.appendChild(contentParagraph);
        postArticle.appendChild(buttonsContainer);

        contentSection.appendChild(postArticle);

        newPostForm.reset();
    }

    function onClickArchive(e) {
        const postArticle = e.currentTarget.parentElement.parentElement;
        const postTitle = postArticle.querySelector('h1').textContent;

        const postTitleListItem = document.createElement('li');
        postTitleListItem.textContent = `${postTitle}`;

        archiveOrderedList.appendChild(postTitleListItem);

        const sortedPostsTitles = Array.from(archiveOrderedList.querySelectorAll('li'))
            .sort((t1, t2) => t1.textContent.localeCompare(t2.textContent));

        archiveOrderedList.innerHTML = '';

        sortedPostsTitles.forEach(t => archiveOrderedList.appendChild(t));

        postArticle.remove();
    }

    function onClickDelete(e) {
        const postArticle = e.currentTarget.parentElement.parentElement;

        postArticle.remove();
    }
}