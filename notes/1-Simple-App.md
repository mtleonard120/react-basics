# 1. Simple App

Lesson Branch: `1-simple-app`

## Overview

Highly sophisticated app (`src/index.js`) finds a root element (`<div id="root"></div>`) we included in the DOM (`public/index.html`) and inserts the React app in it.

## Deeper dive of src/index.js

`React`: package used to manage elements in the "virtual DOM", a virtual representation of the UI kept in memory.

`ReactDOM`: package which translates the virtual DOM into actual DOM elements. Responsible for performing efficient DOM diffing operations so that only the minimal number of DOM mutations are performed during renders.

`myReactApp`: JS variable of type JSX, a new type which closely resembles HTML but can include JS expressions. Under the hood, Webpack uses Babel to translate JSX into standard JS functions which represent elements in the virtual DOM. E.G. `const myJSX = <div>Hello</div>` is translated into `const myJSX = React.createElement('div', null, 'Hello')`.

`domElement`: Just the DOM element found in `public/index.html` where we wish to mount the react app. `ReactDOM` is responsible for maintaining all of the DOM within the root element but not the root element itself.

`ReactDOM.render(myReactApp, domElement)`: Instructs `ReactDOM` to render `myReactApp` within `domElement`. This single call also instructs `ReactDOM` to perform any necessary DOM updates if the virtual DOM created by `myReactApp` changes at any point (generally through user interaction).
