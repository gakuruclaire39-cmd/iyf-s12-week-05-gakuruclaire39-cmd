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

const nav = document.querySelector("nav");
console.log("Exercise 2 - nav exists for removal demo:", nav);

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
