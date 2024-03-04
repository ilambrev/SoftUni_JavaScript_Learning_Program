class BookClub {

    constructor(library) {
        this.library = library;
        this.books = [];
        this.members = [];
    }

    addBook(title, author) {
        if (this.books.find(b => b.title === title) !== undefined) {
            return `The book "${title}" by ${author} is already in ${this.library} library.`;
        }

        this.books.push({ title, author });

        return `The book "${title}" by ${author} has been added to ${this.library} library.`;
    }

    addMember(memberName) {
        if (this.members.find(m => m.memberName === memberName) !== undefined) {
            return `Member ${memberName} is already a part of the book club.`;
        }

        this.members.push({ memberName });

        return `Member ${memberName} has been joined to the book club.`;
    }

    assignBookToMember(memberName, bookTitle) {
        if (this.members.find(m => m.memberName === memberName) === undefined) {
            throw new Error(`Member ${memberName} not found.`)
        }

        const bookIndex = this.books.findIndex(b => b.title === bookTitle);

        if (bookIndex === -1) {
            throw new Error(`Book "${bookTitle}" not found.`)
        }

        const book = this.books[bookIndex];

        this.books.splice(bookIndex, 1);

        return `Member ${memberName} has been assigned the book "${book.title}" by ${book.author}.`;
    }

    generateReadingReport() {
        if (this.members.length === 0) {
            return 'No members in the book club.';
        }

        if (this.books.length === 0) {
            return 'No available books in the library.';
        }

        return `Available Books in ${this.library} library:\n${this.books.map(b => `"${b.title}" by ${b.author}`).join('\n')}`;
    }
}

// Input 1
// const myBookClub = new BookClub('The Bookaholics');
// console.log(myBookClub.addBook("The Great Gatsby", "F. Scott Fitzgerald"));
// console.log(myBookClub.addBook("To Kill a Mockingbird", "Harper Lee"));
// console.log(myBookClub.addBook("1984", "George Orwell"));
// console.log(myBookClub.addMember("Alice"));
// console.log(myBookClub.addMember("Peter"));
// console.log(myBookClub.assignBookToMember("Mary", "The Great Gatsby"));

// Input 2
// const myBookClub = new BookClub('The Bookaholics');
// console.log(myBookClub.addBook("The Great Gatsby", "F. Scott Fitzgerald"));
// console.log(myBookClub.addBook("To Kill a Mockingbird", "Harper Lee"));
// console.log(myBookClub.addBook("1984", "George Orwell"));
// console.log(myBookClub.addMember("Alice"));
// console.log(myBookClub.addMember("Alice"));
// console.log(myBookClub.assignBookToMember("Alice", "The Great Gatsby"));
// console.log(myBookClub.generateReadingReport());

// Input 3
// const myBookClub = new BookClub('The Bookaholics');
// console.log(myBookClub.addBook("The Great Gatsby", "F. Scott Fitzgerald"));
// console.log(myBookClub.addBook("To Kill a Mockingbird", "Harper Lee"));
// console.log(myBookClub.addBook("1984", "George Orwell"));
// console.log(myBookClub.addMember("Alice"));
// console.log(myBookClub.addMember("Peter"));
// console.log(myBookClub.assignBookToMember("Peter", "The Da Vinci Code"));

// Input 4
// const myBookClub = new BookClub('The Bookaholics');
// console.log(myBookClub.addBook("To Kill a Mockingbird", "Harper Lee"));
// console.log(myBookClub.addBook("1984", "George Orwell"));
// console.log(myBookClub.addMember("Alice"));
// console.log(myBookClub.addMember("Peter"));
// console.log(myBookClub.assignBookToMember("Peter", "1984"));
// console.log(myBookClub.assignBookToMember("Alice", "To Kill a Mockingbird"));
// console.log(myBookClub.generateReadingReport());