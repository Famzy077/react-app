import React from "react";
import ReactDom from "react-dom/client";
// import App from "./ReactTutorial/tuTorial";
import OnchangeElem from "./ReactTutorial/changeComponent";
import ReducerExample from "./ReactTutorial/ReducerExample"
import Updates from "./ReactTutorial/updateState";
import UpdateComponent from "./ReactTutorial/updatesComponent";
import ComponentA from "./ReactTutorial/ComponentA";
import AddArray from "./ReactTutorial/AddArrayComponent";
import AddObject from "./ReactTutorial/AddObject";
import ToDoList from "./ReactTutorial/TodoList";


ReactDom.createRoot(document.querySelector('#root')).render(<ToDoList/>)