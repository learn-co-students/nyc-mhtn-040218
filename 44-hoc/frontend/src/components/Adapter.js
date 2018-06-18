class Adapter {
  static loggedIn() {
    return !localStorage.getItem("token")
  }
}

export default Adapter
