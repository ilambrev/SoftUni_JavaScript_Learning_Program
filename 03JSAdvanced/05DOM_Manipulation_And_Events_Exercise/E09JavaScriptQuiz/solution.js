function solve() {
    const answers = {
        'onclick': 1,
        'JSON.stringify()': 1,
        'A programming API for HTML and XML documents': 1,
    }

    const resultsUnorderedList = document.querySelector('#results');
    const resultsHeading = document.querySelector('#results h1');
    const sections = Array.from(document.querySelectorAll('section'));

    Array.from(document.querySelectorAll('.quiz-answer'))
        .map(answer => answer.addEventListener('click', checkAnswer));

    let rightAnswersCounter = 0;
    let sectionIndex = 0;

    function checkAnswer(e) {
        const answer = e.currentTarget.querySelector('.answer-text').textContent;

        if (answers.hasOwnProperty(answer)) {
            rightAnswersCounter += answers[answer];
        }

        sections[sectionIndex].style.display = 'none';

        if (sectionIndex < sections.length - 1) {
            sections[sectionIndex + 1].style.display = 'block';
        } else {
            resultsHeading.textContent = rightAnswersCounter === sections.length ?
                'You are recognized as top JavaScript fan!' : `You have ${rightAnswersCounter} right answers`;

            resultsUnorderedList.style.display = 'block';
        }

        sectionIndex++;
    }
}