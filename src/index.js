//this is the entry point of our application.


import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));//pass any element to this createRoot() function which you want to make root.  This line creates a new root using ReactDOM.createRoot. A root is a container for rendering React elements into the DOM. document.getElementById('root') retrieves the DOM element with the id 'root', which is typically where the React application is mounted in the HTML file.

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);//This line renders the App component into the root created in the previous step

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
