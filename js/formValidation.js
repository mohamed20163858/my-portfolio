const form = document.forms[0];
const { email } = form;
const invalidMessage = document.createElement('span');
invalidMessage.style.cssText = "color: red;font-family: 'Inter', sans-serif;display: inline-block; margin-top: 2vw";
form.appendChild(invalidMessage);
form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (email.value === email.value.toLowerCase()) {
    invalidMessage.textContent = 'please type your whole email address in lowercase';
  } else {
    invalidMessage.textContent = '';
    form.submit();
  }
});
