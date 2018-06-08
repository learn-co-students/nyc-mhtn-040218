Component Lifecycle Methods
===========================

## Outline

- Lifecycle Methods Old
- Lifecycle Methods New
- setState()

## Summary

See the README-OLD.md and README-NEW.md files for a plain text list of lifecycle methods.

These are the blogs/diagrams you'll want to read/see:
- [Old Lifecycle Methods Diagram](https://hackernoon.com/reactjs-component-lifecycle-methods-a-deep-dive-38275d9d13c0)
- [New Lifecycle Methods Diagram](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
  - [Original Source](https://twitter.com/dan_abramov/status/981712092611989509)
- [`setState` Cheatsheet](https://levelup.gitconnected.com/react-cheatsheet-this-setstate-8bc12c5f40f5)
- Remember, not all of what you will see is technically true. People have opinions.
- For example, here there are a few places where you _can_ put `setState`, but they would be code smells as you probably wouldn't want to be doing them in those lifecycle methods.
- The important part is understanding where you _mustn't_ put `setState` as it could cause an infinite loop. `render` being the most obvious place _not_ to do `setState`.

## Lecture Notes (Old Lifecycle Only)

Component Lifecyle methods provide us with a way of managing our components through the stages of their existence.

### Birth, Growth & Death

![Birth](https://media.giphy.com/media/26vUBafzKjglmpg1a/giphy.gif)

### Birth

* constructor()
* componentWillMount()
* render()
* componentDidMount()

##### componentWillMount

Very little happens here. However, any **configuration** you might need to do to connect to an external api can be done here. (Using Firebase Realtime Data for eg you have to setup listeners ) Since the component itself hasn't even mounted we can see there is little to do.

**No access to set state. Use default state instead (Use constructor)**

##### componentDidMount

> You can’t guarantee the fetch request won’t resolve before the component mounts. If it did, that would mean that you’d be trying to setState on an unmounted component, which not only won’t work, but React will yell at you for. Doing a fetch in componentDidMount on the other hand will guarantee that there’s a component to update - [Tyler McGinnis](https://tylermcginnis.com/react-interview-questions/)

Do all the fun things you couldn't do without a component.

* add event listeners ( or anything with the DOM for that matter eg D3.js stuff)
* draw on `<canvas>`
* **API Calls**

---

![Circle of Life](https://media.giphy.com/media/CDDsXPv8mO2Na/giphy.gif)

### Growth

* componentWillReceiveProps()
* shouldComponentUpdate()
* componentWillUpdate()
* render()
* componentDidUpdate()

##### componentWillReceiveProps

This function is called as `componentWillReceiveProps(nextProps)` Here we can access both the previous props `this.props` and the new props coming in. We can call setState here.

This is used particularly when we wanna check if a particular change to a prop should trigger a change to the state of the component it is being passed in.

**Not called on initial render**

##### shouldComponentUpdate

This function is called as `shouldComponentUpdate(nextProps, nextState)` and must return a boolean.

If you're super concerned with wasted renders this is a place where we could think about improving performance.

**componentWillUpdate**

This is rarely used

> In the entire MuseFind codebase, we never use componentWillUpdate. Functionally, it’s basically the same as componentWillReceiveProps, except you are not allowed to call this.setState. - Scott Domes. Lead Developer

* cannot call setState

##### componentDidUpdate

This can be used in scenarios where you want to make changes to the DOM after the the component is updated. For example think about if you were using a library like masonry that allows you to rearrange blocks based on sizes etc you could use componentDidUpdate to access the DOM after the layout is set.

Additionally could be used for any calls to the database you would to have run only after an update is completed

### Death

* componentWillUnmount()

Used to perform any cleanup we might need. For example closing websocket connections or removing listeners

### Mounting lifecycle methods

Called once on initial render:

| Method               | nextProps | nextState | Can call `this.setState` |        Called when?        |                                           Used for                                           |
| -------------------- | :-------: | :-------: | :----------------------: | :------------------------: | :------------------------------------------------------------------------------------------: |
| `componentWillMount` |    no     |    no     |           yes            | once, just before mounting |                             setting initial state based on props                             |
| `componentDidMount`  |    no     |    no     |           yes            | once, just after mounting  | setting up side effects (e.g. creating new DOM elements or setting up asynchronous functions |

### Updating lifecycle methods

Not called on initial render, but always called whenever a subsequent re-render is triggered:

|           Method            | nextProps | nextState | Can call `this.setState` |                         Called when?                         |                                     Used for                                     |
| :-------------------------: | :-------: | :-------: | :----------------------: | :----------------------------------------------------------: | :------------------------------------------------------------------------------: |
| `componentWillReceiveProps` |    yes    |    no     |           yes            | many times, whenever component is going to receive new props |                    applying state changes based on new props                     |
|   `shouldComponentUpdate`   |    yes    |    yes    |           yes            |     many times, whenever a re-render has been triggered      |    deciding based on new & old props & state whether a re-render should occur    |
|    `componentWillUpdate`    |    yes    |    yes    |            no            |   many times, when new state and props are being received    | prepare for the update, dispatch any actions or animations based on state change |
|    `componentDidUpdate`     |   yes\*   |   yes\*   |           yes            |      many times, just after the re-render has finished       | any DOM updates following a render (mostly interacting with 3rd party libraries) |

\* `componentDidUpdate` will actually receive `prevProps` and `prevState` as arguments, as the newly applied state and props can be accessed through `this.props` and `this.state`.

### Dismounting lifecycle method

Called only once, just before the component is removed from the DOM:

|         Method         | nextProps | nextState | Can call `this.setState` |                    Called when?                     |                        Used for                         |
| :--------------------: | :-------: | :-------: | :----------------------: | :-------------------------------------------------: | :-----------------------------------------------------: |
| `componentWillUnmount` |    no     |    no     |            no            | once, just before component is removed from the DOM | destroying any side effects set up in componentDidMount |

## Check out this diagram

![LifeCycle Diagram](https://cdn-images-1.medium.com/max/1440/0*SIX_5-4E123_s0KV.png)

## OR

![React](https://cdn-images-1.medium.com/max/2000/1*XcGM-8E_hGl4fpAr9wJIsA.png)

#### Benchmarking \(Extra Reading\)

* [How to Benchmark React Components](https://engineering.musefind.com/how-to-benchmark-react-components-the-quick-and-dirty-guide-f595baf1014c)
* [Lifecycle Methods](https://gist.github.com/alexgriff/1b5850cac9a1d565f0cb66a941505b99)
