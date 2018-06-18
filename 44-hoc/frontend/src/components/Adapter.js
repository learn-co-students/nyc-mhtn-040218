class Adapter {
  // This was badly named.
  // Edited it to be !!
  // That way it makes sense now.
  static loggedIn() {
    return !!localStorage.getItem("token")
    // equivalent to:
    /*
    if (localStorage.getItem("token")) {
      return true
    } else {
      return false
    }
    */
  }

  // We want to return a Promise to be used with out HOC.
  // Hence why we return a fetch here.
  static getSnacks() {
    return fetch(
      `http://localhost:3000/snacks/`,
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": localStorage.getItem("token")
        }
      }
    )
    .then(res => res.json());
  }

  static getMySnacks() {
    return fetch(
      `http://localhost:3000/users/${localStorage.getItem("id")}/snacks`,
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": localStorage.getItem("token")
        }
      }
    )
    .then(res => res.json())
  }
}

export default Adapter
