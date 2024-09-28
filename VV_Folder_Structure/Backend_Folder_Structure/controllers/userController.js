const { ERRORS } = require("../constants");
const User = require("../models/userModel");

const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: ERRORS.USER_NOT_FOUND });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: ERRORS.SERVER_ERROR });
  }
};

module.exports = {
  getUser,
};
