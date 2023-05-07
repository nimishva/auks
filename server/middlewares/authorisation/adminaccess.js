const expressAsyncHandler = require("express-async-handler")
const User = require("../../models/userModel")

const accessAuthorisation = expressAsyncHandler(async (req, res, next) => {

  let user = req.user

  const userData = await User.findOne({ _id: user.id }).populate('role');
  // console.log('from acc auth', userData);

  const roleName = userData.role.name
  console.log(roleName);

  if (roleName !== "admin") {

    res.status(403);
    throw new Error('User is not authorised');

  }
  next()
});



module.exports = accessAuthorisation;