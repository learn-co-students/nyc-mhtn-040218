const initialState = {
  // emopty!!
  pages: [],
  notebooks: [],
  currentPage: {},
  sections: [],
}

const reducer = (state = initialState, action) => {
  console.log('helo from notebook reducer')

  // console.log("It works!!");
  // console.log(action);
  switch(action.type) {
    case "ADD_NOTEBOOK":
      // const newNotebook = {
      //   id: action.payload.id,
      //   title: action.payload.title,
      // }

      return {...state, notebooks: [...state.notebooks, action.payload] };
    case "RESET":
      return initialState;
    default:
      return state;
  }
  // return state;
}

export default reducer;
