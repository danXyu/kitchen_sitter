/* Validation: Ensure that the value is a proper email, by searching for the index
 * of the '@' symbol within the string parameter.
 */
function isEmail(val) {
  if (val.indexOf('@') !== -1) {
    return true;
  }
  return false;
}

/* Validation: Ensure that the password is a valid password, with at least six
 * characters in length or longer.
 */
function isValidPassword(val) {
  if (val.length >= 6) {
    return true;
  }
  return false;
}

/* Validation: Ensure that the parameter field is not empty. Checks for both existence
 * and the presence of the empty string.
 */
function isNotEmpty(val) {
  if (val && val !== '') {
    return true;
  }
  return false;
}