export function validateNumberFld(value) {
  let regex = /^\d*$/;
  return !regex.test(value);
}

export function validateEmailFld(value) {
  let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return !regex.test(value);
}

export function validateEmptyField(value) {
  return value.length === 0;
}
