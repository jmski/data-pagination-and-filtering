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



const studentList = document.querySelector(".student-list");

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
function showPage (list,page) {
   const startIndex = ( page * 9 ) - 9;
   const endIndex = ( page * 9 );

   for ( let i = 0; i < list.length; i++) {

      if ( i >= startIndex && i < endIndex ) {
         let student = list[i];

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

       studentList.insertAdjacentHTML("beforeend",html);
      }
   }
}


/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

// Call functions