function solve() {

    const textToModify = document.querySelector('#text').value;
    const namingConvention = document.querySelector('#naming-convention').value;
    const resultSpanElement = document.querySelector('#result');

    const textModifiers = {

        camelCase: (text) => {
            return text.split(' ')
                .map((w, i) => {
                    w = w.toLowerCase();

                    if (i > 0) {
                        w = w.charAt(0).toUpperCase() + w.slice(1);
                    }

                    return w;
                }).join('');
        },
        pascalCase: (text) => {
            return text.split(' ')
                .map(w => {
                    w = w.toLowerCase();
                    w = w.charAt(0).toUpperCase() + w.slice(1);

                    return w;
                })
                .join('');
        },

    }

    let result = '';

    switch (namingConvention) {
        case 'Camel Case':
            result = textModifiers.camelCase(textToModify);
            break;
        case 'Pascal Case':
            result = textModifiers.pascalCase(textToModify);
            break;
        default:
            result = 'Error!';
            break;
    }

    resultSpanElement.textContent = result;

}