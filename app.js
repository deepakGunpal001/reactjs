/**
 * * npm i -D parcel
 * * npx parcel index.html(entry point)
 * * Created a Server
 * * HMR - Hot Module Replacement
 * * Parcel uses File Watcher algorithm - written in c++
 * * Bundling
 * * Minifying the code
 * * Cleaning our code - console removed
 * * Dev and production build
 * * Super fast build algorithm 
 *      *- npx parcel build index.html 
 *      *-> after changing the file extension of "main" in package.json. .js extension wont work
 * * Image Optimization
 * * Caching while development
 * * Compression
 * * Compatible with older version of browser
 * * HTTPS on dev - npx parcel index.html --https
 * * we should put .parcel-cache in .gitignore
 * * Consistent hashing algorithm
 * * Zero config
 * * Tree shaking - removing un-wanted code - unused code from packages or libraries
 * 
 * 
 * * Transitive dependencies
 */

/**
 * * "browsersList": [
 * * "last 2 Chrome  versions" //will work on others also but will definitely work these versions
 * * "last 2 Firefox versions]
 */

import React from 'react'
import ReactDOM from 'react-dom/client';

const heading = React.createElement(
    "h1",
    { id: "title" },
    // null,
    "Namaste World!"
); //empty object is for attributes

//? JSX => html like syntax in javascript but not html - some differences are {} to embed javascript within html-like code and camelCase in attribute names
//? JSX => React.createElement => Object => HTML(DOM)

const heading2 = <h2 id='title'>Namaste Earth!</h2>
const container = React.createElement(
    "div",
    { id: "container" },
    // null,
    [heading, heading2]
); //empty object is for attributes or props in react
//   console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
//   root.render(heading);
root.render(container);

//experiments
// console.log("experiments");
// const obj = {
//     name: 'Deepak',
//     printArrow: () => {
//         console.log(this);
//     },
//     printRegular: function () {
//         console.log(this);
//     }
// }

// const person = {
//     name: 'sanjay'
// }
// console.log('Arrow')
// obj.printArrow();
// obj.printArrow.call();
// obj.printArrow.call(this);
// obj.printArrow.call(obj);
// obj.printArrow.call(person);
// console.log('Regular')
// obj.printRegular();
// obj.printRegular.call();
// obj.printRegular.call(this);
// obj.printRegular.call(obj);
// obj.printRegular.call(person);
