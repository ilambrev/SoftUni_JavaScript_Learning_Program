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

const notFoundTemplate = () => `
    <h1>Page not found</h1>
`;

const routes = {
    '/': homeTemplate,
    '/home': homeTemplate,
    '/articles': articlesTemplate,
    '/about': aboutTemplate,
};

const root = document.querySelector('#root');

const navigate = (pathname, pushState = true) => {
    if (pushState) {
        history.pushState({}, '', pathname);
    }
    
    let template = routes[pathname];

    if (!template) {
        template = notFoundTemplate;
    }

    root.innerHTML = template();
}

document.body.addEventListener('click', (e) => {
    if (e.target.tagName == 'A') {
        e.preventDefault();

        let url = new URL(e.target.href);

        navigate(url.pathname);
    }
});

window.addEventListener('popstate', (e) => {
    navigate(location.pathname, false);
});

navigate(location.pathname, false);