Intro to React
==============

## Outline (1.5 hrs)

- Vanilla JS
- Environment Setup
- React Hello World
- Intro to JSX (JSX vs HTML)
- Declarative vs. Imperative
- Intro to the Virtual DOM
- JSX in Depth
- JSX & React Components (not yet)

## Class Notes

```
Interesting (very good)
DOM manipulation
Do a lot
Do things without refreshing
Nested callbacks and thens, lots of them
Scoping / Keeping track of this, variables
Classes
Too many curly brackets
Lack of boilerplate (too much is bad, but some is good)
```

## Lecture Notes

### Vanilla JS

- Experience with writing projects.
- Difficulties?
- What will React help with?
  - react vs react-dom
- Why React?
  - React is for building UIs!
  - [Thinking in React](https://reactjs.org/docs/thinking-in-react.html)

### Environment Setup

[Try React](https://reactjs.org/docs/try-react.html)

- create-react-app

  ```sh
  npm install -g create-react-app
  create-react-app my-app

  cd my-app
  npm start
  ```

- Briefly on what's under the hood:
  - npm / yarn
  - package.json
  - babel
  - webpack
- [Minimal HTML File](https://raw.githubusercontent.com/reactjs/reactjs.org/master/static/html/single-file-example.html)
  - This is how you would have done it if we were in Mod 3.

  ```html
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8" />
      <title>Hello World</title>
      <script src="https://unpkg.com/react@16/umd/react.development.js"></script>
      <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
      <script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script>
    </head>
    <body>
      <div id="root"></div>
      <script type="text/babel">

        ReactDOM.render(
          <h1>Hello, world!</h1>,
          document.getElementById('root')
        );

      </script>
      <!--
        Note: this page is a great way to try React but it's not suitable for production.
        It slowly compiles JSX with Babel in the browser and uses a large development build of React.

        To set up a production-ready React build environment, follow these instructions:
        * https://reactjs.org/docs/add-react-to-a-new-app.html
        * https://reactjs.org/docs/add-react-to-an-existing-app.html

        You can also use React without JSX, in which case you can remove Babel:
        * https://reactjs.org/docs/react-without-jsx.html
        * https://reactjs.org/docs/cdn-links.html
      -->
    </body>
  </html>
  ```

### React Hello World

The anotomy of a React app:
- `document.getElementById('root')`

### Intro to JSX (JSX vs HTML)

The anatomy of JSX.
- Looks like HTML, but it's not HTML.
- It's syntatic sugar for `React.createElement`.
  - Note that JSX won't actually work in browser console!!
- What corresponds to what?
  - Code vs What's Displayed in Browser
  - Syntactic Sugar === Regular JavaScript
- Why do this?
  - Declarative vs. Imperative
  - Virtual DOM

### Declarative vs. Imperative

Abstraction, abstraction, abstraction.

### Intro to the Virtual DOM

- HTML is just a string.
- The DOM is a representation of that string we can interact with programmatically, ask questions to, etc.
- The Virtual DOM is a representation of that representation.
- React will be in charge of making sure the real DOM looks like and will always be in sync with the virtual DOM.
  - And it will do it in a way that keeps things fast.
  - Trust it. As developers, we stand on the shoulders of giants. Tons of other people have worked on this problem and this is the best solution they've come up with thus far.

### JSX in Depth

- More about `React.createElement`
- Open & Close Tags
- Upper case vs lower case
- [Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Expressions): An expression is any valid unit of code that resolves to a value.
  - Expressions Evaluate
- Attributes => `props`
- `children`
- Components!

### JSX & React Components

Learn by building our own.

- Functional vs Class
- Attributes => `props`
- return / render
  - Must always return 1 object or an array of objects.
- Composition over Inheritance

## Extras

`constructor()` vs `constructor(props)`
- https://github.com/facebook/react/issues/11671

Commenting in JSX
- `{/* commented */}`

Class Field Declarations
- `state` in constructor vs `state = {}` in class definition

Functional Components `props` argument:
- Don't need it. They are just functions.
- However, if you don't pass it in, your function won't have access to `props`!
