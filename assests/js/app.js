// 1. Show an alert box on click on a link.
// function box() {
//     alert('Hello world!');
// }

// 2. Display some Mobile images in browser. On click on an
// image Show the message in alert to user.

// function showAlt(altTxt){
//     alert ("You click on ", altTxt);
// }

// 3. Display 10 student records in table and each row should contain a delete
// button. If you click on a button to delete a record, entire row should be
// deleted.

// function deleteRow(button){
//     let row = button.parentNode.parentNode;
//     row.parentNode.removeChild(row);
// }

// 4. Display an image in browser. Change the picture on mouseover and set the
// first picture on mouseout.

// function setNewImage() {
//     document.getElementById('img1').src = "./assests/images/photo-2.avif";
// }
// function setOldImage() {
//     document.getElementById('img1').src = "./assests/images/photo-1.avif";
// }

// 5. Show a counter in browser. Counter should increase on click on increase
// button and decrease on click on decrease button. And show updated counter
// value in browser.

// let plus = document.querySelector(".plus"),
// minus = document.querySelector(".minus"),
// num = document.querySelector(".num");

// let a = 1;

// plus.addEventListener("click", ()=>{
//     a++;
//     a = (a < 10) ? "0" + a : a;
//     num.innerText = a;
//     console.log(a);
// })

// minus.addEventListener("click", ()=>{
//    if (a > 1) {
//     a--;
//     a = (a < 10) ? "0" + a : a;
//     num.innerText = a;
//    }
// })