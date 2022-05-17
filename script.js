let myLibrary = [];
const shelf = document.getElementsByClassName('columns')[0];
const emptyLibTxt = document.getElementById('empty-library-text');
const titleInput = document.getElementById('title-input');
const authorInput = document.getElementById('author-input');
const pagesInput = document.getElementById('pages-input');
const readRadioBtn = document.getElementById('read-input');
const unreadRadioBtn = document.getElementById('unread-input');
const saveBtn = document.getElementById('save-book-btn').addEventListener('click', submitNewBook);

function Book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
}

const book1 = new Book('Dune', 'Frank Herbert', '548', true);
const book2 = new Book('The Way of Shadows', 'Brent Weeks', '632', true);
const book3 = new Book('Project Hail Mary', 'Andy Weir', '497', false);
myLibrary[0] = book1;
myLibrary[1] = book2;
myLibrary[2] = book3;

repopLibrary();




//FUNCTIONS 

function submitNewBook () {
    let newBookObject = new Book();
    newBookObject.title = titleInput.value;
    newBookObject.author = authorInput.value;
    newBookObject.pages = pagesInput.value;

    if (readRadioBtn.checked) {
        newBookObject.read = 'Read';
    } else {
        newBookObject.read = 'Unread';
    }

    let time = new Date();
    newBookObject.time = time.toLocaleString();
    newBookObject.index = myLibrary.length - 1;

    addBookToLibrary(newBookObject);
    formReset();
}

function formReset () {
    titleInput.value = '';
    authorInput.value = '';
    pagesInput.value = '';
    unreadRadioBtn.checked = true;
}

function addBookToLibrary(newBook) {
    myLibrary.push(newBook);
    repopLibrary();
}

function repopLibrary () {
    shelf.innerHTML = '';
    if (!emptyLib()) {
        myLibrary.forEach((book) => {
            addToShelf(book);
        })
    }
}

function toKebabCase (string) {
	return string 
		.replace(/([a-z])([A-Z])/g, "$1-$2")
		.replace(/[\s_]+/g, '-')
		.toLowerCase();
}

function emptyLib () {
    if (myLibrary.length == 0) {
        emptyLibTxt.style.display = 'initial';
        return true;
    } else {
        emptyLibTxt.style.display = 'none';
        return false;
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
    deleteBtn.classList.add('card-footer-item','has-text-danger');

    column.setAttribute('index', myLibrary.indexOf(book))
    readStatus.id = 'read-status-'+toKebabCase(book.title);

    //Add content from book to new HTML card
    title.textContent = book.title;
    author.textContent = book.author;
    pages.textContent = 'Pages: ' + book.pages;
    deleteBtn.textContent = 'Delete';
    //Apply certain classes and text content depening on whether the book is marked as read
    if(book.read) {
        readStatus.textContent = 'Read';
        readBtn.textContent = 'Mark as Unread';
        readStatus.classList.add('has-text-success');
    } else {
        readStatus.textContent = 'Unread';
        readBtn.textContent = 'Mark as Read';
        readStatus.classList.add('has-text-danger');
    }
    timeAdded.textContent = 'Added: ' + book.time;

    //Add new HTMl to DOM
    shelf.appendChild(column);
    console.log(myLibrary.indexOf(book) + " test scs");
}