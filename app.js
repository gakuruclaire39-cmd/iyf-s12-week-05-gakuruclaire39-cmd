// DOM Elements
const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const itemsLeft = document.getElementById("items-left");
const filters = document.querySelectorAll(".filter");
const clearCompletedBtn = document.getElementById("clear-completed");

// State
let todos = [];
let currentFilter = "all";

// Functions
function createTodoElement(todo) {
    const li = document.createElement("li");
    li.dataset.id = todo.id;
    li.className = `todo-item ${todo.completed ? "completed" : ""}`;
    li.style.cssText = "display:flex;justify-content:space-between;padding:8px;border-bottom:1px solid #eee;";
    if (todo.completed) li.style.textDecoration = "line-through";
    
    const span = document.createElement("span");
    span.className = "todo-text";
    span.textContent = todo.text;
    span.style.cursor = "pointer";
    span.style.flex = "1";
    
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "×";
    deleteBtn.style.cssText = "background:red;color:white;border:none;border-radius:50%;cursor:pointer;";
    
    li.appendChild(span);
    li.appendChild(deleteBtn);
    
    // Bonus: Double-click to edit
    span.addEventListener("dblclick", () => {
        const newText = prompt("Edit task:", todo.text);
        if (newText !== null && newText.trim() !== "") {
            todo.text = newText.trim();
            renderTodos();
            console.log("Edited todo:", todo.id);
        }
    });
    
    return li;
}

function renderTodos() {
    todoList.innerHTML = "";
    
    let filtered = todos;
    if (currentFilter === "active") filtered = todos.filter(t => !t.completed);
    if (currentFilter === "completed") filtered = todos.filter(t => t.completed);
    
    filtered.forEach(todo => {
        todoList.appendChild(createTodoElement(todo));
    });
    
    updateStats();
    console.log(`Rendered ${filtered.length} todos (filter: ${currentFilter})`);
}

function addTodo(text) {
    if (!text.trim()) {
        console.log("Empty task not allowed");
        return;
    }
    const todo = {
        id: Date.now(),
        text: text.trim(),
        completed: false
    };
    todos.push(todo);
    renderTodos();
    console.log("Added todo:", text);
}

function toggleTodo(id) {
    const todo = todos.find(t => t.id === id);
    if (todo) {
        todo.completed = !todo.completed;
        renderTodos();
        console.log("Toggled todo:", id, todo.completed);
    }
}

function deleteTodo(id) {
    todos = todos.filter(t => t.id !== id);
    renderTodos();
    console.log("Deleted todo:", id);
}

function updateStats() {
    const activeCount = todos.filter(t => !t.completed).length;
    itemsLeft.textContent = `${activeCount} items left`;
}

function filterTodos(filter) {
    currentFilter = filter;
    filters.forEach(f => f.classList.toggle("active", f.dataset.filter === filter));
    renderTodos();
    console.log("Filter set to:", filter);
}

// Event Listeners
form.addEventListener("submit", function(event) {
    event.preventDefault();
    addTodo(input.value);
    input.value = "";
    input.focus();
});

// Delegation: ONE listener for all todo actions
todoList.addEventListener("click", function(event) {
    const li = event.target.closest("li");
    if (!li) return;
    const id = Number(li.dataset.id);
    
    if (event.target.classList.contains("delete-btn")) {
        deleteTodo(id);
    } else {
        toggleTodo(id);
    }
});

// Filters
filters.forEach(filterBtn => {
    filterBtn.addEventListener("click", () => {
        filterTodos(filterBtn.dataset.filter);
    });
});

// Clear Completed
clearCompletedBtn.addEventListener("click", () => {
    todos = todos.filter(t => !t.completed);
    renderTodos();
    console.log("Cleared completed");
});

// Keyboard: Escape clears input
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        input.value = "";
        console.log("Escape - cleared input");
    }
});

// Initialize with demo data
addTodo("Learn DOM manipulation");
addTodo("Practice event delegation");
renderTodos();

console.log("===== MINI-PROJECT: To-Do List COMPLETE =====");
