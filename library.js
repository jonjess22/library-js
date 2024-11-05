const myLibrary = [];

let hobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
addBookToLibrary(hobbit);
displayBooks();

function Book(title, author, pages, read)
{
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function()
    {
        return this.title + " by " + this.author + ", " + this.pages + " pages, " + (this.read ? "read" : "not read yet");
    }
}

function addBookToLibrary(book)
{
    myLibrary.push(book);
}

function displayBooks()
{
    const table = document.getElementById("library").getElementsByTagName("tbody")[0];

    myLibrary.forEach(book => 
    {
        const newRow = table.insertRow();

        const titleCell = newRow.insertCell(0);
        const authorCell = newRow.insertCell(1);
        const pagesCell = newRow.insertCell(2);
        const readCell = newRow.insertCell(3);

        titleCell.textContent = book.title;
        authorCell.textContent = book.author;
        pagesCell.textContent = book.pages;
        readCell.textContent = book.read ? "Read" : "Not Read";
    });
}



