function solve() {
    const baseUrl = 'http://localhost:3030/jsonstore/collections/books';

    const createBookForm = document.querySelector('form');
    const tableBody = document.querySelector('tbody');
    const loadBooksButton = document.querySelector('#loadBooks');
    const submitButton = document.querySelector('form button');

    tableBody.innerHTML = '';

    submitButton.addEventListener('click', createBook)
    loadBooksButton.addEventListener('click', loadAllBooks);

    let editedBookId = '';

    async function loadAllBooks() {
        tableBody.innerHTML = '';

        try {
            const res = await fetch(baseUrl);
            const bokksObject = await res.json();

            Object.entries(bokksObject)
                .forEach(([bookId, bookData]) => renderBook(bookId, bookData));
        } catch (err) {
            console.log(err);
        }
    }

    function renderBook(bookId, bookData) {
        const bookRow = document.createElement('tr');
        bookRow.dataset.id = `${bookId}`;

        const titleCell = document.createElement('td');
        titleCell.textContent = `${bookData.title}`;

        const authorCell = document.createElement('td');
        authorCell.textContent = `${bookData.author}`;

        const buttonsCell = document.createElement('td');

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', editBook);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', deleteBook);

        buttonsCell.appendChild(editButton);
        buttonsCell.appendChild(deleteButton);

        bookRow.appendChild(titleCell);
        bookRow.appendChild(authorCell);
        bookRow.appendChild(buttonsCell);

        tableBody.appendChild(bookRow);
    }

    async function createBook(e) {
        e.preventDefault();

        const formData = new FormData(createBookForm);

        const author = formData.get('author');
        const title = formData.get('title');

        if (author === '' || title === '') {
            return;
        }

        try {
            const res = await fetch(baseUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    author,
                    title,
                }),
            })
        } catch (err) {
            console.log(err);
        }

        createBookForm.reset();
        await loadAllBooks();
    }

    function editBook(e) {
        toggleButtonFunction();

        editedBookId = e.currentTarget.parentElement.parentElement.dataset.id;
        const [title, author] = Array.from(e.currentTarget.parentElement.parentElement.querySelectorAll('td'))
            .map(td => td.textContent);

        createBookForm.querySelector('input[name="title"]').value = title;
        createBookForm.querySelector('input[name="author"]').value = author;
    }

    async function saveBook(e) {
        e.preventDefault();

        const formData = new FormData(createBookForm);

        const author = formData.get('author');
        const title = formData.get('title');

        try {
            const res = await fetch(`${baseUrl}/${editedBookId}`, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    author,
                    title,
                    _id: editedBookId,
                }),
            });
        } catch (err) {
            console.log(err);
        }

        toggleButtonFunction();
        createBookForm.reset();
        await loadAllBooks();
    }

    async function deleteBook(e) {
        const bookId = e.currentTarget.parentElement.parentElement.dataset.id;

        try {
            const res = await fetch(`${baseUrl}/${bookId}`, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json',
                },
                body: null,
            });
        } catch (err) {
            console.log(err);
        }

        await loadAllBooks();
    }

    function toggleButtonFunction() {
        const formHeading = createBookForm.querySelector('h3');
        const formButton = createBookForm.querySelector('button');

        if (formHeading.textContent === 'FORM') {
            formHeading.textContent = 'Edit FORM';

            formButton.textContent = 'Save';
            formButton.removeEventListener('click', createBook);
            formButton.addEventListener('click', saveBook);
        } else {
            formHeading.textContent = 'FORM';

            formButton.textContent = 'Submit';
            formButton.removeEventListener('click', saveBook);
            formButton.addEventListener('click', createBook);
        }
    }
}

solve();