function encodeAndDecodeMessages() {
    const buttons = Array.from(document.querySelectorAll('button'));
    const textareas = Array.from(document.querySelectorAll('textarea'));
    const encodeButton = buttons[0];
    const decodeButton = buttons[1];
    const textareaWithTextToEncode = textareas[0];
    const textareaWithTextToDecode = textareas[1];

    encodeButton.addEventListener('click', encode);
    decodeButton.addEventListener('click', decode);

    function encode() {
        const text = textareaWithTextToEncode.value;

        const encodedText = text.split('').map(c => String.fromCharCode(c.charCodeAt(0) + 1)).join('');

        textareaWithTextToDecode.value = encodedText;
        textareaWithTextToEncode.value = '';
    }

    function decode() {
        const encodedText = textareaWithTextToDecode.value;

        const decodedText = encodedText.split('').map(c => String.fromCharCode(c.charCodeAt(0) - 1)).join('');;
     
        textareaWithTextToDecode.value = decodedText;
    }
}