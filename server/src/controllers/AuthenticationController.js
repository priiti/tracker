const jwt = require('jsonwebtoken');
const { User } = require('../models');
const { registration, login, timestamp } = require('./../enums/user');
const AuthenticationControllerPolicy = require('./../policies/AuthenticationControllerPolicy.js');
const config = require('./../config/config');

const jwtSignUser = (user) => {
  const token = jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: timestamp.ONE_WEEK,
  });
  return token;
};

exports.register = async (req, res) => {
  try {
    const registrationData = {
      email: req.body.email,
      password: req.body.password,
    };
    registrationData.password = await AuthenticationControllerPolicy
      .cryptUserPassword(registrationData.password);
    const user = await User.create(registrationData);
    if (!user) {
      throw new Error();
    }
    res.send({
      message: registration.SUCCESS_MESSAGE,
    });
  } catch (error) {
    res.status(400).send({
      error: registration.EMAIL_ADDRESS_IN_USE,
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({
      where: {
        email,
      },
    });
    if (!user) {
      return res.status(403).send({
        error: login.INCORRECT_LOGIN_INFORMATION,
      });
    }
    const isPasswordValid = await AuthenticationControllerPolicy.checkUserPassword(user, password);
    if (!isPasswordValid) {
      return res.status(403).send({
        error: login.INCORRECT_LOGIN_INFORMATION,
      });
    }
    const userJson = user.toJSON();
    const token = jwtSignUser(userJson);
    res.send({
      user: userJson,
      token,
    });
  } catch (error) {
    res.status(500).send({
      error: login.LOGIN_ERROR,
    });
  }
  return null;
};
