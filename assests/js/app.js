// ====Q:1====

// let signupBtn = document.getElementById("signupBtn");
// let signinBtn = document.getElementById("signinBtn");
// let nameField = document.getElementById("nameField");
// let title = document.getElementById("title");

// signinBtn.onclick = function(){
//     nameField.style.maxHeight = "0";
//     title.innerHTML = "Sign In";
//     signupBtn.classList.add("disable");
//     signinBtn.classList.remove("disable");
// }
// signupBtn.onclick = function(){
//     nameField.style.maxHeight = "60px";
//     title.innerHTML = "Sign Up";
//     signupBtn.classList.remove("disable");
//     signinBtn.classList.add("disable");
// }

// ====Q:2======
// let readMore = document.querySelector('.read-more-btn');
// let text = document.querySelector('.text');

// readMore.addEventListener('click',(e)=>{
//     text.classList.toggle('show-more');
//     if(readMore.innerText === 'Read More'){
//         readMore.innerText = 'Read less';
//     }
//     else{
//         readMore.innerText = 'Read More';
//     }
// })

// =====Q:3=====

// let studentForm = document.getElementById('studentForm');
// let tableBody = document.getElementById('tableBody');
// let editedRowIndex = null;
// studentForm.addEventListener('submit',function(event){
//   event.preventDefault();

//   let name = document.getElementById('name').value;
//   let age = document.getElementById('age').value;
//   let email = document.getElementById('email').value;

//   if (name && age && email){
//     if(editedRowIndex !== null){
//       updateRow(editedRowIndex, name, age, email);
//       editedRowIndex = null;
//     }
//     else{
//       addRow(name, age, email);
//     }
//       studentForm.reset();
//     }
//     else{
//       alert("'Please fill in all fields.")
//   }
// })
// function addRow(name, age, email){
//   let row = document.createElement('tr');
//   row.innerHTML = `
//   <td>${name}</td>
//     <td>${age}</td>
//     <td>${email}</td>
//     <td>
//     <button type="button" onclick="editRow(this)">Edit</button>
//     <button type="button" onclick="deleteRow(this)">Delete</button>
//   </td>
// `;
// tableBody.appendChild(row);
// }
// function deleteRow(button){
//   let row = button.parentNode.parentNode;
//   tableBody.removeChild(row)
// }
// function editRow(button){
//   document.getElementById('name').value = name;
//   document.getElementById('age').value = age;
//   document.getElementById('email').value = email;
//   editedRowIndex = row.rowIndex;
// }

// function updateRow(rowIndex, name, age, email) {
//   let row = tableBody.rows[rowIndex - 1];
//   row.cells[0].innerText = name;
//   row.cells[1].innerText = age;
//   row.cells[2].innerText = email;
// }