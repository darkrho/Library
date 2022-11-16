let myLibrary = [];
let id = 0;
// function to create book objects
function Book(title, description, genre,read, id) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.genre = genre;
    this.status = read;
    
}
// to add books to library

function addBookToLibrary(title, des, genre, status) {
   
    id += 1;
    book = new Book(title, des, genre,status, id);
    myLibrary.push(book);
    var hidde = document.querySelector(":root");
    hidde.style.setProperty("--foo", "none");
    addBookToTable(book);

}
// erase book

function erase(){
    let row = document.getElementsByClassName(`row${this.id}`)[0];
    let table = document.getElementsByClassName("book-table")[0];
    table.removeChild(row);
    }

// change reading status
function changeStatus() {
    this.status = "read";
    
}
// add book to table

function addBookToTable(book) {
    let table  = document.querySelector(".book-table");
    let row = document.createElement("tr");
    row.setAttribute("class",`row${book.id}` )
    for ( var prop in book) {
      
        let column = document.createElement("td");
        column.textContent = book[prop];
        row.appendChild(column);
    }
    // erase button
    let eraseBut = document.createElement("button");
    eraseBut.textContent = "erase";
    eraseBut.addEventListener("click", erase.bind(book));
    let butCol =  document.createElement("td");
    butCol.appendChild(eraseBut);
    // status button
    let statusBut = document.createElement("button");
    statusBut.textContent = "status";
    statusBut.addEventListener("click", changeStatus.bind(book));
    let butCol2 = document.createElement("td");
    butCol2.appendChild(statusBut);
    // add buttons to row
    row.appendChild(butCol);
    row.appendChild(butCol2);
    
    table.appendChild(row);
    }
      
// to show the form 
let new_book = document.getElementById("new-book")
new_book.addEventListener("click", function(event) {
    var show = document.querySelector(":root");
    show.style.setProperty("--foo", "inline");
})

// to extract data from the form
let formu = document.getElementById("book-form");
formu.onsubmit = function(event) {
    event.preventDefault();
    let title = document.getElementById("title").value;
    let des = document.getElementById("description").value;
    let genre = document.getElementById("genre").value;
    let status = document.getElementById("status").value;
    addBookToLibrary(title, des, genre, status);
}

