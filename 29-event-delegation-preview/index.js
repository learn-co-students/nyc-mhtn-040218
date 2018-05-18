document.addEventListener("DOMContentLoaded", function(event) {
  const secretAdvice = document.getElementById(
    "secrets-not-so-secret-for-code-challenge"
  );

  secretAdvice.addEventListener("click", function(event) {
    //debugger;
    if (
      event.target.tagName === "LI" &&
      !event.target.className.includes("advice")
    ) {
      console.log("clicked li");
    }
    if (event.target.tagName === "H1") {
      console.log("clicked h1");
    }
    if (event.target.className.includes("advice")) {
      console.log("clicked advice");
    }
  });
});
