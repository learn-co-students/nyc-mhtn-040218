const initialState = {
  paintings: [{ id: 1, title: "Starry Night" }, { id: 2, title: "Cambell Soup"}]
}

const reducer = (state = initialState, action) => {
  console.log('helo from painting reducer')
  
  switch(action.type) {
    case "ADD_PAINTING":
      return state
    case "RESET":
      return { paintings: [] };
    default:
      return state;
  }
}

export default reducer;
