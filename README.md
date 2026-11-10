# Week 5 - DOM and Events

## Author
- Name: Claire Wairimu
- GitHub: gakuruclaire39-cmd
- Date: Nov 10, 2026

## What I built
For week 5 we had to work on DOM manipulation. I made two things. The dom-practice page is for the class tasks 9 and 10, and index.html is the to-do list mini project. It was mostly about javascript events and how to make pages interactive without reloading.

## Tech I used
- HTML
- CSS
- JavaScript vanilla (no framework)
- Chrome devtools for debugging

## Project structure
```
iyf-s12-week-05-gakuruclaire39-cmd/
├── index.html
├── styles.css
├── app.js
├── dom-practice.html
├── dom.js
├── daily-challenges/
├── .gitignore
└── README.md
```

index.html is the to-do list. app.js has all the logic. dom-practice.html + dom.js are for the practice tasks.

## Features I did
- Select and change elements with querySelector
- Create elements with JS (the bubbling boxes)
- Click and keyboard events
- Show event.target, currentTarget, clientX/Y in console
- Keyboard shortcuts: Ctrl+S to save, Esc to clear, Ctrl+Enter to submit
- Event delegation - only one listener on ul instead of many on li
- To-do list: add, delete, mark done, filter all/active/completed, count items left, clear completed, double click to edit

## How to run it
1. Clone the repo
2. Open dom-practice.html for the tasks - open console to see logs
3. Open index.html for the to-do app
4. I also deployed on github pages: https://gakuruclaire39-cmd.github.io/iyf-s12-week-05-gakuruclaire39-cmd/

## What I learned
- I finally understood event bubbling. I kept getting confused between target and currentTarget but now it makes sense.    Also delegation is really useful because before I was adding listeners to every new item and it was breaking. closest()   helped a lot when the li has a button inside.

- Form validation was tricky too, learning preventDefault and FormData.

## Problems I had
- The biggest issue was getting errors like "redeclaration of const emailInput". I had declared the same variable in task     and task 10 so JS was complaining. I fixed it by renaming to emailInput10 and form10.

- Also my delete button was toggling the task at the same time, so I added a return if its a delete button click.

- Spent a lot of time on console.log to see what was happening.

## Live link
[View My Webpage](https://gakuruclaire39-cmd.github.io/iyf-s12-week-05-gakuruclaire39-cmd/)

[Dom Practice](https://gakuruclaire39-cmd.github.io/iyf-s12-week-05-gakuruclaire39-cmd/dom-practice.html)
