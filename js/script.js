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
const studentList = document.querySelector(".student-list"); //Select UL element with class student-list

// this function will create and insert/append the elements needed to display a "page" of nine students
function showPage (list,page) {
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
       studentList.insertAdjacentHTML("beforeend",html);
      }
   }
}

showPage(data,1);

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

// Call functions