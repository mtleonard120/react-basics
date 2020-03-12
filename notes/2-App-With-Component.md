# 2. App With Component

Lesson Branch: `2-app-with-component`

## Overview

Adds a component in `src/MyComponent` and imports it in `index.js`.

## Notes on src/MyComponent.jsx

Components: functions which return JSX.

Naming: Components are always capitalized in React - Babel recognizes component elements in JSX by their capitalized first letter.

File Type: Files containing JSX are often given the file type of `.jsx`. This is purely a convention - used to let other devs know that the file contains JSX and used to gain additional IDE intellisense. It is just as valid to give these files a `.js` file type.

Exports: React apps generally use ES6 Module architecture. This allows for named exports using the `export` keyword and also allows for default exports using the `export default` keywords. Default exports are _very_ common in the React community, though I suggest avoiding them for better dx (imports have the same name app wide).
