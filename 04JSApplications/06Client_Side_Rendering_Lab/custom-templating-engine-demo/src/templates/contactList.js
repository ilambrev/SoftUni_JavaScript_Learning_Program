import contactTemplate from './contact.js'

const contactListTemplate = (contacts) => `
    <div class="contact-list" style="display: flex; gap: 20px">
        ${contacts.map(c => contactTemplate(c)).join('')}
    </div>
`; 

export default contactListTemplate;