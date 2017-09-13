module.exports = {
  registration: {
    EMAIL_ADDRESS_IN_USE: 'This email account is already in use.',
    BAD_EMAIL_ADDRESS: 'You must provide a valid email',
    PASSWORD: {
      BAD_PASSWORD: 'The password provided failed to match the following rules:',
      REQUIRED_PASSWORD_CHARACTERS: '1. Password must contain ONLY the following characters: uppercase, lowercase, numerics.',
      REQUIRED_PASSWORD_LENGTH: '2. Password must be at least 8 characters in length and not more than 32 characters in length.',
    },
    DEFAULT_REGISTRATION_MESSAGE: 'Invalid registration information.',
  },
  login: {
    INCORRECT_LOGIN_INFORMATION: 'Login information was incorrect.',
    LOGIN_ERROR: 'An error has occurred while trying to log in.',
  },
  timestamp: {
    ONE_WEEK: 60 * 60 * 24 * 7,
  },
};
