import { html } from '../../node_modules/lit-html/lit-html.js';

const navbarTemplate = (addContactHandler) => html`
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <form class="d-flex" @submit=${addContactHandler}>
                            <button class="nav-link">Add Contact</button>
                            <input class="me-2" type="text" name="person" placeholder="Persone name" />
                            <input class="me-2" type="text" name="phone" placeholder="Phone number" />
                        </form>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
`;

export default navbarTemplate;