const userRepository = require("../repositories/userRepository");

const createUserAndInfo = async (user, userInfo) => {
  const newUser = await userRepository.createUser(user);
  const newUserInfo = await userRepository.createUserInfo({
    ...userInfo,
    userId: newUser.id,
  });
  return { newUser, newUserInfo };
};

module.exports = {
  createUserAndInfo,
};
