//selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');


//eventlistners
todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click',deleteCheck);

//functions

function addTodo(e) {
    e.preventDefault();

    //todo DIV
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    
    if(todoInput.value.length == 0){   //This will return an alert if the input is empty.
        alert("Please enter an item!")
        return;
    }    
    
    if(todoInput.value == 0){
        alert("Please enter an item!")
        return;
    }

    //create LI
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    //check button

    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);


    //trash button

    const trashButton =document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);

    //appendto list 
    todoList.appendChild(todoDiv);

    //clear todo inpur value
    todoInput.value = "";

}


function deleteCheck(f){
    const item = f.target;
    //delete todo
    if(item.classList[0] === "trash-btn") {
        const todo = item.parentElement;
        todo.classList.add('fall');
        todo.addEventListener('transitionend', function(){
            todo.remove();
        });
    }

    //checkmark
    if(item.classList[0] === 'complete-btn') {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}


