// Judge 50/100 result
// Solution (complying with the condition of the task)
// including separate GET request by post ID for obtaining selected post data

function attachEvents() {
    const baseUrl = 'http://localhost:3030/jsonstore/blog';

    const postsSelectElement = document.querySelector('#posts');
    const postTitleHeading = document.querySelector('#post-title');
    const postBodyParagraph = document.querySelector('#post-body');
    const postCommentsList = document.querySelector('#post-comments');
    const loadPostsButton = document.querySelector('#btnLoadPosts');
    const viewButton = document.querySelector('#btnViewPost');

    loadPostsButton.addEventListener('click', loadAllPosts);
    viewButton.addEventListener('click', loadPostWithComments);

    postCommentsList.textContent = '';

    async function loadAllPosts() {
        postsSelectElement.textContent = '';
        postCommentsList.textContent = '';

        try {
            const res = await fetch(`${baseUrl}/posts`)
            const postsObject = await res.json();

            Object.values(postsObject).forEach(post => renderPost(post));
        } catch (err) {
            console.log(err);
        }
    }

    async function loadPostWithComments() {
        const postId = postsSelectElement.value;
        const post = await getPostData(postId);
        const postComments = await getPostComments(postId);

        postTitleHeading.textContent = `${post.title}`;
        postBodyParagraph.textContent = `${post.body}`;

        postCommentsList.textContent = '';

        postComments.forEach(comment => renderComment(comment));
    }

    async function getPostData(postId) {
        try {
            const res = await fetch(`${baseUrl}/posts/${postId}`);
            const post = await res.json();

            return post;
        } catch (err) {
            console.log(err);
        }
    }

    async function getPostComments(postId) {
        try {
            const res = await fetch(`${baseUrl}/comments`);
            const commentsObject = await res.json();

            return Object.values(commentsObject)
                .filter(c => c.postId === postId);
        } catch (err) {
            console.log(err);
        }
    }

    function renderPost(post) {
        const optionElement = document.createElement('option');
        optionElement.value = post.id;
        optionElement.text = post.title;

        postsSelectElement.appendChild(optionElement);
    }

    function renderComment(comment) {
        const commentListItem = document.createElement('li');
        commentListItem.setAttribute('id', `${comment.id}`);
        commentListItem.textContent = `${comment.text}`;

        postCommentsList.appendChild(commentListItem);
    }
}

attachEvents();