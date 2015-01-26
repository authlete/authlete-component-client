//-----------------------------
// Constants.
//-----------------------------

const CLIENT_NAME           = "Client Name";
const CLIENT_URI            = "Home Page URL";
const CONTACTS              = "Contacts";
const DEFAULT_ACRS          = "Default Acrs";
const DEFAULT_MAX_AGE       = "Default Max Age";
const DESCRIPTION           = "Description";
const JWKS                  = "JSON Web Key Set";
const JWKS_URI              = "JSON Web Key Set URL";
const LOGIN_URI             = "Login URL";
const LOGO_URI              = "Logo URL";
const POLICY_URI            = "Policy Page URL";
const REDIRECT_URIS         = "Redirect URLs";
const REQUEST_URIS          = "Request URLs";
const SECTOR_IDENTIFIER_URI = "Sector Identifier";
const TOS_URI               = "Terms Of Service Page URL";

//-----------------------------
// Validation Regex Patterns.
//-----------------------------

const PATTERN_ASCII               = /^[\x00-\x7F]*$/;
const PATTERN_NON_NEGATIVE_NUMBER = /^(0|[1-9][0-9]*)$/;
const PATTERN_URL                 = /^[a-zA-Z0-9]+:\/\/[\w/:%#\$&\?\(\)~\.=\+\-]+$/;
const PATTERN_EMAIL               = /^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*)$/;

//-----------------------------
// Validation Limits.
//-----------------------------

const CLIENT_NAME_MAX_LEN           = 100;
const CLIENT_URI_MAX_LEN            = 200;
const TOS_URI_MAX_LEN               = 200;
const REQUEST_URI_MAX_LEN           = 200;
const REDIRECT_URI_MAX_LEN          = 200;
const LOGIN_URI_MAX_LEN             = 200;
const LOGO_URI_MAX_LEN              = 200;
const POLICY_URI_MAX_LEN            = 200;
const JWKS_URI_MAX_LEN              = 200;
const SECTOR_IDENTIFIER_URI_MAX_LEN = 200;
const DESCRIPTION_MAX_LEN           = 200;
const CONTACT_MAX_LEN               = 200;
const DEFAULT_ACR_MAX_LEN           = 200;
const JWKS_MAX_LEN                  = 65535;
const CONTACTS_COUNT_MAX            = 255;
const DEFAULT_ACRS_COUNT_MAX        = 255;
const REDIRECT_URIS_COUNT_MAX       = 255;
const REQUEST_URIS_COUNT_MAX        = 255;

//-----------------------------
// Validation Errors.
//-----------------------------

const ERROR_EMPTY                      = "'%s' must not be empty.";
const ERROR_EMPTY_IN_ARRAY             = "The %s element of '%s' must not be empty.";
const ERROR_MAX_LEN                    = "The length of '%s' must not exceed %s.";
const ERROR_MAX_LEN_IN_ARRAY           = "The length of the %s element of '%s' must not exceed %s.";
const ERROR_MAX_COUNT                  = "The number of the elements of '%s' must not exceed %s.";
const ERROR_NON_ASCII_LETTER           = "'%s' must not contain non-ascii letter.";
const ERROR_NEGATIVE_NUMBER            = "'%s' must be a non negative number.";
const ERROR_INVALID_URL                = "'%s' must be a valid URL.";
const ERROR_INVALID_URL_IN_ARRAY       = "The %s element of '%s' must be a valid URL.";
const ERROR_URL_WITH_FRAGMENT          = "'%s' must not contain fragments.";
const ERROR_URL_WITH_FRAGMENT_IN_ARRAY = "The %s element of '%s' must not contain fragments.";
const ERROR_NON_SECURE_SCHEME          = "The scheme of '%s' must be 'https'.";
const ERROR_DUPLICATE_VALUE_IN_ARRAY   = "The %s element of '%s' is a duplicate.";
const ERROR_INVALID_EMAIL_IN_ARRAY     = "The %s element of '%s' must be a valid email.";
const ERROR_INVALID_JSON               = "'%s' must be a valid JSON.";

//-----------------------------
// Validation Exception.
//-----------------------------

function AuthleteException(message)
{
  this.message = message || "Undefined Error Message.";
}

AuthleteException.prototype = new Error();
AuthleteException.prototype.constructor = AuthleteException;

//-----------------------------
// Validation Functions.
//-----------------------------

/**
 * Perform the validation by if condition.
 */
function validateByIfCondition(condition, message)
{
  if (condition)
  {
    throw new AuthleteException(message);
  }
}

/**
 * Ensure that the value is not empty.
 */
function _validateNotEmpty(value, message)
{
  validateByIfCondition(isEmpty(value) === true, message);
}

/**
 * Ensure that the value is not empty.
 */
function validateNotEmpty(name, value)
{
  _validateNotEmpty(value, sprintf(ERROR_EMPTY, name));
}

/**
 * Ensure that the value is not empty.
 */
function validateNotEmptyInArray(name, index, value)
{
  _validateNotEmpty(value, sprintf(ERROR_EMPTY_IN_ARRAY, toOrdinal(index + 1), name));
}

/**
 * Ensure that the value does not duplicate in Array.
 */
function validateNotDuplicateInArray(name, index, value, array)
{
  validateByIfCondition(array.indexOf(value) > -1, sprintf(ERROR_DUPLICATE_VALUE_IN_ARRAY, toOrdinal(index + 1), name));
}

/**
 * Ensure that the number of entries does not exceed the maximum count.
 */
function validateCountMax(name, count, maxCount)
{
  validateByIfCondition(count > maxCount, sprintf(ERROR_MAX_COUNT, name, maxCount));
}

/**
 * Ensure that the length of the value does not exceed the max length.
 */
function _validateMaxLen(value, maxLen, message)
{
  validateByIfCondition(value.length > maxLen, message);
}

/**
 * Ensure that the length of the value does not exceed the max length.
 */
function validateMaxLen(name, value, maxLen)
{
  _validateMaxLen(value, maxLen, sprintf(ERROR_MAX_LEN, name, maxLen));
}

/**
 * Ensure that the length of the value does not exceed the max length.
 */
function validateMaxLenInArray(name, index, value, maxLen)
{
  _validateMaxLen(value, maxLen, sprintf(ERROR_MAX_LEN_IN_ARRAY, toOrdinal(index + 1), name, maxLen));
}

/**
 * Ensure that the value is according to the pattern.
 */
function validatePattern(value, pattern, message)
{
  validateByIfCondition(pattern.test(value) === false, message);
}

/**
 * Ensure that the value is consisted of only ASCII letters.
 */
function validatePrintableAsciiLetter(name, value)
{
  validatePattern(value, PATTERN_ASCII, sprintf(ERROR_NON_ASCII_LETTER, name));
}

/**
 * Ensure that the value is a valid URI.
 * Note that this also ensures that the value is consisted of only ASCII letters.
 */
function validateUri(name, value)
{
  validatePattern(value, PATTERN_URL, sprintf(ERROR_INVALID_URL, name));
}

/**
 * Ensure that the value is a valid URI.
 * Note that this also ensures that the value is consisted of only ASCII letters.
 */
function validateUriInArray(name, index, value)
{
  validatePattern(value, PATTERN_URL, sprintf(ERROR_INVALID_URL_IN_ARRAY, toOrdinal(index +1), name));
}

/**
 * Ensure that the value does not contain fragments.
 */
function _validateNoFragment(value, message)
{
  validateByIfCondition(value.indexOf("#") > -1, message);
}

/**
 * Ensure that the value does not contain fragments.
 */
function validateNoFragment(name, value)
{
  _validateNoFragment(value, sprintf(ERROR_URL_WITH_FRAGMENT, name));
}

/**
 * Ensure that the value does not contain fragments.
 */
function validateNoFragmentInArray(name, index, value)
{
  _validateNoFragment(value, sprintf(ERROR_URL_WITH_FRAGMENT_IN_ARRAY, toOrdinal(index + 1), name));
}

/**
 * Ensure that the value is a valid email address.
 */
function validateEmailInArray(name, index, value)
{
  validatePattern(value, PATTERN_EMAIL, sprintf(ERROR_INVALID_EMAIL_IN_ARRAY, toOrdinal(index + 1), name));
}

/**
 * Ensure that the value is a non negative number.
 */
function validateNonNegativeNumber(name, value)
{
  validatePattern(value, PATTERN_NON_NEGATIVE_NUMBER, sprintf(ERROR_NEGATIVE_NUMBER, name));
}

/**
 * Ensure that the value starts with 'https'.
 */
function validateSecureScheme(name, value)
{
  validateByIfCondition(value.lastIndexOf("https", 0) !== 0, sprintf(ERROR_NON_SECURE_SCHEME, name));
}

/**
 * Ensure that the value is valid JSON.
 */
function validateJson(name, value)
{
  try
  {
    JSON.parse(value);
  }
  catch (e)
  {
    throw new AuthleteException(sprintf(ERROR_INVALID_JSON, name));
  }
}

/**
 * Validate the optional URI.
 */
function validateOptionalUri(name, value, maxLen)
{
  if (isEmpty(value) === false)
  {
    validateUri(name, value);
    validateMaxLen(name, value, maxLen);
  }
}

/**
 * Validate the data.
 */
function validate(data)
{
  // Perform the validation only for text inputs, into which users can put any value.
  // This means no validation is done for the other style inputs
  // such as ApplicaitonType, which is determined via radio buttons.

  // TODO: validteData(data);

  validateClientName(data.clientName);
  validateRedirectUris(data.redirectUris);
  validateContacts(data.contacts);
  validateDescription(data.description);
  validateClientUri(data.clientUri);
  validateLogoUri(data.logoUri)
  validatePolicyUri(data.policyUri);
  validateTosUri(data.tosUri);
  validateSectorIdentifierUri(data.sectorIdentifierUri);
  validateLoginUri(data.loginUri);
  validateRequestUris(data.requestUris);
  validateDefaultMaxAge(data.defaultMaxAge);
  validateDefaultAcrs(data.defaultAcrs);
  validateJwksUri(data.jwksUri);
  validateJwks(data.jwks);
}

/**
 * Validate 'Client Name'.
 */
function validateClientName(value)
{
  if (isEmpty(value) === false)
  {
    validateMaxLen(CLIENT_NAME, value, CLIENT_NAME_MAX_LEN);
  }
}

/**
 * Validate 'Client URI'.
 */
function validateClientUri(value)
{
  validateOptionalUri(CLIENT_URI, value, CLIENT_URI_MAX_LEN);
}

/**
 * Validate 'Contacts'.
 */
function validateContacts(valueArr)
{
  if (isEmptyArray(valueArr) === true)
  {
    return;
  }

  // Ensure that the number of the elements does not exceed the maximum count.
  validateCountMax(CONTACTS, valueArr.length, CONTACTS_COUNT_MAX);

  var validatedContacts = [];

  for (var i = 0; i < valueArr.length; i++)
  {
    var contact = valueArr[i];

    validateNotEmptyInArray(CONTACTS, i, contact);
    validateContact(i, contact);
    validateNotDuplicateInArray(CONTACTS, i, contact, validatedContacts);

    validatedContacts.push(contact);
  }
}

function validateContact(index, value)
{
  validateEmailInArray(CONTACTS, index, value);
  validateMaxLenInArray(CONTACTS, index, value, CONTACT_MAX_LEN);
}

/**
 * Validate 'Default Acrs'.
 */
function validateDefaultAcrs(valueArr)
{
  if (isEmptyArray(valueArr) === true)
  {
    return;
  }

  // Ensure that the number of the elements does not exceed the maximum count.
  validateCountMax(DEFAULT_ACRS, valueArr.length, DEFAULT_ACRS_COUNT_MAX);

  var validatedDefaultAcrs = [];

  for (var i = 0; i < valueArr.length; i++)
  {
    var redirectUri = valueArr[i];

    validateNotEmptyInArray(DEFAULT_ACRS, i, redirectUri);
    validateDefaultAcr(i, redirectUri);
    validateNotDuplicateInArray(DEFAULT_ACRS, i, redirectUri, validatedDefaultAcrs);

    validatedDefaultAcrs.push(redirectUri);
  }
}

function validateDefaultAcr(index, value)
{
  // Ensure that the value matches a URL pattern.
  // Note that this also ensures the following.
  // (1) The value is consisted of only ASCII letters.
  // (2) The value is an absolute URL.
  validateUriInArray(DEFAULT_ACRS, index, value);

  // Ensure that the value does not exceed the maximum length.
  validateMaxLenInArray(DEFAULT_ACRS, index, value, DEFAULT_ACR_MAX_LEN);
}

/**
 * Validate 'Default Max Age'.
 */
function validateDefaultMaxAge(value)
{
  if(isEmpty(value) === false)
  {
    validateNonNegativeNumber(DEFAULT_MAX_AGE, value);
  }
}

/**
 * Validate 'Description'.
 */
function validateDescription(value)
{
  if (isEmpty(value) === false)
  {
    validatePrintableAsciiLetter(DESCRIPTION, value);
    validateMaxLen(DESCRIPTION, value, DESCRIPTION_MAX_LEN);
  }
}

/**
 * Validate 'JSON Web Key Set'.
 */
function validateJwks(value)
{
  if (isEmpty(value) === false)
  {
    validateJson(JWKS, value);
    validatePrintableAsciiLetter(JWKS, value);
    validateMaxLen(JWKS, value, JWKS_MAX_LEN);
  }
}

/**
 * Validate 'JSON Web Key Set URI'.
 */
function validateJwksUri(value)
{
  validateOptionalUri(JWKS_URI, value, JWKS_URI_MAX_LEN);
}

/**
 * Validate 'Login URI'.
 */
function validateLoginUri(value)
{
  validateOptionalUri(LOGIN_URI, value, LOGIN_URI_MAX_LEN);
}

/**
 * Validate 'Logo URI'.
 */
function validateLogoUri(value)
{
  validateOptionalUri(LOGO_URI, value, LOGO_URI_MAX_LEN);
}

/**
 * Validate 'Policy URI'.
 */
function validatePolicyUri(value)
{
  validateOptionalUri(POLICY_URI, value, POLICY_URI_MAX_LEN);
}

/**
 * Validate 'Redirect URIs'.
 */
function validateRedirectUris(valueArr)
{
  if (isEmptyArray(valueArr) === true)
  {
    return;
  }

  // Ensure that the number of the elements does not exceed the maximum count.
  validateCountMax(REDIRECT_URIS, valueArr.length, REDIRECT_URIS_COUNT_MAX);

  var validatedRedirectUris = [];

  for (var i = 0; i < valueArr.length; i++)
  {
    var redirectUri = valueArr[i];

    validateNotEmptyInArray(REDIRECT_URIS, i, redirectUri);
    validateRedirectUri(i, redirectUri);
    validateNotDuplicateInArray(REDIRECT_URIS, i, redirectUri, validatedRedirectUris);

    validatedRedirectUris.push(redirectUri);
  }
}

function validateRedirectUri(index, value)
{
  // Ensure that the value matches a URL pattern.
  // Note that this also ensures the following.
  // (1) The value is consisted of only ASCII letters.
  // (2) The value is an absolute URL.
  validateUriInArray(REDIRECT_URIS, index, value);

  // Ensure that the value does not exceed the maximum length.
  validateMaxLenInArray(REDIRECT_URIS, index, value, REDIRECT_URI_MAX_LEN);

  // Ensure that the value does not contain fragments.
  validateNoFragmentInArray(REDIRECT_URIS, index, value);
}

/**
 * Validate 'Request URIs'.
 */
function validateRequestUris(valueArr)
{
  if (isEmptyArray(valueArr) === true)
  {
    return;
  }

  // Ensure that the number of the elements does not exceed the maximum count.
  validateCountMax(REQUEST_URIS, valueArr.length, REQUEST_URIS_COUNT_MAX);

  var validatedRequestUris = [];

  for (var i = 0; i < valueArr.length; i++)
  {
    var redirectUri = valueArr[i];

    validateNotEmptyInArray(REQUEST_URIS, i, redirectUri);
    validateRequestUri(i, redirectUri);
    validateNotDuplicateInArray(REQUEST_URIS, i, redirectUri, validatedRedirectUris);

    validatedRequestUris.push(redirectUri);
  }
}

function validateRequestUri(index, value)
{
  // Ensure that the value matches a URL pattern.
  // Note that this also ensures the following.
  // (1) The value is consisted of only ASCII letters.
  // (2) The value is an absolute URL.
  validateUriInArray(REQUEST_URIS, index, value);

  // Ensure that the value does not exceed the maximum length.
  validateMaxLenInArray(REQUEST_URIS, index, value, REQUEST_URI_MAX_LEN);

  // Ensure that the value does not contain fragments.
  validateNoFragmentInArray(REQUEST_URIS, index, value);
}

/**
 * Validate 'Sector Identifier URI'.
 */
function validateSectorIdentifierUri(value)
{
  if (isEmpty(value) === false)
  {
    validateUri(SECTOR_IDENTIFIER_URI, value);
    validateMaxLen(SECTOR_IDENTIFIER_URI, value, SECTOR_IDENTIFIER_URI_MAX_LEN);
    validateSecureScheme(SECTOR_IDENTIFIER_URI, value);
  }
}

/**
 * Validate 'Terms Of Service URI'.
 */
function validateTosUri(value)
{
  validateOptionalUri(TOS_URI, value, TOS_URI_MAX_LEN);
}

//-----------------------------
// Util Functions.
//-----------------------------

/**
 * Returns if the value is empty or not.
 */
function isEmpty(value)
{
  return value == null || value.length === 0;
}

/**
 * Returns if the value is empty array or not.
 */
function isEmptyArray(valueArr)
{
  return valueArr == null || valueArr.length === 0 || isEmpty(valueArr[0]);
}

/**
 * Format the sentence with the arguments.
 */
function sprintf(format)
{
  for (var i = 1; i < arguments.length; i++)
  {
    format = format.replace(/%s/, arguments[i]);
  }

  return format;
}

/**
 * Convert the number to the ordinal format.
 */
function toOrdinal(number)
{
  var ends = ["th", "st", "nd", "rd", "th", "th", "th", "th", "th", "th"];

  // 11, 12 and 13 must end with "th".
  if (number > 10 && number < 14)
  {
    return number + "th";
  }
  else
  {
    return number + ends[number % 10];
  }
}