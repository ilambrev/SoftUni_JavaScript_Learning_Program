import '../node_modules/react/umd/react.production.min.js';
import '../node_modules/react-dom/umd/react-dom.production.min.js';

const rootDomElement = document.querySelector('#root');

const root = ReactDOM.createRoot(rootDomElement);

//Creating elements with JavaScript

// const reactFirstHeading = React.createElement('h1', {}, 'Hello from JSX!');
// const reactSecondHeading = React.createElement('h2', {}, 'I am syntax extension to JavaScript.');
// const reactHeader = React.createElement('header', { className: 'site-header'}, reactFirstHeading, reactSecondHeading);

// root.render(reactHeader);

//Creating elements with JSX

// const Footer = () => {
//     return React.createElement('div', { className: 'site-footer' }, React.createElement('p', {}, 'All rights reserved ©'));
// };

const Footer = () => (
    <div className='site-footer'>
        <p>All rights reserved &copy;</p>
    </div>
);

const body = (
    <div>
        <header className='site-header'>
            <h1>Hello again from JSX</h1>
            <h2>As I said above, I am syntax extension to JavaScript.</h2>
            <p>Initially I was created by Facebook for use with React.</p>
        </header>

        <Footer />
    </div>
);

root.render(body);