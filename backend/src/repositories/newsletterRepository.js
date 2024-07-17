const prisma = require("../configs/prisma");

const getUsersSubscribedToNewsletter = async () => {
  return await prisma.user.findMany({
    where: {
      newsletter: true,
    },
  });
};

module.exports = {
  getUsersSubscribedToNewsletter,
};
