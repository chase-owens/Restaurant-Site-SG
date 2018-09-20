function clearForm() {
  let modal = document.querySelector(".modal");
  modal.style.display = "none";
  let inputs = document.querySelectorAll("input");
  for (let i = 0; i <= inputs.length; i++) {
    inputs[i].value = "";
  }
}

function submitForm() {
  let modal = document.querySelector(".modal");
  modal.style.display = "block";
}
