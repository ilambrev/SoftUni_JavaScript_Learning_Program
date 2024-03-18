function solution() {
    const baseUrl = 'http://localhost:3030/jsonstore/advanced/articles/';

    const mainSection = document.querySelector('#main');

    fetch(`${baseUrl}list`)
        .then(res => res.json())
        .then(article => {
            article.forEach(a => {
                mainSection.appendChild(renderArticle(a));
            })
        })
        .catch(err => console.log(err));

    function renderArticle(article) {
        const accordionContainer = document.createElement('div');
        accordionContainer.classList.add('accordion');

        const headContainer = document.createElement('div');
        headContainer.classList.add('head');

        const titleSpan = document.createElement('span');
        titleSpan.textContent = `${article.title}`;

        const moreButton = document.createElement('button');
        moreButton.classList.add('button');
        moreButton.id = `${article._id}`;
        moreButton.textContent = 'More';
        moreButton.addEventListener('click', toggleDescription);

        headContainer.appendChild(titleSpan);
        headContainer.appendChild(moreButton);

        const descriptionContainer = document.createElement('div');
        descriptionContainer.classList.add('extra');

        const descriptionParagraph = document.createElement('p');

        descriptionContainer.appendChild(descriptionParagraph);

        accordionContainer.appendChild(headContainer);
        accordionContainer.appendChild(descriptionContainer);

        return accordionContainer;
    }

    function toggleDescription(e) {
        const id = e.currentTarget.id;

        if (e.currentTarget.textContent === 'More') {
            const descriptionParagraph = e.currentTarget.parentElement.nextSibling.querySelector('p');
            if (descriptionParagraph.textContent === '') {
                fetch(`${baseUrl}details/${id}`)
                    .then(res => res.json())
                    .then(description => {
                        descriptionParagraph.textContent = `${description.content}`;
                    })
                    .catch(err => console.log(err));
            }

            e.currentTarget.parentElement.nextSibling.style.display = 'block';
            e.currentTarget.textContent = 'Less';
        } else if (e.currentTarget.textContent === 'Less') {
            e.currentTarget.parentElement.nextSibling.style.display = 'none';
            e.currentTarget.textContent = 'More';
        }
    }

}

solution();