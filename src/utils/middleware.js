const UserModel = require("../app/user/user.model");
const common = require("./common");

exports.checkToken = async (req, res, next) => {
  let token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: "Unauthorized!" });
  }
  token = token.replace("Bearer ", "").replace(/"/g, "");

  let userId = common.getUserId(token);

  let user = await UserModel.findOne({ _id: userId }).select("_id").lean();
  if (!user) {
    return res.status(401).json({ message: "UnAuthenticated!" });
  }
  req.userId = user._id;

  next();
};
