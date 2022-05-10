let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
}

function addBookToLibrary(newBook) {
    newBook.shelfNum = myLibrary.length;
    myLibrary.push(newBook);
}

const book1 = new Book('Dune', 'Frank Herbert', '548', true);
const book2 = new Book('The Way of Shadows', 'Brent Weeks', '632', true);
const book3 = new Book('Project Hail Mary', 'Andy Weir', '497', true);
myLibrary[0] = book1;
myLibrary[1] = book2;
myLibrary[2] = book3;

console.table(myLibrary);