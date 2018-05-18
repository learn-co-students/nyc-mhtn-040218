// Write our first event listener and handler here
const element = document.getElementById("listen-for-event");
const handleClick = function() {
  console.log("clicked");
};
element.addEventListener("click", handleClick);
