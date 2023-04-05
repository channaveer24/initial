const text = document.querySelector('.cont');
// const btn = document.querySelector('.btn');
// const userlist = document.querySelectorAll(".list-name li");
const userlist = document.querySelector(".list-name");
const addListBtn = document.querySelector(".addListBtn");
const listInput = document.querySelector('.list-input');

// addListBtn.addEventListener('click', function(){
//     text.classList.toggle('change');
// });

// for (user of userlist){
//     user.addEventListener('click', function(){
//         this.style.color = 'green';
//     });
// }

addListBtn.addEventListener('click', function(){
    //Create an li out of thin air
    const newli = document.createElement('LI');
    const licontent = document.createTextNode(listInput.value);
    //Add the value inside the new li
    newli.appendChild(licontent);
    // attaching the li to the user list
    userlist.appendChild(newli);
});