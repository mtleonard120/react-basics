# 3. Component Logic

Lesson Branch: `3-component-logic`

## Overview

In `src/RandomMessage.jsx`, demonstrate the use of plain js within components and js expressions within JSX.

## Notes on src/RandomMessage.jsx

**Scope**: Variables initialized within components (generally) stay scoped within the component; can be passed to children components as props (more on that later).

**Conditional Rendering**: JS expressions within JSX are really useful to conditionally render different UIs based on state or other variables, like `randomNumber` in this case.

**Rerendering**: Every time RandomMessage is rendered, we are initializing a new `randomNumber`. This is evident when reloading the page, but it also occurs when React decides to `rerender` RandomMessage. Rerenders are triggered by mutations in component state or props, which generally means “random output” components are a bad idea since rerenders may occur quite often. We can revisit this particular topic in a React Hooks presentation with the `useMemo` hook.
