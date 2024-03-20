// Judge 100/100 result
// Solution withot making GET request by post ID to obtain data for selected post

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

    viewButton.disabled = true;

    postCommentsList.textContent = '';

    let posts = [];

    async function loadAllPosts() {
        postsSelectElement.textContent = '';
        postCommentsList.textContent = '';

        try {
            const res = await fetch(`${baseUrl}/posts`)
            const postsObject = await res.json();

            posts = Object.values(postsObject);

            posts.forEach(post => renderPost(post));
        } catch (err) {
            console.log(err);
        }

        viewButton.disabled = false;
    }

    async function loadPostWithComments() {
        const postId = postsSelectElement.value;
        const post = posts.find(p => p.id === postId);

        postTitleHeading.textContent = `${post.title}`;
        postBodyParagraph.textContent = `${post.body}`;

        const postComments = await getPostComments(postId);

        postCommentsList.textContent = '';

        postComments.forEach(comment => renderComment(comment));
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