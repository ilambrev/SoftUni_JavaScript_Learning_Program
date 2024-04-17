import { html } from '../../node_modules/lit-html/lit-html.js';
import { styleMap } from '../../node_modules/lit-html/directives/style-map.js';

const catsTemplate = (cats, toggle) => html`
    <ul>
        ${cats.map(cat => html`
        <li>
            <img src="./static/images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
            <div class="info">
                <button class="showBtn" @click=${toggle}>${cat.showStatusCode ? 'Show' : 'Hide'} status code</button>
                <div class="status" style=${styleMap(!cat.showStatusCode ? { display: 'block' } : { display: 'none' })} id="${cat.id}">
                    <h4>Status Code: ${cat.statusCode}</h4>
                    <p>${cat.statusMessage}</p>
                </div>
            </div>
        </li>`)}
    </ul>
`;

export default catsTemplate;