// 1) Import the React ReactDOM libraries
import React from "react";
import ReactDOM from 'react-dom/client'
import App from "./App";
import { BrowserRouter } from "react-router-dom";

// 2) Get a reference to the div with ID root
const element = document.getElementById('root')

// 3) Tell React to take control of that element
const root = ReactDOM.createRoot(element)

// 4) Show the component on the screen
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)
