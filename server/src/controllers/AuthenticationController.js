const { User } = require('../models');
const { registration, login } = require('./../constants/constants');

module.exports = {
  async register(req, res) {
    try {
      const user = await User.create(req.body);
      res.send(user.toJSON());
    } catch (error) {
      res.status(400).send({
        error: registration.emailAddressAlreadyUsed,
      });
    }
  },
  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({
        where: {
          email,
        },
      });
      if (!user) {
        return res.status(403).send({
          error: login.incorrectLoginInformation,
        });
      }
      const isPasswordValid = password === user.password;
      if (!isPasswordValid) {
        return res.status(403).send({
          error: login.incorrectLoginInformation,
        });
      }
      res.send({
        user: user.toJSON(),
      });
    } catch (error) {
      res.status(500).send({
        error: login.loginError,
      });
    }
    return null;
  },
};
