let myLibrary = [];
const shelf = document.getElementsByClassName('columns')[0];

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

function repopLibrary () {
    for (let book in myLibrary) {
        addToShelf(book);
    }
}

function addToShelf (book) {
    //Build HTML components for new card - many div components due to Bulma Framework
    let column = document.createElement('div');
    let card = document.createElement('div');
    let cardContent = document.createElement('div');
    let content = document.createElement('div');
    let title = document.createElement('p');
    let author = document.createElement('p');
    let pages = document.createElement('p');
    let readStatus = document.createElement('p');
    let timeAdded = document.createElement('p');
    let cardFooter = document.createElement('footer');
    let readBtn = document.createElement('a');
    let deleteBtn = document.createElement('a');

    //Append components together
    column.appendChild(card);
    card.appendChild(cardContent);
    card.appendChild(cardFooter);
    cardContent.appendChild(content);
    content.appendChild(title);
    content.appendChild(author);
    content.appendChild(pages);
    content.appendChild(readStatus);
    content.appendChild(timeAdded);
    cardFooter.appendChild(readBtn);
    cardFooter.appendChild(deleteBtn);

    //Add classes to apply Bulma properties
    column.classList.add('column','is-one-third');
    card.classList.add('card');
    cardContent.classList.add('card-content');
    content.classList.add('content');
    title.classList.add('title','is-4');
    author.classList.add('subtitle');
    readStatus.classList.add('read-status','has-text-weight-bold','has-text-right');
    timeAdded.classList.add('has-text-right','is-size-7');
    cardFooter.classList.add('card-footer');
    readBtn.classList.add('card-footer-item');
    deleteBtn.classList.add('card-footer-item');

    //Add content from book to new HTML card
    title.textContent = book.title;
    author.textContent = book.author;
    pages.textContent = 'Pages: ' + book.pages;
    deleteBtn.textContent = 'Delete';
    if(book.read) {
        readStatus.textContent = 'Read';
        readBtn.textContent = 'Mark as Unread';
        readStatus.classList.add('has-text-success');
    } else {
        readStatus.textContent = 'Unread';
        readBtn.textContent = 'Mark as Read';
        readStatus.classList.add('has-text-danger');
    }
    const time = new Date();
    timeAdded.textContent = 'Added: ' + time.toLocaleString();

    shelf.appendChild(column);
}

addToShelf(myLibrary[2]);