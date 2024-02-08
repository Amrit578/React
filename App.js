import React from "react"
import ReactDOM from "react-dom/client"

// Nested structured 
const parent = React.createElement(
     "div",
     { id: "parent" },
     [React.createElement(
          "div",
          { id: "child1" }, [
          React.createElement("h1", { id: "heading1" }, "This is Namaste React 🚀"),
          React.createElement("h2", { id: "heading2" }, "by Amrit Singh")
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