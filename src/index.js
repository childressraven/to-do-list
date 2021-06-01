let addBtn = document.querySelector('#addToDo');
let clearBtn = document.querySelector('#removeList');
let toDoContainer = document.querySelector('#toDoContainer');
let inputField = document.querySelector('#inputField');



function addToDo() {
    const list = document.createElement('li');
    list.classList.add('paragraph-styling');
    list.innerText = inputField.value;
    toDoContainer.appendChild(list);
    inputField.value = '';
    list.addEventListener('click', function() {
        list.style.textDecoration = 'line-through';
    });
    list.addEventListener('dblclick', function () {
        toDoContainer.removeChild(list);
    })
}
   

function removeList() {
    toDoContainer.remove();   
}



addBtn.addEventListener('click', addToDo);
clearBtn.addEventListener('click', removeList);






