import page from '../node_modules/page/page.mjs';
import { render, html } from "../node_modules/lit-html/lit-html.js";

const createArticleHandler = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const title = formData.get('title');
    const content = formData.get('content');
    const author = formData.get('author');

    fetch('http://localhost:3030/jsonstore/articles', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ title, content, author })
    })
        .then(res => res.json())
        .then(article => {
            page.redirect(`/articles/${article._id}`);
        });
};

const createTemplate = () => html`
    <form @submit=${createArticleHandler}>
        <div>
            <label for="title">Title</label>
            <input type="text" id="title" name="title" />
        </div>

        <div>
            <label for="content">Content</label>
            <textarea id="title" name="content" cols="30" rows="10"></textarea>
        </div>

        <div>
            <label for="author">Author</label>
            <input type="text" id="author" name="author" />
        </div>

        <div>
            <input type="submit" value="Publish" />
        </div>
    </form>
`;

export const createView = () => {
    render(createTemplate(), document.querySelector('#root'));
};