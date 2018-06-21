export function addNoteAction(note) {
  return {
    type: "ADD_NOTE",
    payload: { text: note }
  }
}

export function deleteNoteAction() {
  return {
    type: "DELETE_NOTE",
  }
}
