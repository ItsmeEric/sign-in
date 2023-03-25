function togglePassword() {
  document
    .querySelectorAll(".eye")
    .forEach((eye) => eye.classList.toggle("hide"));

  const type =
    password.getAttribute("type") == "password" ? "type" : "password";

  password.setAttribute("type", type);
}
