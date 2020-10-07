/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

/*** 
 * Hello,
 * Thank you for taking the time to look at my code.
 * I am aiming for exceeds grade
 * - Jon
*/

//GLOBAL VARIABLES
const studentList = document.querySelector( '.student-list' ); //Select UL element with class student-list

// this function will create and insert/append the elements needed to display a "page" of nine students
function showPage ( list,page ) {
  const startIndex = ( page * 9 ) - 9; //first student on page
  const endIndex = ( page * 9 ); //last student on page
  studentList.innerHTML = ' ';   // set innerHTML property to studentList to an empty string

  // loop over the length of the `list` parameter
  for ( let i = 0; i < list.length; i++) {
    let student = list[i];
    if ( i >= startIndex && i < endIndex ) {

        // create DOM elements to display using template literals
        let html = `
          <li class="student-item cf">
            <div class="student-details">
                <img class="avatar" src="${student.picture.large}" alt="Profile Picture">
                <h3>${student.name.first} ${student.name.last}</h3>
                <span class="email">${student.email}</span>
            </div>
            <div class="joined-details">
                <span class="date">Joined ${student.registered.date}</span>
            </div>
          </li>`;
      studentList.insertAdjacentHTML('beforeend', html );       // insert into DOM
    }
  }
}

//this function will create and insert/append the elements needed for the pagination buttons
function addPagination( list ) {
  let numOfPages = Math.ceil(list.length / 9);   // create a variable to calculate the number of pages needed
  const linkList = document.querySelector('.link-list');   // select the element with a class of `link-list` and assign it to a variable
   linkList.innerHTML = ' ';   // set the innerHTML property of the variable to an empty string
  for ( let i = 1; i <= numOfPages; i++ ) {   // loop over the number of pages needed
    const button = `<li><button type="button">${i}</button></li>`;     // create the elements needed to display the pagination button
    linkList.insertAdjacentHTML( 'beforeend', button );    //insert into DOM
  }
  // select first button and set its class to active
  linkList.querySelectorAll( 'button' )[0].className = 'active';
  // create an event listener on the `link-list` element
  linkList.addEventListener ( 'click', (event) => { 
    const target = event.target;
    if ( target.tagName === 'BUTTON' ) {
      linkList.querySelector('.active').className = ' '; //Select first element with active class then remove active class
      target.className = 'active';       // add the active class to the clicked button
      showPage(list, target.textContent);       // call the showPage function passing the `list` parameter and page to display as arguments
    }
  });
}

//call functions to display students and buttons
showPage(data,1);
addPagination(data);

// this function will create the search bar field in the header
function createSearchBar() {
  const header = document.querySelector('.header');   // reference & put the search bar in header  (moved to global)
  //create DOM elements to display using template literals
  const searchBar = `
    <label for="search" class="student-search">
      <input id="search" placeholder="Search by name">
      <button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
    </label>`;
  header.insertAdjacentHTML('beforeend', searchBar); // insert into DOM
}
// this function will search for student names based on value inside the search bar
function searchStudents ( list ) {
  let results = [ ]; // stores the results here
  const searchInput = document.querySelector('#search');
  const searchButton = document.querySelector('button');

  // keyup event handler 
  searchInput.addEventListener('keyup', (e) => {
    const input = e.target.value.toLowerCase(); // stores the value typed inside the search bar
    results = [ ]; // clear the array
    for ( let i = 0; i < list.length; i++ ) {
      let student = list[i];
      const firstName = student.name.first.toLowerCase();
      const lastName =  student.name.last.toLowerCase();
      if ( firstName.includes(input) || lastName.includes(input) ) {
        results.push(list[i]); // update the results array
        }
    }
      if (results.length == 0) {
          studentList.innerHTML = ' ';
          const errorMessage = `<h1><center>No results were found</center></h1>`; // create DOM elements
          studentList.insertAdjacentHTML( 'beforeend', errorMessage );  // insert to DOM
          addPagination(results);
      } else {   // if there are no matches display error message
          showPage(results, 1);
          addPagination(results);
    } 
  });
  // click search bar event handler
  searchButton.addEventListener('click', (e) => {
    const input = searchInput.value; // stores the value typed inside the search bar
    results = [ ]; // clear the array
      for (let i = 0; i < list.length; i++ ) {
        let student = list[i];
        const firstName = student.name.first.toLowerCase();
        const lastName = student.name.last.toLowerCase();
        if ( firstName.includes(input) || lastName.includes(input) ) {
        results.push(list[i]); // update the results array
        } 
      } 
      if (results.length == 0) {
        studentList.innerHTML = ' ';
        const errorMessage = `<h1><center>No results were found</center></h1>`; // create DOM elements
        studentList.insertAdjacentHTML( 'beforeend', errorMessage );  // insert to DOM
        addPagination(results);
    } else {   // if there are no matches display error message
        showPage(results, 1);
        addPagination(results);
  } 
});
}
// call functions
createSearchBar();
searchStudents(data);