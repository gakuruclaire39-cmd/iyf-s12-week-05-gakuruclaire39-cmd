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
