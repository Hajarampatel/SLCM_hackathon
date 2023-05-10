import Gov from "../../models/Gov";
import connectDB from "../../middleware/mongoose";
var jwt = require("jsonwebtoken");

const handler = async (req, res) => {
  if (req.method == "POST") {
    let user = await Gov.findOne({ GovId: req.body.GovId });
    if (user) {
      var token = jwt.sign(
        { GovId: user.GovId, name: user.name, roles: { viewer: 1 } },
        process.env.JWT_SECRET
      );
      res.status(200).json({ success: true, token, GovId: user.GovId });
    } else {
      res.status(200).json({ success: false, error: "No user found" });
    }
  } else {
    res.status(400).json({ error: "Invalid Method" });
  }
};

export default connectDB(handler);
