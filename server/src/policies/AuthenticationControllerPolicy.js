const Joi = require('joi');
const { registration } = require('./../constants/constants');

module.exports = {
  register(req, res, next) {
    const schema = {
      email: Joi.string().email(),
      password: Joi.string().regex(new RegExp('^[a-zA-Z0-9]{8,32}$')),
    };
    const { error } = Joi.validate(req.body, schema);
    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: registration.badEmailAddress,
          });
          break;
        case 'password':
          res.status(400).send({
            error: `${registration.password.badPassword}
            <br>
            ${registration.password.requiredPasswordCharacters}
            <br>
            ${registration.password.requiredPasswordLength}
            `,
          });
          break;
        default:
          res.status(400).send({
            error: registration.defaultMessage,
          });
          break;
      }
    } else {
      next();
    }
  },
};
