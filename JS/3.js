const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const numTel = document.getElementById("numTel");
const comment = document.getElementById("comment");
const submitButton = document.getElementById("submitButton");
console.log(firstName);

console.log(submitButton.disabled);

const onInput = () => {
  if (firstName.value !== "" && email.value !== "" && comment.value !== "") {
    submitButton.disabled = false;
  }
};

email.addEventListener("input", onInput);
comment.addEventListener("input", onInput);
firstName.addEventListener("input", onInput);

const submitForm = () => {
  console.log(submitButton.disabled);
};
submitButton.addEventListener("click", submitForm);
