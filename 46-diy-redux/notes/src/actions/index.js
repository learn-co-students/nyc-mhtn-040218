import UUID from 'uuid';

// Action Creators
export function addNotebook(title) {
  return {
    type: "ADD_NOTEBOOK", payload: { id: UUID(), title }
  }
}

/*
MAKE_NOTE
DELETE_NOTE
EDIT_NOTE
DOODLE_A_NOTE
ADD_NOTE_TO_NOTEBOOK
DELETE_NOTEBOOK
*/

/*
const ADD_NOTEBOOK = {
  type: "ADD_NOTEBOOK", payload: { title: "Redux!!!" }
}

export default ADD_NOTEBOOK;
*/
