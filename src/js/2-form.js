const localStorageKey = 'feedback-form-state';
const form = document.querySelector('.feedback-form');

const formData = JSON.parse(localStorage.getItem(localStorageKey)) || {
  email: '',
  message: '',
};
form.elements.email.value = formData.email;
form.elements.message.value = formData.message;

form.addEventListener('input', event => {
  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();
  const formSavedObj = { email, message };
  localStorage.setItem('localStorageKey', JSON.stringify(formSavedObj));
});

form.addEventListener('submit', event => {
  event.preventDefault();
  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();

  if (email === '' || message === '') {
    return alert('All form fields must be filled in');
  }

  console.log({ email, message });
  localStorage.removeItem('localStorageKey');
  form.reset();
});
