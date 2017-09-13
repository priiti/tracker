const Joi = require('joi');
const bcrypt = require('bcryptjs');
const { registration } = require('./../enums/user');

exports.register = async (req, res, next) => {
  const schema = {
    email: Joi.string().email(),
    password: Joi.string().regex(new RegExp('^[a-zA-Z0-9]{8,32}$')),
  };
  const { error } = Joi.validate(req.body, schema);
  if (error) {
    switch (error.details[0].context.key) {
      case 'email':
        res.status(400).send({
          error: registration.BAD_EMAIL_ADDRESS,
        });
        break;
      case 'password':
        res.status(400).send({
          error: `${registration.PASSWORD.BAD_PASSWORD}
            <br>
            ${registration.PASSWORD.REQUIRED_PASSWORD_CHARACTERS}
            <br>
            ${registration.PASSWORD.REQUIRED_PASSWORD_LENGTH}
            `,
        });
        break;
      default:
        res.status(400).send({
          error: registration.DEFAULT_REGISTRATION_MESSAGE,
        });
        break;
    }
  } else {
    next();
  }
};

exports.cryptUserPassword = async (password) => {
  try {
    const salt = await bcrypt.genSalt(registration.PASSWORD.PASSWORD_SALT);
    return await bcrypt.hash(password, salt);
  } catch (error) {
    throw new Error();
  }
};

exports.checkUserPassword = async (user, password) => {
  try {
    const data = await bcrypt.compare(password, user.password);
    if (!data) {
      throw new Error();
    }
    return data;
  } catch (error) {
    throw new Error();
  }
};
