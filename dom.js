// 1. getElementById
const header = document.getElementById("main-header");
console.log("getElementById:", header);

// 2. getElementsByClassName
const contents = document.getElementsByClassName("content");
console.log("getElementsByClassName:", contents);

// 3. getElementsByTagName
const paragraphs = document.getElementsByTagName("p");
console.log("getElementsByTagName:", paragraphs);

// 4. querySelector
const firstLink = document.querySelector(".nav-link");
console.log("querySelector:", firstLink);

// 5. querySelectorAll
const allLinks = document.querySelectorAll(".nav-link");
console.log("querySelectorAll:", allLinks);


// PRACTICE EXERCISES

// 1. Select the h1 element
const heading = document.querySelector("h1");
console.log("Heading:", heading);

// 2. Select all elements with class content
const allContents = document.querySelectorAll(".content");
console.log("All contents:", allContents);

// 3. Select the contact form
const contactForm = document.getElementById("contact-form");
console.log("Contact form:", contactForm);

// 4. Select the email input
const emailInput = document.getElementById("email");
console.log("Email input:", emailInput);

// 5. Select all navigation list items
const navItems = document.querySelectorAll(".nav-list li");
console.log("Navigation items:", navItems);

// 6. Select the first nav link
const firstNavLink = document.querySelector(".nav-link");
console.log("First nav link:", firstNavLink);

// 7. Select the last paragraph
const allParagraphs = document.querySelectorAll("p");
const lastParagraph = allParagraphs[allParagraphs.length - 1];
console.log("Last paragraph:", lastParagraph);

// ===== TASK 9.2: Traversing the DOM =====

const nav = document.querySelector("nav");

// Parent
console.log("Parent of nav:", nav.parentElement); // header

// Children
console.log("Children of nav:", nav.children);
console.log("First child:", nav.firstElementChild);
console.log("Last child:", nav.lastElementChild);

// Siblings
const article = document.querySelector("article");
console.log("Next sibling of article:", article.nextElementSibling); // section
console.log("Previous sibling of article:", article.previousElementSibling); // null or h2? actually null because article is first in container

// Descendants
const navLinks = nav.querySelectorAll("a");
console.log("Descendant links in nav:", navLinks);

// Practice Tasks:
const headerEl = document.getElementById("main-header");
const navInsideHeader = headerEl.querySelector("nav");
console.log("Practice 1 - nav inside header:", navInsideHeader);

const firstNavLink2 = document.querySelector(".nav-link");
console.log("Practice 2 - parent li of first nav-link:", firstNavLink2.parentElement);

const articleEl = document.querySelector("article");
console.log("Practice 3 - next sibling of article:", articleEl.nextElementSibling);

const ul = document.querySelector(".nav-list");
console.log("Practice 4 - child li of ul:", ul.children);

const footer = document.querySelector("footer");
console.log("Practice 5 - from footer to body:", footer.parentElement);

// ===== TASK 9.3: Modifying Content =====

// Exercise 1: Text Content
const h1 = document.querySelector("h1");
console.log("Exercise 1 - textContent:", h1.textContent);
console.log("Exercise 1 - innerText:", h1.innerText);
// We READ it, we don't change it yet to keep page readable
// h1.textContent = "New Title";

// Exercise 2: HTML Content
const articleTask = document.querySelector("article");
console.log("Exercise 2 - innerHTML:", articleTask.innerHTML);

// Security demo - SAFE version (commented, shows concept)
const userInput = `<img src="x" onerror="alert('hacked!')">`;
console.log("Danger of innerHTML with user input:", userInput);
// articleTask.textContent = userInput; // Safe
// articleTask.innerHTML = userInput; // Unsafe - don't do

// Exercise 3: Attributes
const link = document.querySelector(".nav-link");
console.log("Exercise 3 - getAttribute href:", link.getAttribute("href"));
console.log("Exercise 3 - property href:", link.href);
link.setAttribute("href", "https://developer.mozilla.org");
console.log("After setAttribute:", link.getAttribute("href"));
console.log("hasAttribute target:", link.hasAttribute("target"));
link.removeAttribute("target");

// Data attributes demo
// Create a test element to show dataset
const testEl = document.createElement("div");
testEl.setAttribute("data-id", "123");
testEl.setAttribute("data-category", "tech");
console.log("dataset.id:", testEl.dataset.id);
console.log("dataset.category:", testEl.dataset.category);
testEl.dataset.newAttr = "value";
console.log("After adding dataset.newAttr:", testEl.outerHTML);

// Exercise 4: Styles
const container = document.querySelector(".container");
container.style.backgroundColor = "#f0f0f0";
container.style.padding = "30px";
container.style.borderRadius = "8px";
console.log("Exercise 4 - styles applied to .container");

Object.assign(container.style, {
    backgroundColor: "#333",
    color: "white",
    padding: "20px"
});
console.log("Exercise 4 - Object.assign styles applied");

// ===== TASK 9.4: Adding & Removing Elements =====

// Exercise 1: Creating Elements
const newParagraph = document.createElement("p");
newParagraph.textContent = "This is a new paragraph! (Task 9.4)";
newParagraph.className = "content highlight";

const articleForAdd = document.querySelector("article");
articleForAdd.appendChild(newParagraph);
console.log("Exercise 1 - appendChild:", newParagraph);

const firstP = articleForAdd.querySelector("p");
articleForAdd.insertBefore(newParagraph, firstP);
console.log("Exercise 1 - insertBefore first p");

// Modern methods
articleForAdd.prepend(newParagraph);
console.log("prepend - first child");
articleForAdd.append(newParagraph);
console.log("append - last child");
firstP.before(newParagraph);
console.log("before sibling");
firstP.after(newParagraph);
console.log("after sibling");

// Exercise 2: Removing Elements - SAFE demo (we clone then remove clone, so we don't break page)
// const footer = document.querySelector("footer");
// footer.remove(); // would remove footer - skip for demo

const navForRemoval = document.querySelector("nav");
console.log("Exercise 2 - nav exists for removal demo:", navForRemoval);
// Clear demo - we won't actually clear article or you'll lose content
console.log("Exercise 2 - removeChild / innerHTML='' concept logged");

// Exercise 3: Cloning Elements
const navItem = document.querySelector(".nav-link").parentElement;
const clone = navItem.cloneNode(true);
clone.querySelector("a").textContent = "New Link (Cloned)";
document.querySelector(".nav-list").appendChild(clone);
console.log("Exercise 3 - Cloned nav item:", clone);

// Build: Function to add nav item dynamically
function addNavItem(text, href) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.textContent = text;
    a.href = href;
    a.className = "nav-link";
    li.appendChild(a);
    document.querySelector(".nav-list").appendChild(li);
    console.log(`addNavItem added: ${text} -> ${href}`);
}

addNavItem("Blog", "/blog");
addNavItem("Portfolio", "/portfolio");

// ===== TASK 10.1: Event Listeners =====

// Exercise 1: Basic Events
const button = document.createElement("button");
button.textContent = "Click Me (10.1)";
document.body.appendChild(button);

button.addEventListener("click", function() {
    console.log("Task 10.1 - Button clicked! (anonymous)");
});

button.addEventListener("click", () => {
    console.log("Task 10.1 - Clicked again! (arrow)");
});

function handleClick() {
    console.log("Task 10.1 - Handled! (named)");
}
button.addEventListener("click", handleClick);
button.removeEventListener("click", handleClick);
console.log("Task 10.1 - Added and removed handleClick");

// Exercise 2: Event Types demo
const demoInput = document.createElement("input");
demoInput.placeholder = "Type here for keyboard events";
document.body.appendChild(demoInput);

demoInput.addEventListener("keydown", (e) => console.log("keydown:", e.key));
demoInput.addEventListener("keyup", () => console.log("keyup"));
demoInput.addEventListener("focus", () => console.log("focus event"));
demoInput.addEventListener("blur", () => console.log("blur event"));
demoInput.addEventListener("input", (e) => console.log("input:", e.target.value));

// Build: Click Counter
const counterDiv = document.createElement("div");
counterDiv.style.margin = "20px 0";
counterDiv.innerHTML = `
    <h3>Click Counter (Task 10.1 Build)</h3>
    <p>Count: <span id="count">0</span></p>
    <button id="inc">+</button>
    <button id="dec">-</button>
    <button id="reset">Reset</button>
`;
document.body.appendChild(counterDiv);

let count = 0;
const countSpan = document.getElementById("count");
document.getElementById("inc").addEventListener("click", () => {
    count++;
    countSpan.textContent = count;
    console.log("Counter:", count);
});
document.getElementById("dec").addEventListener("click", () => {
    if (count > 0) count--;
    countSpan.textContent = count;
    console.log("Counter:", count);
});
document.getElementById("reset").addEventListener("click", () => {
    count = 0;
    countSpan.textContent = count;
    console.log("Counter reset");
});

console.log("Task 10.1 Complete - Click the buttons to test!");

// ===== TASK 10.2: The Event Object =====
document.addEventListener("click", function(event) {
    console.log("--- Task 10.2 Click Event Object ---");
    console.log("Target:", event.target);
    console.log("Current Target:", event.currentTarget);
    console.log("Type:", event.type);
    console.log("Position:", event.clientX, event.clientY);
    // event.preventDefault(); // would block all clicks
    // event.stopPropagation();
});

// Keyboard events - detailed
document.addEventListener("keydown", function(event) {
    console.log("--- Task 10.2 Keydown ---");
    console.log("Key:", event.key);
    console.log("Code:", event.code);
    console.log("Shift:", event.shiftKey);
    console.log("Ctrl:", event.ctrlKey);
    console.log("Alt:", event.altKey);
});

// Build: Keyboard Shortcuts
document.addEventListener("keydown", function(event) {
    // Ctrl+S
    if (event.ctrlKey && event.key === "s") {
        event.preventDefault();
        alert("Saved! (Ctrl+S)");
        console.log("Task 10.2 Build - Ctrl+S -> Saved!");
    }
    // Escape: Clear all form inputs
    if (event.key === "Escape") {
        const inputs = document.querySelectorAll("input");
        inputs.forEach(input => input.value = "");
        console.log("Task 10.2 Build - Escape -> Cleared inputs");
    }
    // Ctrl+Enter: Submit form
    if (event.ctrlKey && event.key === "Enter") {
        console.log("Task 10.2 Build - Ctrl+Enter -> Submit form");
        const form = document.querySelector("#contact-form");
        if (form) form.dispatchEvent(new Event("submit"));
    }
});

console.log("Task 10.2 Complete - Click anywhere, press keys, try Ctrl+S, Esc, Ctrl+Enter");

// ===== TASK 10.3 Exercise 1: Understanding Bubbling =====
const bubblingDemo = document.createElement("div");
bubblingDemo.innerHTML = `
    <div id="grandparent" style="padding:20px; background:#fcc; margin:10px;">
        Grandparent
        <div id="parent" style="padding:20px; background:#cfc;">
            Parent
            <div id="child" style="padding:20px; background:#ccf;">
                Child (click me)
            </div>
        </div>
    </div>
`;
document.body.appendChild(bubblingDemo);

document.getElementById("grandparent").addEventListener("click", () => {
    console.log("Task 10.3 - Grandparent clicked (bubbling)");
});
document.getElementById("parent").addEventListener("click", () => {
    console.log("Task 10.3 - Parent clicked (bubbling)");
});
document.getElementById("child").addEventListener("click", (e) => {
    console.log("Task 10.3 - Child clicked (bubbling starts here)");
    // e.stopPropagation(); // uncomment to stop bubbling
});

// ===== Exercise 2: Event Delegation + closest() =====
console.log("Task 10.3 - Delegation: Using closest() for nested elements");

// ===== Build: Delegated Task List =====
const taskListBuild = document.createElement("div");
taskListBuild.innerHTML = `
    <h3>Build: Delegated Task List (Task 10.3)</h3>
    <input id="new-task-input" placeholder="New task" />
    <button id="add-task-btn">Add Task</button>
    <ul id="task-list" style="list-style:none; padding:0;">
        <li class="task-item">Learn DOM <button class="delete-btn">Delete</button></li>
        <li class="task-item">Practice Events <button class="delete-btn">Delete</button></li>
    </ul>
`;
document.body.appendChild(taskListBuild);

const taskList = document.getElementById("task-list");
const newTaskInput = document.getElementById("new-task-input");
const addTaskBtn = document.getElementById("add-task-btn");

// ONE listener on parent UL
taskList.addEventListener("click", function(event) {
    // Use closest() - handles if you click on span/button inside li
    const taskItem = event.target.closest("li");
    
    // Delete button
    if (event.target.classList.contains("delete-btn")) {
        console.log("Task 10.3 - Delete:", taskItem.textContent);
        taskItem.remove();
        return;
    }
    
    // Toggle completed
    if (event.target.matches("li") || event.target.closest("li.task-item")) {
        if (taskItem) {
            taskItem.classList.toggle("completed");
            taskItem.style.textDecoration = taskItem.classList.contains("completed") ? "line-through" : "none";
            console.log("Task 10.3 - Toggled completed:", taskItem.textContent);
        }
    }
});

// Add new tasks - they AUTOMATICALLY work with delegation!
function addTask() {
    const text = newTaskInput.value.trim();
    if (!text) return;
    const li = document.createElement("li");
    li.className = "task-item";
    li.innerHTML = `${text} <button class="delete-btn">Delete</button>`;
    taskList.appendChild(li);
    console.log("Task 10.3 - Added task:", text);
    newTaskInput.value = "";
}
addTaskBtn.addEventListener("click", addTask);
newTaskInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") addTask();
});

console.log("Test: Click Child box, click Tasks to toggle, click Delete, add new task");

// ===== TASK 10.4: Form Handling =====
const form = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");

function showError(input, message) {
    input.classList.add("error");
    input.style.borderColor = "red";
    let errorEl = input.nextElementSibling;
    if (!errorEl || !errorEl.classList.contains("error-msg")) {
        errorEl = document.createElement("span");
        errorEl.className = "error-msg";
        errorEl.style.color = "red";
        errorEl.style.fontSize = "12px";
        input.parentNode.insertBefore(errorEl, input.nextSibling);
    }
    errorEl.textContent = message;
    console.log(`Task 10.4 - Error on ${input.id}: ${message}`);
}

function clearError(input) {
    input.classList.remove("error");
    input.style.borderColor = "green";
    let errorEl = input.nextElementSibling;
    if (errorEl && errorEl.classList.contains("error-msg")) {
        errorEl.textContent = "";
    }
    console.log(`Task 10.4 - Cleared error on ${input.id}`);
}

function showSuccess(message) {
    console.log(`Task 10.4 - SUCCESS: ${message}`);
    alert(message);
}

function isValid(data) {
    return data.name && data.name.length >= 2 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email);
}

if (nameInput && emailInput && form) {
    // Real-time validation
    nameInput.addEventListener("input", function(event) {
        const value = event.target.value;
        if (value.length < 2) {
            showError(nameInput, "Name must be at least 2 characters");
        } else {
            clearError(nameInput);
        }
    });

    emailInput.addEventListener("input", function(event) {
        const value = event.target.value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            showError(emailInput, "Please enter a valid email");
        } else {
            clearError(emailInput);
        }
    });

    // Form submission
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        console.log("Task 10.4 - Form data:", data);
        
        if (isValid(data)) {
            showSuccess("Form submitted successfully!");
            form.reset();
            // Clear borders
            nameInput.style.borderColor = "";
            emailInput.style.borderColor = "";
        } else {
            console.log("Task 10.4 - Form invalid, not submitting");
        }
    });
    
    console.log("Task 10.4 - Complete form validation added");
}

