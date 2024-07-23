const homeTemplate = () => `
    <h1>Home</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, eaque?</p>
`;

const articlesTemplate = () => `
    <h1>Articles</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, eaque?</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, eaque?</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, eaque?</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, eaque?</p>
`;

const aboutTemplate = () => `
    <h1>About</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, eaque?</p>
`;

const routes = {
    '#home': homeTemplate,
    '#articles': articlesTemplate,
    '#about': aboutTemplate,
};

const root = document.querySelector('#root');

window.addEventListener('hashchange', (e) => {
    let template = routes[location.hash];

    root.innerHTML = template();
});