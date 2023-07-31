// 1) Import the React ReactDOM libraries
// 2) Get a reference to the div with ID root
// 3) Tell React to take control of that element
// 4) Show the component on the screen

import React from "react";
import ReactDOM from 'react-dom/client'
import App from "./App";
import '../src/Books/index.css'
import { BrowserRouter } from "react-router-dom";

const element = document.getElementById('root')
const root = ReactDOM.createRoot(element)

root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)
