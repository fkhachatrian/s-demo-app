/*jshint esversion: 6 */

/**
 * isEmailValid Checks if provided e-mail is valid or not.
 * @param  {String}  email
 * @return {Boolean}
 */
export const isEmailValid = (email) => {
  const regexPattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return regexPattern.test(email);
};

/**
 * isNameValid Checks if provided name is valid or not.
 * @param  {String}  name
 * @return {Boolean}
 */
export const isNameValid = (name) => {
  const regexPattern = /^[a-zA-Z]+$/;

  return regexPattern.test(name);
};

/**
 * isBankNameValid Checks if provided bank name is valid or not.
 * @param  {String}  bankName
 * @return {Boolean}
 */
export const isBankNameValid = (bankName) => {
  return (bankName.length > 0);
};

/**
 * isIbanValid Checks if provided iban is valid or not.
 * @param  {String}  iban
 * @param  {Object}  ibanValidaor Validator function
 * @return {Boolean}
 */
export const isIbanValid = (iban, ibanValidaor) => {
  return ibanValidaor.isValid(iban);
};

/**
 * manageValidationState Sets the validation state of the provided component.
 * @param  {String}  field         Filed to be set
 * @param  {Boolean} isValid       Validation flag
 * @param  {Boolean} classThisProp `this` object of the component-class
 * @return {Object}
 */
export const manageValidationState = (field, isValid, classThisProp) => {
  classThisProp.setState((prevState) => {
    const pState = Object.assign({}, prevState);
    pState.isValid[field] = isValid;

    return {
      isValid: Object.assign({}, pState.isValid)
    };
  });
};
