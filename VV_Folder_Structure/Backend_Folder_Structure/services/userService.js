const User = require("../models/userModel");

// Example service function
const findUserById = async (id) => {
  return await User.findById(id);
};

module.exports = {
  findUserById,
};
