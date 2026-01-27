React Baby Steps 👶⚛️

This is a minimal React setup using CDN links instead of a build tool like Vite or Create React App.
The goal is to understand how React works under the hood by rendering elements manually with React.createElement.

📁 Project Structure
react-baby-steps/
│
├── index.html
├── App.js
├── style.css
└── README.md

🚀 What This Project Does

Loads React 18 and ReactDOM via CDN

Creates a React element using React.createElement

Renders that element into the DOM using ReactDOM.createRoot

Replaces the static HTML inside #root

🧠 How It Works
1. HTML (index.html)
<div id="root">Hello World!</div>

This is the container where React will render content.

React and ReactDOM are loaded via CDN:

<script src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

2. JavaScript (App.js)
const head = React.createElement(
  "div",
  { id: "heading" },
  "Hello world from react"
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(head);


What’s happening here:

React.createElement() creates a virtual DOM element

createRoot() initializes React’s rendering system

render() mounts the element into the real DOM

React replaces the existing "Hello World!" text inside #root.

3. Vanilla JS Comparison (Commented Out)
// const head = document.createElement("div");
// head.innerHTML = "Hello world from js";
// document.getElementById("root").appendChild(head);


This shows how you’d do the same thing using plain JavaScript, making it easier to compare React vs DOM manipulation.

✅ Why This Exists

Learn React without JSX

Understand what React is actually doing

Avoid magic tools while learning fundamentals

Perfect first step before JSX, components, and hooks

🛠 How to Run

Clone or download the project

Open index.html in your browser

That’s it — no build step required 🎉
