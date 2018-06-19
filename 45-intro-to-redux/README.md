Intro to Redux
==============

## Objectives

- [ ] What is Redux?
- [ ] Why Redux?
- [ ] Do I really have to use Redux?
- [ ] Prove it to you.
- [ ] How do I learn Redux?

## Outline

- [ ] Rollover from HOC
- [ ] Recap what we know about React
- [ ] What "problems" have you run into in React?
- [ ] Enter Redux
  - [ ] What?
  - [ ] Why?
  - [ ] How?
- [ ] Do I really have to?
- [ ] Prove it to me.
- [ ] FAQ / Q&A

## Vocabulary

My potentially controversial take:

> Redux is as much a test of your English skills as it is a test of your JavaScript skills.

- [ ] Redux
- [ ] state
- [ ] store
- [ ] object tree
- [ ] Single Source of Truth
- [ ] Read-Only
- [ ] Pure Functions
- [ ] Unidirectional Flow
- [ ] getState()
- [ ] dispatch()
- [ ] action
- [ ] plain object
- [ ] type
- [ ] payload
- [ ] reducer
- [ ] pass by reference
- [ ] mutate
- [ ] reduce()
- [ ] Action Creators
- [ ] mapStateToProps()
- [ ] mapDispatchToProps()
- [ ] combineReducers()
- [ ] ALL_THE_CAPS
- [ ] Provider
- [ ] connect()

## Lecture Notes

Redux **will** test your JavaScript knowledge to the **MAX**!!!

### React Recap

**Pain Points**

- When state becomes too big and shared, there's too much lifting & too much refactoring.

Much like what _Fun Fun Functions_ said about Composition over Inheritance:

- you've set your `state`
- app is nicely structured and all good
- but then the boss comes over and says, "let's add this feature!"
- this feature necessitates adding `state` somewhere that needs either:
  - lots of passing around
  - refactoring and moving state around (lifting up, etc.)
- So what are you to do?

Redux. That's what.

- That's when Redux helps the most.
- React == easy and fast to setup, but becomes a pain when it becomes too heavy.
- Redux == slow to setup (boilerplate), but makes to much easier to scale apps.

### Redux Overview

[See slides](https://docs.google.com/presentation/d/1IIzo1y-nHkQEGtEhDiq7NevbTipq0jGj9XjOs4hLE9Q/edit?usp=sharing).

**Key Points**

- What does Redux solve.
- Single Source of Truth: Store
- Read and Writing to the Store
- Pure Functions: Reducers
- Unidirectional Flow
- Common Hurdles of Redux

Catchy phrase I learned from another instructor that might help you understand redux:

> Data down actions up that is how we like to redux.

## Resources

Egghead courses by Dan Abramov:

- [Getting Started with Redux](https://egghead.io/courses/getting-started-with-redux)
- [Building React Applications with Idiomatic Redux](https://egghead.io/courses/building-react-applications-with-idiomatic-redux)
- [Pure vs Impure Functions](https://egghead.io/lessons/react-redux-pure-and-impure-functions)

Redux docs:

- [Redux](https://redux.js.org/)
- [Basics: Usage with React](https://redux.js.org/basics/usage-with-react)
- [FAQ: Code Structure](https://redux.js.org/faq/code-structure)
- [FAQ: Do I have to put all my state into Redux? Should I ever use React's setState()?](https://redux.js.org/faq/organizing-state#do-i-have-to-put-all-my-state-into-redux-should-i-ever-use-reacts-setstate)
- [Recipes: Using Object Spread Operator](https://redux.js.org/recipes/using-object-spread-operator)
- [Recipes: Reducing Boilerplate](https://redux.js.org/recipes/reducing-boilerplate)
