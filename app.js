const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const itemsLeft = document.getElementById("items-left");
const filters = document.querySelectorAll(".filter");
const clearCompletedBtn = document.getElementById("clear-completed");

let todos = JSON.parse(localStorage.getItem("todos") || "[]");
let currentFilter = "all";

function save(){ localStorage.setItem("todos", JSON.stringify(todos)); }
function createTodoElement(todo){
  const li = document.createElement("li");
  li.className = `todo-item ${todo.completed ? "completed" : ""}`;
  li.dataset.id = todo.id;
  li.innerHTML = `<label><input type="checkbox" ${todo.completed?"checked":""}><span>${todo.text}</span></label><button class="delete">×</button>`;
  return li;
}
function renderTodos(){
  todoList.innerHTML = "";
  const filtered = todos.filter(t => currentFilter==="active" ? !t.completed : currentFilter==="completed" ? t.completed : true);
  filtered.forEach(todo => todoList.appendChild(createTodoElement(todo)));
  updateStats();
}
function addTodo(text){
  todos.push({id:Date.now(), text, completed:false});
  save(); renderTodos();
}
function toggleTodo(id){ const t=todos.find(x=>x.id==id); if(t){t.completed=!t.completed; save(); renderTodos();} }
function deleteTodo(id){ todos=todos.filter(x=>x.id!=id); save(); renderTodos(); }
function updateStats(){ const left=todos.filter(t=>!t.completed).length; itemsLeft.textContent=`${left} items left`; }

form.addEventListener("submit", e=>{
  e.preventDefault();
  const text=input.value.trim();
  if(!text) return;
  addTodo(text); input.value="";
});

todoList.addEventListener("click", e=>{
  const li=e.target.closest("li");
  if(!li) return;
  if(e.target.matches("input[type=checkbox]")){ toggleTodo(li.dataset.id); }
  if(e.target.classList.contains("delete")){ deleteTodo(li.dataset.id); }
  if(e.target.matches("span")){ li.classList.toggle("completed"); toggleTodo(li.dataset.id); }
});

// Bonus: Double-click to edit
todoList.addEventListener("dblclick", e=>{
  if(!e.target.matches("span")) return;
  const li=e.target.closest("li");
  const id=li.dataset.id;
  const todo=todos.find(t=>t.id==id);
  const newText=prompt("Edit task:", todo.text);
  if(newText!==null){ const trimmed=newText.trim(); if(trimmed){todo.text=trimmed; save(); renderTodos();} }
});

filters.forEach(btn=> btn.addEventListener("click", ()=>{
  filters.forEach(b=>b.classList.remove("active"));
  btn.classList.add("active");
  currentFilter=btn.dataset.filter;
  renderTodos();
}));

clearCompletedBtn.addEventListener("click", ()=>{
  todos=todos.filter(t=>!t.completed);
  save(); renderTodos();
});

renderTodos();
