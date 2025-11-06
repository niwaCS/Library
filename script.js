const myLibrary = [];

function Book(author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.id = crypto.randomUUID();
    this.read = read;


}

function addBookToLibrary(author, title, pages, read) {

    let storedBooks = new Book(author, title, pages, read);

    myLibrary.push(storedBooks);



}