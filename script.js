class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
        this.isIssued = false;
    }

    issueBook() {
        if (!this.isIssued) {
            this.isIssued = true;
            console.log(`${this.title} has been issued.`);
        } else {
            console.log(`${this.title} is already issued.`);
        }
    }

    returnBook() {
        this.isIssued = false;
        console.log(`${this.title} has been returned.`);
    }
}

class Library {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
        console.log(`Book added: ${book.title}`);
    }

    showBooks() {
        console.log("Available Books:");
        this.books.forEach(book => {
            console.log(
                `${book.title} by ${book.author} - ${
                    book.isIssued ? "Issued" : "Available"
                }`
            );
        });
    }
}


const library = new Library();

const book1 = new Book("Cruel Prince", "Holly Black");
const book2 = new Book("The song of ice and fire", "George R.R. Martin");


library.addBook(book1);
library.addBook(book2);

library.showBooks();

book1.issueBook();
library.showBooks();

book1.returnBook();
library.showBooks();
