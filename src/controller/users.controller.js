const model = require("../../models/user")

const createUser = async (req, res) => {
    try {
      const user = await model.User.create(req.body);
      return res.status(201).json({
        user
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };

  const getUserByEmail_Password = async (req, res) => {
    try {
      const { email } = req.params;
      const post = await models.Post.findOne({
        where: { email: email },
        where: {password: password}
      });
      if (user) {
        return res.status(200).json({ user });
      }
      return res.status(403).send("INFORMATIONS FAUSSES:" + req.params);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };

module.exports = {
    createUser,
    getUserByEmail_Password
}