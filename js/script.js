const appEl = document.getElementById("app");
const signupSectionEl = document.getElementById("newsletter-signup");
const successSectionEl = document.getElementById("newsletter-success");
const formEl = document.getElementById("newsletter-signup-form");
const emailInputEl = document.getElementById("newsletter-signup-input");
const successMessageEl = document.getElementById("newsletter-success-message");
const dismissMessageEl = document.getElementById(
  "newsletter-success-dismiss-btn"
);

function show() {
  appEl.appendChild(this);
  this.style.display = "flex";
}

function hide() {
  appEl.removeChild(this);
  this.style.display = "none";
}

signupSectionEl.show = show;
successSectionEl.show = show;

signupSectionEl.hide = hide;
successSectionEl.hide = hide;

successSectionEl.hide();

function setSubscriptionMessage(email) {
  successMessageEl.innerHTML = `
A confirmation email has been sent to 
<span class="email">${email}</span>. 
Please open it and click the button inside to confirm your subscription`;
}

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  submittedEmail = emailInputEl.value;

  signupSectionEl.hide();
  successSectionEl.show();

  setSubscriptionMessage(emailInputEl.value);
});

dismissMessageEl.addEventListener("click", () => location.reload());

emailInputEl.addEventListener("input", (event) => {
  if (event.target.value) {
    emailInputEl.setAttribute("required", true);
  } else {
    emailInputEl.removeAttribute("required");
  }
});
