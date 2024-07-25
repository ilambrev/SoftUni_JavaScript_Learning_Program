import { render, html } from "../node_modules/lit-html/lit-html.js";

const articleTemplate = (article) => html`
    <article>
        <h2>${article.title}</h2>
        <p>Author: ${article.author}</p>
        <a class="read-more" href="/articles/${article._id}"> [article content...]</a>
    </article>
`;

const articlesTemplate = (articles) => html`
    <h1>Articles</h1>
    ${articles.map(a => html`${articleTemplate(a)}`)}
`;

const root = document.querySelector('#root');

const getArticles = () =>
    fetch('http://localhost:3030/jsonstore/articles')
        .then(res => res.json())
        .then(data => Object.values(data));

export const articlesView = (ctx) => {
    getArticles()
        .then(articles => {
            render(articlesTemplate(articles), root);
        });
};