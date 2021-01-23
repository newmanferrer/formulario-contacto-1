/* ================================================================================================ */
// 1.- Importaciones
/* ================================================================================================ */
import validate from './validate.js';
/* FIN Importaciones ============================================================================== */

/* ================================================================================================ */
// 2.- Declaraciones de constantes, variables y localización de elementos del HTML
/* ================================================================================================ */
const d = document;
const $contactForm = d.getElementById('contact-form');
const $messageContainer = d.getElementById('message-container');
/* FIN Declaraciones ============================================================================== */

/* ================================================================================================ */
// 3.- Código principal y eventos de escucha
/* ================================================================================================ */
$contactForm.name.focus();

$contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!event.target.matches('#contact-form')) return false;

  $messageContainer.classList.add('none');  
  const name = event.target.name.value;
  const company = event.target.company.value;
  const email = event.target.email.value;
  const phone = event.target.phone.value;
  const message = event.target.message.value;
  let userMessage = '';

  if (validate.validateEmptyField(name) || validate.validateEmptyField(company) || validate.validateEmptyField(email) || validate.validateEmptyField(phone) || validate.validateEmptyField(message)) {
    userMessage = `
      <p>Todos los campos son obligatorios</p>
    `;
  } else if (!validate.validateName(name)) {
    $contactForm.name.focus();
    userMessage = `
      <p>Nombre no valido</p>
    `;
  } else if (!validate.validateCompanyName(company)) {
    $contactForm.company.focus();
    userMessage = `
      <p>Company no valido</p>
    `;
  } else if (!validate.validateEmail(email)) {
    $contactForm.email.focus();
    userMessage = `
      <p>Email no valido</p>
    `;
  } else if (!validate.validatePhoneNumber(phone)) {
    $contactForm.phone.focus();
    userMessage = `
      <p>Phone no valido</p>
    `;
  } else if (!validate.validateMessage(message)) {
    $contactForm.message.focus();
    userMessage = `
      <p>Message no valido</p>
    `;
  }

  if (userMessage !== '') {
    $messageContainer.classList.remove('none');
    $messageContainer.innerHTML = userMessage;
  } else {
    $contactForm.reset();

    setTimeout(() => {
      alert('Datos enviados...')
    }, 2000);
  }
});
/* FIN Código principal =========================================================================== */
