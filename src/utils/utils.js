/**
 * Includes helper methods related to the project.
 */

//check validationg of number field
export function validateNumberFld(value) {
  let regex = /^\d*$/;
  return !regex.test(value);
}

//check validation of email field
export function validateEmailFld(value) {
  let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return !regex.test(value);
}

//check validation of empty fields
//in case of having an empty field, it won't be valid.
export function validateEmptyField(value) {
  return value.length === 0;
}
