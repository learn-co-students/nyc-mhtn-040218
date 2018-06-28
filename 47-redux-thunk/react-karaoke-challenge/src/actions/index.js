// setSongs() {
//   return { type, payload }
// }
const API = "http://localhost:4000";

export function fetchSongs() {
  return (dispatch, getState) => {
    fetch(`${API}/songs`)
      .then(res => res.json())
      .then(json => dispatch({ type: "SET_SONGS", payload: json }));
  };
}
