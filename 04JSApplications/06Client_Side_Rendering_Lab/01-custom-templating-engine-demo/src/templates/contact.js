const contactTemplate = (contact) => `
    <div class="card" style="width: 18rem;">
        <img src="https://www.freeiconspng.com/uploads/account-profile-icon-1.png" class="card-img-top" alt="contact">
        <div class="card-body">
            <h5 class="card-title">${contact.person}</h5>
            <p class="card-text">${contact.phone}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
`

export default contactTemplate;