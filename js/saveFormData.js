const contactUsForm = document.forms[0];
const formDetails = {};
if (window.localStorage.getItem('data')) {
  const parsedData = JSON.parse(window.localStorage.getItem('data'));
  contactUsForm.name.value = parsedData.name;
  contactUsForm.email.value = parsedData.name;
  contactUsForm.message.value = parsedData.message;
}
function collectFormData() {
  formDetails.name = contactUsForm.name.value;
  formDetails.email = contactUsForm.email.value;
  formDetails.message = contactUsForm.message.value;
  window.localStorage.setItem('data', JSON.stringify(formDetails));
}
contactUsForm.addEventListener('change', collectFormData);