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
               <img class="avatar" src="${student.picture.thumbnail}" alt="Profile Picture">
               <h3>${student.name.first} ${student.name.last}</h3>
               <span class="email">${student.email}</span>
            </div>
            <div class="joined-details">
               <span class="date">Joined ${student.registered.date}</span>
            </div>
         </li>`;

        // insert into DOM
       studentList.insertAdjacentHTML('beforeend', html );
      }
   }
}


//This function will create and insert/append the elements needed for the pagination buttons
function addPagination( list ) {

  // create a variable to calculate the number of pages needed
  let numOfPages = Math.ceil(list.length / 9);

  // select the element with a class of `link-list` and assign it to a variable
  const linkList = document.querySelector('.link-list');

  // set the innerHTML property of the variable you just created to an empty string
   linkList.innerHTML = ' ';

  // loop over the number of pages needed
  for (let i = 1; i <= numOfPages; i++) {

    // create the elements needed to display the pagination button
    const button = `
      <li>
        <button type="button">1</button>
      </li>`;
      
    //insert into DOM
    linkList.insertAdjacentHTML( 'beforeend', linkList );
  }
  // give the first pagination button a class of "active"
  linkList.querySelector( 'button' );

  // create an event listener on the `link-list` element
  linkList.addEventListener ( 'click', ( event ) => {
    // if the click target is a button:
    if ( event.target.tagName === 'BUTTON' ) {
  
      // select the first element with active class then set className to empty string
      linkList.document.querySelector( '.active' );

      // remove the "active" class from the previous button
      linkList.className = ' ';

      // add the active class to the clicked button
      event.target.className = 'active';

      // call the showPage function passing the `list` parameter and page to display as arguments
      showPage(list, textContent);
    }

  });

}

showPage(data,1);
addPagination(data);

// Call functions