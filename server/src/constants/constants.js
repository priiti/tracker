module.exports = {
  registration: {
    emailAddressAlreadyUsed: 'This email account is already in use.',
    badEmailAddress: 'You must provide a valid email',
    password: {
      badPassword: 'The password provided failed to match the following rules:',
      requiredPasswordCharacters: '1. Password must contain ONLY the following characters: uppercase, lowercase, numerics.',
      requiredPasswordLength: '2. Password must be at least 8 characters in length and not more than 32 characters in length.',
    },
    defaultMessage: 'Invalid registration information.',
  },
  login: {
    incorrectLoginInformation: 'Login information was incorrect.',
    loginError: 'An error has occurred while trying to log in.',
  },
};
