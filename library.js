const myLibrary = [];
const bookModal = document.getElementById("bookModal");
const submitButton = document.getElementById("submit");
const addBookButton = document.getElementById("addBook");
const displayBooksButton = document.getElementById("displayBooks");
const clearButton = document.getElementById("clear");

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    info() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? "read" : "not read yet"}`;
    }
}

// Event listeners
bookModal.addEventListener("click", (event) => {
    if (event.target === bookModal) closeModal();
});

submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    addBookToLibrary();
});

addBookButton.addEventListener("click", openModal);
displayBooksButton.addEventListener("click", displayBooks);
clearButton.addEventListener("click", clearView);

function openModal() {
    bookModal.style.display = "flex";
    bookModal.style.justifyContent = "center";
    bookModal.style.alignItems = "center";
}

function closeModal() {
    bookModal.style.display = "none";
    document.getElementById("bookForm").reset();
}

function addBookToLibrary() {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("read").checked;

    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);

    closeModal();
    displayBooks();
}

function displayBooks() {
    const tableBody = document.getElementById("library").querySelector("tbody");
    tableBody.innerHTML = '';

    myLibrary.forEach((book, index) => {
        const newRow = tableBody.insertRow();
        newRow.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.pages}</td>
            <td><button class="read-button" data-index="${index}">Read</button></td>
            <td><button class="delete-button" data-index="${index}">Delete</button></td>
        `;
    });

    document.querySelectorAll(".delete-button").forEach(button => {
        button.addEventListener("click", (event) => deleteBook(event.target.dataset.index));
    });

    document.querySelectorAll(".read-button").forEach(button => {
        button.addEventListener("click", (event) => toggleRead(event.target.dataset.index));
    });
}

function deleteBook(index) {
    myLibrary.splice(index, 1);
    displayBooks();
}

function toggleRead(index) 
{
    const readButton = document.querySelector(`.read-button[data-index="${index}"]`);

    console.log(index);

    if (readButton.innerHTML === "Read") {
        myLibrary[index].read = false;
        readButton.innerHTML = "Not Read";
        readButton.style.backgroundColor = "red";
    }
    else {
        myLibrary[index].read = true;
        readButton.innerHTML = "Read";
        readButton.style.backgroundColor = "green";
    }

}

function clearView() {
    myLibrary.length = 0;
    displayBooks();
}
