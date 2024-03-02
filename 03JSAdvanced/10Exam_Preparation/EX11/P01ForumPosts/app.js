window.addEventListener("load", solve);

function solve() {
    const newPostForm = document.querySelector('#newPost form');
    const titleInput = document.querySelector('#post-title');
    const categoryInput = document.querySelector('#post-category');
    const postTextArea = document.querySelector('#post-content');
    const publishButton = document.querySelector('#publish-btn');
    const reviewList = document.querySelector('#review-list');
    const publishedList = document.querySelector('#published-list');
    const clearButton = document.querySelector('#clear-btn');

    publishButton.addEventListener('click', publish);
    clearButton.addEventListener('click', clearPosts);

    newPostForm.reset();

    function publish(e) {
        e.preventDefault();

        const title = titleInput.value;
        const category = categoryInput.value;
        const post = postTextArea.value;

        if (title === '' || category === '' || post === '') {
            return;
        }

        const postListItem = document.createElement('li');
        postListItem.classList.add('rpost');

        const postArticle = document.createElement('article');

        const titleHeading = document.createElement('h4');
        titleHeading.textContent = `${title}`;

        const categoryParagraph = document.createElement('p');
        categoryParagraph.textContent = `Category: ${category}`;

        const contentParagraph = document.createElement('p');
        contentParagraph.textContent = `Content: ${post}`;

        postArticle.appendChild(titleHeading);
        postArticle.appendChild(categoryParagraph);
        postArticle.appendChild(contentParagraph);

        const editButton = document.createElement('button');
        editButton.classList.add('action-btn', 'edit');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', editPost);

        const approveButton = document.createElement('button');
        approveButton.classList.add('action-btn', 'approve');
        approveButton.textContent = 'Approve';
        approveButton.addEventListener('click', approvePost);

        postListItem.appendChild(postArticle);
        postListItem.appendChild(editButton);
        postListItem.appendChild(approveButton);

        reviewList.appendChild(postListItem);

        newPostForm.reset();
    }

    function editPost(e) {
        const postListItem = e.currentTarget.parentElement;

        titleInput.value = postListItem.querySelector('h4').textContent;
        categoryInput.value = postListItem.querySelector('p:nth-of-type(1)').textContent.replace('Category: ', '');
        postTextArea.value = postListItem.querySelector('p:nth-of-type(2)').textContent.replace('Content: ', '');

        postListItem.remove();
    }

    function approvePost(e) {
        const postListItem = e.currentTarget.parentElement;
        const approvedListItem = postListItem.cloneNode(true);

        approvedListItem.querySelector('.edit').remove();
        approvedListItem.querySelector('.approve').remove();

        publishedList.appendChild(approvedListItem);

        postListItem.remove();
    }

    function clearPosts() {
        publishedList.textContent = '';
    }
}