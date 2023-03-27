//Function does the USER not sent the form
document.querySelector("form").addEventListener("submit", (event) => {
  console.log(
    "The form has been submitted, but you are not allowed to send it"
  );
  event.preventDefault();
});

//Actions to toggle the password
function togglePassword() {
  document
    .querySelectorAll(".eye")
    .forEach((eye) => eye.classList.toggle("hide"));

  const type =
    password.getAttribute("type") == "password" ? "type" : "password";

  password.setAttribute("type", type);
}
