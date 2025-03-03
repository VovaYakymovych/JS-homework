
// ==================================task #sH8c4er======================================


// let text = document.createElement('p')
// text.id = 'text'
// text.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, fuga.'
//
// let btn = document.createElement('button')
// btn.classList.add('buttonTask1')
// btn.innerText = 'text delete'
// document.body.append(text, btn)
//
// btn.onclick = function () {
//   document.getElementById('text').remove()
// }


// ==================================task #j693ca8======================================


// let formAge = document.createElement('form')
// let inputAge = document.createElement('input')
// let formButton = document.createElement('button')
//
// formAge.append(inputAge, formButton)
// document.body.appendChild(formAge)
//
// formAge.id = 'formAge'
// inputAge.id = 'formInputAge'
// inputAge.type = 'number'
// inputAge.classList.add('formInput')
// formButton.classList.add('formButton')
//
// inputAge.placeholder = 'Enter your age'
// formButton.innerText = 'Submit'
//
// formAge.onsubmit = function (ev) {
//   ev.preventDefault()
//
//   let age = document.getElementById('formInputAge').value
//
//   let existingWarning = document.getElementById('ageWarning');
//   if (existingWarning) {
//     existingWarning.remove();
//   }
//
//   let warning = document.createElement('p')
//   warning.id = 'ageWarning'
//   document.body.appendChild(warning)
//
//   if (age === '') {
//     warning.textContent = 'Enter your age'
//   } else if (age < 18) {
//     warning.textContent = 'Your age is below 18'
//   }
// }


// ==================================task #ymAmN2xJ======================================


// let formUser = document.createElement('form')
// let userName = document.createElement('input')
// let userSurname = document.createElement('input')
// let userAge = document.createElement('input')
// let formUserButton = document.createElement('button')
//
// formUser.append(userName, userSurname, userAge, formUserButton)
// document.body.appendChild(formUser)
//
// formUser.id = 'formUser'
// userName.id = 'formUserName'
// userSurname.id = 'formUserSurname'
// userAge.id = 'formUserAge'
// userAge.type = 'number'
// formUserButton.classList.add('formButton')
//
// document.querySelectorAll("input").forEach(input => {
//   input.classList.add("formInput");
// });
//
// userName.placeholder = 'Enter your name'
// userSurname.placeholder = 'Enter your surname'
// userAge.placeholder = 'Enter your age'
// formUserButton.innerText = 'Submit'
//
// formUser.onsubmit = function (ev) {
//   ev.preventDefault()
//
//   let user = {
//     name: document.getElementById('formUserName').value,
//     surname: document.getElementById('formUserSurname').value,
//     age: document.getElementById('formUserAge').value
//   };
//
//   let userDataBlock = document.createElement('div');
//   userDataBlock.id = 'userDataBlock';
//
//   userDataBlock.innerHTML = `
//         <p>Name: ${user.name || 'None'}</p>
//         <p>Surname: ${user.surname || 'None'}</p>
//         <p>Age: ${user.age || 'None'}</p>
//     `;
//
//   document.body.appendChild(userDataBlock);
// }
