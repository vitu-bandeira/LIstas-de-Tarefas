const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditBtn= document.querySelector("#Cancelar-edit ");

let oldInputValue;

const saveTodo = (text) => {

    const todo = document.createElement("div");
    todo.classList.add("todo")

    const todoTitle = document.createElement("h3")
    todoTitle.innerText = text;
    todo.appendChild(todoTitle);

    const doneBtn = document.createElement("button")
    doneBtn.classList.add("finish-todo")
    doneBtn.innerHTML = '<i class="fas fa-check"></i>'
    todo.appendChild(doneBtn);
    
    const editBtn = document.createElement("button")
    editBtn.classList.add("edit-todo")
    editBtn.innerHTML = '<i class="fas fa-pen"></i>'
    todo.appendChild(editBtn);

    const deleBtn = document.createElement("button")
    deleBtn.classList.add("remove-todo")
    deleBtn.innerHTML = '<i class="fas fa-xmark"></i>'
    todo.appendChild(deleBtn);

    todoList.appendChild(todo);
    todoInput.value = "";
    todoInput.focus();

}

const toggleForms = () =>{
    editForm.classList.toggle("hide");
    todoForm.classList.toggle("hide");
    todoList.classList.toggle("hide");
}

function updatetodo(text) {

    const todos = document.querySelectorAll(".todo");

    todos.forEach((todo) => {
        const todoTitle = todo.querySelector("h3").innerText;

        if (todoTitle === oldInputValue) {
            todo.querySelector("h3").innerText = text;
        }
    });

}

todoForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputValue = todoInput.value;

    if(inputValue){
        saveTodo(inputValue);
    }
});

const getSearchedTodos = (search) => {
    const todos = document.querySelectorAll(".todo");
  
    todos.forEach((todo) => {
      const todoTitle = todo.querySelector("h3").innerText.toLowerCase();
  
      todo.style.display = "flex";
  
      console.log(todoTitle);
  
      if (!todoTitle.includes(search)) {
        todo.style.display = "none";
      }
    });
  };

document.addEventListener("click", (e) => {

    const targetEl = e.target;
    const parentEl = targetEl.closest("div");
    let todoTitle;

    if (parentEl && parentEl.querySelector("h3")){
        todoTitle = parentEl.querySelector("h3").innerText;
    }

    if (targetEl.classList.contains("finish-todo")){
       parentEl.classList.toggle("done");
    }
    
    if (targetEl.classList.contains("remove-todo")){
        parentEl.remove();
    }

    if (targetEl.classList.contains("edit-todo")){
        toggleForms();

        editInput.value = todoTitle;
        oldInputValue = todoTitle;

    }
});

cancelEditBtn.addEventListener("click", (e) => {
    e.preventDefault();

    toggleForms();
});

editForm.addEventListener("submit", (e) => {
    
    e.preventDefault();

    const editInputValue = editInput.value;

    if(editInputValue){
        updatetodo(editInputValue)
    }

    toggleForms();
})

function search(){
    let input = document.getElementById('search').value
    input = input.toLowerCase();

    let x = document.getElementById('todo-list');

    for(i = 0; i < x.length; i++){
        if(!x[i].innerHTML.toLowerCase().innerText.includes(input)){
            x[i].style.display = "none";
        }else{
            x[i].style.display = "list-item";
        }
    }
}
