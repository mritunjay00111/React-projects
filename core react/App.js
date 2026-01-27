// const head = document.createElement("div");
// head.innerHTML = "Hello world from js";
// document.getElementById("root").appendChild(head);

const head = React.createElement("div", {id:'heading'}, "Hello world from react");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(head);
