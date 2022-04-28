const bookCheck = document.querySelector(".book");
const titleCheck = document.querySelector(".title");
const pagesCheck = document.querySelector(".pages");

const formCheck = document.querySelector('.validform')

//run the function when user clicks on the submit form button

const submit = document.querySelector('#submit')
submit.addEventListener('click', addBookToLibrary)


//make an empty array top store the input from the user as objects
let myLibrary = [];

function addBookToLibrary(e) {

    //check if input is not empty
    //this function is used because of the e.preventDefault function
    if (!formCheck.checkValidity()) return
    //alert the user to fill up the input
    formCheck.reportValidity()
    //prevent the form from submitting
    e.preventDefault()
    //get the value from the user input
    const book = document.querySelector(".book");
    const title = document.querySelector(".title");
    const pages = document.querySelector(".pages");
    let library = {
        book: book.value,
        title: title.value,
        pages: pages.value
    }
    //add the objects created into myLibrary
    myLibrary.push(library)
    addItem()

}


function addItem() {

    //select the last element of myLibrary (i.e Recently added element)
    //create a row
    const last = myLibrary[myLibrary.length - 1]
    const createRow = document.createElement('div')
    createRow.classList.add('card-row')

    const addToCards = document.querySelector("#cards");

    //loop through the object and add a div for each keyvalue pairs in cards div as a row
    for (let key in last) {
        const displayBook = document.createElement("div")
        displayBook.classList.add('card')
        displayBook.innerText = last[key]
        createRow.append(displayBook)
    }
    addToCards.appendChild(createRow)

    //create and add delete button element and append it to newly created row
    const button = document.createElement("button");
    button.classList.add("button")
    button.classList.add("delete")
    button.innerText = "Delete"
    createRow.appendChild(button);

    //at the same time add an eventlistener to the delete button
    //directly add the eventlistener to the variable button instead of query selecting it
    //because it will add the El on the first button only

    button.addEventListener('click', function () {
        console.log(this);
        this.parentNode.remove()
    })


    //create a read/Not read Button to display the state of the button
    const state = document.createElement("button");
    state.classList.add("state")
    state.classList.add("read")
    state.innerText = "Not Read"
    createRow.appendChild(state);

    state.addEventListener('click', function () {
        console.log(this);
        this.classList.toggle("read")
        if (state.innerText === "Not Read") {
            state.innerText = "Read";
        } else {
            state.innerText = "Not Read";
        }
    })
}