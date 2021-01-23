/* ================================================================================================ */
// 1.- Funciones para validaciones
/* ================================================================================================ */
/* ------------------------------------------------------------------------------------------------ */
// 1.1.- Funcion para validar campos vacios o sin información
/* ------------------------------------------------------------------------------------------------ */
function validateEmptyField(field) {
 const emptyFieldRegex = /^$/
 if(emptyFieldRegex.test(field)) return true;
 else return false;
}
/* ------------------------------------------------------------------------------------------------ */

/* ------------------------------------------------------------------------------------------------ */
// 1.2.- Funcion para validar nombre de persona
//       Alfabético, permite espacios en blanco, de 1 a 30 caracteres
//       Alphabetic string, allows blank spaces, from 1 to 30 characters
/* ------------------------------------------------------------------------------------------------ */
function validateName(name) {
 const nameRegex = /^[a-zA-Z\s]{1,30}$/
 if(nameRegex.test(name)) return true;
 else return false;
}
/* ------------------------------------------------------------------------------------------------ */

/* ------------------------------------------------------------------------------------------------ */
// 1.3.- Funcion para validar nombre de empresa o company
//       Alfabético, permite espacios en blanco, puntos, comas, ampersand, de 1 a 30 caracteres
//       Alphabetic, allows blank spaces, point, commas, ampersand, from 1 to 30 characters
/* ------------------------------------------------------------------------------------------------ */
function validateCompanyName(companyName) {
 const companyNameRegex = /^[a-zA-Z&,.\s]{1,30}$/
 if(companyNameRegex.test(companyName)) return true;
 else return false;
}
/* ------------------------------------------------------------------------------------------------ */

/* ------------------------------------------------------------------------------------------------ */
// 1.4.- Funcion para validar Email
/* ------------------------------------------------------------------------------------------------ */
function validateEmail(email) {
 const emailRegex = /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

 if(emailRegex.test(email)) return true;
 else return false;
}
/* ------------------------------------------------------------------------------------------------ */

/* ------------------------------------------------------------------------------------------------ */
// 1.5.- Funcion para validar número telefonico
//       Númerico, permite espacios en blanco, puntos, signo +, de 7 a 20 caracteres
//       Numeric, allows blank spaces, dots, + sign, from 7 to 20 characters
/* ------------------------------------------------------------------------------------------------ */
function validatePhoneNumber(phoneNumber) {
 const phoneNumberRegex = /^[0-9+.\s]{7,20}$/
 if(phoneNumberRegex.test(phoneNumber)) return true;
 else return false;
}
/* ------------------------------------------------------------------------------------------------ */

/* ------------------------------------------------------------------------------------------------ */
// 1.6.- Funcion para validar message
//       Alfanumérico, permite espacios en blanco, puntos, comas, ampersand, etc., de 1 a 250 caracteres
//       Alphanumeric, allows blank spaces, point, commas, ampersand, etc., from 1 to 30 characters
/* ------------------------------------------------------------------------------------------------ */
function validateMessage(message) {
 const messageRegex = /^[a-zA-Z0-9@¿?!¡.,-=*+;/"$%&()/\s\t\n]{1,250}$/
 if(messageRegex.test(message)) return true;
 else return false;
}
/* ------------------------------------------------------------------------------------------------ */

/* ================================================================================================ */

/* ================================================================================================ */
// 2.- Exportación de funciones para validaciones
/* ================================================================================================ */
export default {
 validateEmptyField,
 validateName,
 validateCompanyName,
 validateEmail,
 validatePhoneNumber,
 validateMessage,
}
/* ================================================================================================ */
