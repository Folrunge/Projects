var email = document.getElementById("email");

email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("You just destroyed Alderaan");
  } else {
    email.setCustomValidity("");
  }
});