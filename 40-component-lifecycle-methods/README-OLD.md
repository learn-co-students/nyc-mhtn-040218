Component Lifecycle Methods
===========================

## Outline

- Lifecycle Methods Old
- Lifecycle Methods New
- setState()

## Lecture Notes

### The Old

#### Mounting (Birth)

1. constructor()
2. componentWillMount()
3. render()
4. componentDidMount()

#### Updating (Growth)

##### props

1. componentWillReceiveProps()
2. shouldComponentUpdate()
3. componentWillUpdate()
4. render()
5. componentDidUpdate()

##### state

1. shouldComponentUpdate()
2. componentWillUpdate()
3. render()
4. componentDidUpdate()

#### Unmounting (Death)

1. componentWillUnmount()
