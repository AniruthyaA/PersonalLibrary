function Book(title, author, yearPublished, readStatus) {
    return {
        title: title,
        author: author,
        yearPublished: yearPublished,
        readStatus: readStatus,

        getSummary: function() {
            return `${this.title} by ${this.author}, published in ${this.yearPublished}. Status: ${this.readStatus}`;
        },

        toggleReadStatus: function() {
            this.readStatus = !this.readStatus;
        }
    };
}

const library = [];

function displayBooks() {
    const bookList = document.getElementById('book-list');
    bookList.innerHTML = '';

    library.forEach((book, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${book.title} by ${book.author}</span>
            <button class="toggle-read-btn" data-index="${index}">${book.readStatus ? 'Unread' : 'Read'}</button>
            <button class="remove-book-btn" data-index="${index}">Remove</button>
        `;
        bookList.appendChild(li);
    });
}

function addBook(book) {
    library.push(book);
    displayBooks();
}

function removeLastBook() {
    library.pop();
    displayBooks();
}

function addBookToFront(book) {
    library.unshift(book);
    displayBooks();
}

function removeFirstBook() {
    library.shift();
    displayBooks();
}

document.getElementById('add-book-btn').addEventListener('click', () => {
    const title = prompt('Enter book title:');
    const author = prompt('Enter author:');
    const year = parseInt(prompt('Enter year published:'));
    const readStatus = confirm('Have you read this book?');

    const book = Book(title, author, year, readStatus);
    addBook(book);
});

document.getElementById('remove-last-btn').addEventListener('click', () => {
    removeLastBook();
});

document.getElementById('add-front-btn').addEventListener('click', () => {
    const title = prompt('Enter book title:');
    const author = prompt('Enter author:');
    const year = parseInt(prompt('Enter year published:'));
    const readStatus = confirm('Have you read this book?');

    const book = Book(title, author, year, readStatus);
    addBookToFront(book);
});

document.getElementById('remove-first-btn').addEventListener('click', () => {
    removeFirstBook();
});

document.addEventListener('click', event => {
    if (event.target.classList.contains('toggle-read-btn')) {
        const index = event.target.getAttribute('data-index');
        library[index].toggleReadStatus();
        displayBooks();
    }

    if (event.target.classList.contains('remove-book-btn')) {
        const index = event.target.getAttribute('data-index');
        library.splice(index, 1);
        displayBooks();
    }
});
displayBooks();
