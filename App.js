// const heading = React.createElement("h1", { id: "heading" }, "Hello world from react!");
// console.log(heading) // object
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);


// Nested structured 
const parent = React.createElement(
     "div",
     { id: "parent" },
     [React.createElement(
          "div",
          { id: "child1" }, [
          React.createElement("h1", { id: "heading1" }, "Hello I am h1 tag..."),
          React.createElement("h2", { id: "heading2" }, "Hello I am h2 tag...")
     ]
     ), React.createElement(
          "div",
          { id: "child2" }, [
          React.createElement("h1", { id: "heading1" }, "Hello I am h1 tag..."),
          React.createElement("h2", { id: "heading2" }, "Hello I am h2 tag...")
     ]
     )]
)
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)