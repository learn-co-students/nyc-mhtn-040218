import UUID from 'uuid';

const initialState = {
  hello: 'world',
  notes: [],
}

// key word ==> reducer = .reduce
// Reducer is a PURE FUNCTION!!! SO PURE!!!
// action = { type: 'SOME_STRING', payload: whatever }
const reducer = (state = initialState, action) => {
  // Read-Only == DON'T MUTATE STATE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  console.log('state', state);
  console.log('action', action);

  switch (action.type) {
    case 'ADD_NOTE':
      // ADD A NOTE
      return {...state, notes: [...state.notes, { id: UUID(), text: action.payload.text }]};
    case 'DELETE_NOTE':
      // DELETE A NOTE
      return {...state};
    default:
      return state;
  }
  // if (action.type === 'ADD_NOTE') {
  //   // ADD A NOTE
  // } else if (action.type === 'DELETE_NOTE') {
  //   // DEKLETE A NOTE
  // }


  // return state;
}

export default reducer;
