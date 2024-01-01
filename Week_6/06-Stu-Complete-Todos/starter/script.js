const todoInput = document.querySelector("#todo-text");
const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");
const todoCountSpan = document.querySelector("#todo-count");

let todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];

init();
renderTodos();

function renderTodos() {
  // Clear todoList element and update todoCountSpan
  todoList.innerHTML = "";
  todoCountSpan.textContent = todos.length;

  // Render a new li for each todo
  for (let i = 0; i < todos.length; i++) {
    const todo = todos[i];

    const li = document.createElement("li");
    li.textContent = todo;

    li.setAttribute("data-index", i);
    const bt = document.createElement("button");
    bt.textContent = "Complete";
    li.appendChild(bt);

    todoList.appendChild(li);
  }
}

todoList.addEventListener("click", function (e) {
  //  if (e.target.tagName == "BUTTON") {
  if (e.target.matches('button')) {
    // console.log(e.target.parentElement.getAttribute("data-index"));
    todos.splice(e.target.parentElement.getAttribute("data-index"), 1);
    renderTodos();
  }
});


// When form is submitted...
todoForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const todoText = todoInput.value.trim();

  // Return from function early if submitted todoText is blank
  if (todoText === "") {
    return;
  }

  // Add new todoText to todos array, clear the input
  todos.push(todoText);
  todoInput.value = "";

  localStorage.setItem("todos", JSON.stringify(todos));

  // Re-render the list
  renderTodos();
});


function init() {
  const storedTodos = JSON.parse(localStorage.getItem("todos"));
  if (storedTodos !== null) {
    todos = storedTodos;
  }
  renderTodos();
}

