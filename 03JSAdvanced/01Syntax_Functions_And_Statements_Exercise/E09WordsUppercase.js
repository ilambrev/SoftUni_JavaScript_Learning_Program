function wordUppercase(text) {

    const regexp = /[^\w]+/gm;

    console.log(text.toUpperCase().split(regexp).filter(w => w.length !== 0).join(', '));

}

// wordUppercase('Hi, how are you?');
// wordUppercase('hello');