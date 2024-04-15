import { html } from '../../node_modules/lit-html/lit-html.js';

const contactTemplate = (contact) => html`
    <div class="card" style="width: 18rem;">
        <img src="https://www.freeiconspng.com/uploads/account-profile-icon-1.png" class="card-img-top" alt="contact">
        <div class="card-body">
            <h5 class="card-title">${contact.person}</h5>
            <p class="card-text">${contact.phone}</p>
            <a href="#" class="btn btn-primary">Edit</a>
        </div>
    </div>
`

export default contactTemplate;