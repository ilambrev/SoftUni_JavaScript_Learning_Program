import '../node_modules/react/umd/react.production.min.js';
import '../node_modules/react-dom/umd/react-dom.production.min.js';

var rootDomElement = document.querySelector('#root');

var root = ReactDOM.createRoot(rootDomElement);

//Creating elements with JavaScript

// const reactFirstHeading = React.createElement('h1', {}, 'Hello from JSX!');
// const reactSecondHeading = React.createElement('h2', {}, 'I am syntax extension to JavaScript.');
// const reactHeader = React.createElement('header', { className: 'site-header'}, reactFirstHeading, reactSecondHeading);

// root.render(reactHeader);

//Creating elements with JSX

// const Footer = () => {
//     return React.createElement('div', { className: 'site-footer' }, React.createElement('p', {}, 'All rights reserved ©'));
// };

var Footer = function Footer() {
    return React.createElement(
        'div',
        { className: 'site-footer' },
        React.createElement(
            'p',
            null,
            'All rights reserved \xA9'
        )
    );
};

var body = React.createElement(
    'div',
    null,
    React.createElement(
        'header',
        { className: 'site-header' },
        React.createElement(
            'h1',
            null,
            'Hello again from JSX'
        ),
        React.createElement(
            'h2',
            null,
            'As I said above, I am syntax extension to JavaScript.'
        ),
        React.createElement(
            'p',
            null,
            'Initially I was created by Facebook for use with React.'
        )
    ),
    React.createElement(Footer, null)
);

root.render(body);