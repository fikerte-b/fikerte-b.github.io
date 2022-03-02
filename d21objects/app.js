"use strict";
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
module.exports = {findTitles, findAuthors, findIDs, addBook }; //add all of your function names here that you need for the node mocha tests
*/

let library = [
    { title: "The Road Ahead", author: "Bill Gates", libraryID: 1254 },
    { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264 },
    { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", libraryID: 3245 }
];

/**
 * Event handler to display library titles sorted alphabetically
 * @returns {undefined}
 */
function showTitles() {

    /* put all titles into an array, then sort, then join with newline and insert in textarea innerHTML */

    const titles = findTitles();

    /*need to sort and then join the titles still (e.g., someArray.join("\n")  */
    titles.sort();
    const titleString = titles.join("\n");

    let textArea = document.getElementById("displayArea");
    textArea.innerHTML = titleString;
}



/**
 * 
 * @return {object} array holding all titles as elements
 */
function findTitles() {
    let titles = [];
    //titles = ["Mockingjay: The Final Book of The Hunger Games", "The Road Ahead", "Walter Isaacson"];  //FIX THIS!!
    // implement this and other functions
    for(let book of library){
        titles.push(book.title);
    }
    titles.sort();
    return titles;
}
/**
 * 
 * @returns {Array} of all the authors 
 */
function findAuthors(){
    let authors = [];
    for(let book of library){
        authors.push(book.author);
    }
    authors.sort();
    return authors;
}

/**
 * 
 * @returns{Array} bookIds of books
 */
function findIDs(){
    let bookIDs = [];
    for(let book of library){
        bookIDs.push(book.libraryID);
    }
    bookIDs.sort();
    return bookIDs;
}


// eslint-disable-next-line valid-jsdoc
/**
 * @returns {object} book with it parameters
 * Event handler for Add book button.  Creates and adds book to the library
 */
function addBook(title, author, libraryID){
    //const title = document.getElementById("title"); //retrieves the book title from the title textbox
    //finish the implementation -- get the author, create a book object, and add to the library array
    const newBook = {};
    newBook.title = title;
    newBook.author = author;
    newBook.libraryID = libraryID;
    library.push(newBook);
    return newBook;
}   
