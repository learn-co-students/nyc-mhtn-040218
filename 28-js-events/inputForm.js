const greetingForm = document.getElementById("greeting-form");

greetingForm.addEventListener("submit", function(event) {
  event.preventDefault();
  const greeting = document.getElementById("greeting-field");
  const name = document.getElementById("name-field");
  console.log(`${greeting.value} ${name.value}`);
});
