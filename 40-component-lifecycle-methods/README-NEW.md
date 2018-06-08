Component Lifecycle Methods
===========================

## Outline

- Lifecycle Methods Old
- Lifecycle Methods New
- setState()

## Lecture Notes

### The New

#### Mounting (Birth)

1. constructor()
2. getDerivedStateFromProps() <-- NEW!
3. render()
4. componentDidMount()


#### Updating (Growth)

##### props

1. getDerivedStateFromProps() <-- NEW!
2. shouldComponentUpdate()
3. render()
4. componentDidUpdate()

##### state

1. shouldComponentUpdate()
2. render()
3. componentDidUpdate()

#### Unmounting (Death)

1. componentWillUnmount()
