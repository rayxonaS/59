const signupForm = document.querySelector("#signup-form");
const username = document.querySelector("#username");
const message = document.querySelector(".message");

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const regEx = /^[a-zA-z0-9]{6,12}$/;
  const inputVal = signupForm.username.value;

  if (regEx.test(inputVal)) {
    message.textContent = "Ma'lumot to'g'ri kiritilgan";
  } else {
    message.textContent =
      "Kiritilgan ma'lumot 6 va 12 orasida bo'lishi kerak, katta va kichik lotin harflardan iborat bo'lishi zarur. Raqamlar ham bo'lishi mumkin ";
  }
});
