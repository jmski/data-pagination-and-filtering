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

//global variables
const studentList = document.querySelector( '.student-list' ); //Select UL element with class student-list

// this function will create and insert/append the elements needed to display a "page" of nine students
function showPage ( list,page ) {
  // create two variables which will represent the index for the first and last student on the page
  const startIndex = ( page * 9 ) - 9;
  const endIndex = ( page * 9 );

  // set innerHTML property to studentList to an empty string
  studentList.innerHTML = ' ';

  // loop over the length of the `list` parameter
  for ( let i = 0; i < list.length; i++) {
  // 
      if ( i >= startIndex && i < endIndex ) {
         let student = list[i];

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
   linkList.innerHTML = ' ';   // set the innerHTML property of the variable you just created to an empty string
  for ( let i = 1; i <= numOfPages; i++ ) {   // loop over the number of pages needed
    const button = `<li><button type="button">${i}</button></li>`;     // create the elements needed to display the pagination button
    linkList.insertAdjacentHTML( 'beforeend', button );    //insert into DOM
  }
  // select first button and set its class to active
  const firstButton = document.querySelector( '.link-list > li > button' );
  firstButton.className = 'active';

  // create an event listener on the `link-list` element
  linkList.addEventListener ( 'click', ( event ) => { 
    if ( event.target.tagName === 'BUTTON' ) {
      linkList.querySelector('.active').className = ' '; //Select first element with active class then remove active class
      event.target.className = 'active';       // add the active class to the clicked button
      showPage(list, event.target.textContent);       // call the showPage function passing the `list` parameter and page to display as arguments
     }
  });
}

// call functions
showPage(data,1);
addPagination(data);
createSearchBar();
searchStudents(data);

// this function will create the search bar field in the header
function createSearchBar() {
  const header = document.querySelector('.header');   // reference & put the search bar in header  (moved to global)

  //create DOM elements to display using template literals
  let searchBar = `
  <label for="search" class="student-search">
    <input id="search" placeholder="Search by name">
    <button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
  </label>`;
  header.insertAdjacentHTML('beforeend', searchBar); // insert into DOM
}

function searchStudents ( list ) {
  const results = [ ];
  const searchInput = document.querySelector('#search');

  searchInput.addEventListener('keyup', (e) => {
    const input = e.target.value.toLowerCase();
    for ( let i = 0; i < list.length; i++ ) {
      let student = list[i];
      const studentName = student.name.first.toLowerCase() + ' ' + student.name.last.toLowerCase();
      if (studentName.includes(input)) {
        results.push(studentName);
        console.log(input);
        return results;
      }
      showPage(results, 1);
    }









//     for ( let student in data) {
//       const studentName = student.name.first.toLowerCase() + ' ' + student.name.last.toLowerCase();
//         if ( studentName.includes(input)) {
//           results.push(student);
//           console.log(input);
//           return results;
//         }
// //        // if ( )
// //           showPage(results, 1);
// //           addPagination(results);
// //         } 
        
        
// //         if ( results.length == 0 ) {
// //           studentList.textContent = `<h1>Sorry no matches were found. </h1>`
// //         }
// //       console.log(studentName); 
//     }
//   //console.log(studentName);  // to check for the whole list of student names
//   //console.log(input); // to test user input
  });

}