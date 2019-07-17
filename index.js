let form= document.getElementById("book-form");
console.log(form);

let title= document.getElementById("title");

let author= document.getElementById("author");

let isbn= document.getElementById("isbn");

let list= document.getElementById("book-list");

form.addEventListener('submit',formsubmit);

list.addEventListener('click',deletebook);

class Book {
    constructor(isbn,author,title){
        this.title=title;
        this.author=author;
        this.isbn=isbn
    }


}

function formsubmit(e){

    e.preventDefault();


    let book= new Book(isbn.value,author.value,title.value);

    localStorage.setItem('book',book);

    let row= document.createElement('tr');

    row.innerHTML= `  <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
  `;

  list.appendChild(row);
    

    //console.log(newbook);

}

function deletebook(e){

    if(e.target.classList.contains('delete'))
    {
        if(confirm('Delete?'))
        {
            list.removeChild(e.target.parentElement.parentElement);
           console.log(e.target.parentElement.parentElement);
           
        }
    }
}