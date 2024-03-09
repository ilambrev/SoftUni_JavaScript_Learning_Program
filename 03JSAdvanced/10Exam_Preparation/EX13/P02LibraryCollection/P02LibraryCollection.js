class LibraryCollection {

    constructor(capacity) {
        this.capacity = capacity;
        this.books = [];
    }

    addBook(bookName, bookAuthor) {
        if (this.books.length === this.capacity) {
            throw new Error('Not enough space in the collection.');
        }

        this.books.push({ bookName, bookAuthor, payed: false });

        return `The ${bookName}, with an author ${bookAuthor}, collect.`;
    }

    payBook(bookName) {
        const book = this.books.find(b => b.bookName === bookName);

        if (book === undefined) {
            throw new Error(`${bookName} is not in the collection.`);
        }

        if (book.payed) {
            throw new Error(`${bookName} has already been paid.`);
        }

        book.payed = true;

        return `${bookName} has been successfully paid.`;
    }

    removeBook(bookName) {
        const bookIndex = this.books.findIndex(b => b.bookName === bookName);

        if (bookIndex === -1) {
            throw new Error("The book, you're looking for, is not found.");
        }

        if (!this.books[bookIndex].payed) {
            throw new Error(`${bookName} need to be paid before removing from the collection.`);
        }

        this.books.splice(bookIndex, 1);

        return `${bookName} remove from the collection.`;
    }

    getStatistics(bookAuthor) {
        if (arguments.length === 0) {
            const emptySlots = this.capacity - this.books.length;

            return `The book collection has ${emptySlots} empty spots left.\n${this.books
                .sort((b1, b2) => b1.bookName.localeCompare(b2.bookName))
                .map(b => `${b.bookName} == ${b.bookAuthor} - ${b.payed ? 'Has Paid' : 'Not Paid'}.`)
                .join('\n')}`;
        }

        const booksFromAuthor = this.books.filter(b => b.bookAuthor === bookAuthor);

        if (booksFromAuthor.length === 0) {
            throw new Error(`${bookAuthor} is not in the collection.`);
        }

        return `${booksFromAuthor.map(b => `${b.bookName} == ${b.bookAuthor} - ${b.payed ? 'Has Paid' : 'Not Paid'}.`).join('\n')}`;
    }

}

// Input 1
// const library = new LibraryCollection(2)
// console.log(library.addBook('In Search of Lost Time', 'Marcel Proust'));
// console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));
// console.log(library.addBook('Ulysses', 'James Joyce'));

// Input 2
// const library = new LibraryCollection(2)
// library.addBook('In Search of Lost Time', 'Marcel Proust');
// console.log(library.payBook('In Search of Lost Time'));
// console.log(library.payBook('Don Quixote'));

// Input 3
// const library = new LibraryCollection(2)
// library.addBook('In Search of Lost Time', 'Marcel Proust');
// library.addBook('Don Quixote', 'Miguel de Cervantes');
// library.payBook('Don Quixote');
// console.log(library.removeBook('Don Quixote'));
// console.log(library.removeBook('In Search of Lost Time'));

// Input 4
// const library = new LibraryCollection(2)
// console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));
// console.log(library.getStatistics('Miguel de Cervantes'));

// Input 5
// const library = new LibraryCollection(5)
// library.addBook('Don Quixote', 'Miguel de Cervantes');
// library.payBook('Don Quixote');
// library.addBook('In Search of Lost Time', 'Marcel Proust');
// library.addBook('Ulysses', 'James Joyce');
// console.log(library.getStatistics());