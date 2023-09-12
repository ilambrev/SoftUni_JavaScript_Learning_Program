function objectFactory(library, objects) {

    return objects.reduce((acc, curr) => {

        let newObject = {
            name: curr.template.name,
        }

        for (let func of curr.parts) {
            newObject[func] = library[func];
        }

        acc.push(newObject);

        return acc;

    }, []);

}

/*
const library = {
    print: function () {
        console.log(`${this.name} is printing a page`);
    },
    scan: function () {
        console.log(`${this.name} is scanning a document`);
    },
    play: function (artist, track) {
        console.log(`${this.name} is playing '${track}' by ${artist}`);
    },
};
const orders = [
    {
        template: { name: 'ACME Printer' },
        parts: ['print']
    },
    {
        template: { name: 'Initech Scanner' },
        parts: ['scan']
    },
    {
        template: { name: 'ComTron Copier' },
        parts: ['scan', 'print']
    },
    {
        template: { name: 'BoomBox Stereo' },
        parts: ['play']
    }
];

console.log(objectFactory(library, orders));
*/