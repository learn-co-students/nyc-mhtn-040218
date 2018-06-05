Props and State
===============

## Outline

- Recap!!!
- Setup: create-react-app
  - yarn vs npm
- Review Components & Props
- Thinking in React (part 1)
  1. Identify Components
    - Single Responsibility Principle!!
  2. Draw Component Hierarchy
- Props vs State
- Flow of Information in React
- Thinking in React (part 2)
  3. Identify State
  4. Add State

## Lecture Notes

### Setup: create-react-app

- Setup what we'll be building today.
- Benefits to using it.

### Review Components & Props

- Questions? Clarifications?

### Thinking in React (part 1)

Get reeeaaaal comfortable with this page in the docs.

1. Identify Components
  - Single Responsibility Principle!!
2. Draw Component Hierarchy

### Props vs State

Learn by doing! Let's build something that needs state!

- [`state` is data that will change](https://facebook.github.io/react-native/docs/state.html).
- How do we define it?
  - `constructor` vs `state = {}`
- How do we change it?
  - **Never** mutate `state`!!!
  - Always **make copies** of `state`!!!
  - We change it with `setState`
- *Briefly* - Event Handlers
  - `onClick` to execute some action
- Debugging `state`:
  - `setState` is asynchronous
    - `debugger` gotcha
  - `setState` callback function
  - `render` as a way to also test `setState`
- Binding functions to use `setState`; why?
- `props` go down, `state` goes up

Why is all of this nice?
- Component isolation === reusability up up up!!

### Flow of Information in React

> `props` go down, `state` goes up

What does this really mean?
- Draw a picture to explain the flow of information.
- For more context, we need to see more of _Thinking in React_.

### Thinking in React (part 2)

3. Identify State
4. Add State

Build something out to see how this works.
- What has state, what doesn't?
- Container vs Presentational Components (if applicable)

## Extras

`map` returning `undefined` is a common mistake
