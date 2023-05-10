import Institute from "../../models/Institute";
import connectDB from "../../middleware/mongoose";
var CryptoJS = require("crypto-js");
var AES = require("crypto-js/aes");
var jwt = require("jsonwebtoken");

const handler = async (req, res) => {
  if (req.method == "POST") {
    let user = await Institute.findOne({ uid: req.body.InstId });
    if (user) {
      let bytes = CryptoJS.AES.decrypt(user.password, process.env.AES_SECRET);
      let orgpass = bytes.toString(CryptoJS.enc.Utf8);
      console.log(orgpass);
      if (req.body.InstId == user.uid && orgpass == req.body.password) {
        var token = jwt.sign(
          { uid: user.uid, name: user.name, roles: { editor: 2 } },
          process.env.JWT_SECRET
        );
        res.status(200).json({ success: true, token, name: user.name });
      } else {
        res.status(200).json({ success: false, error: "Invalid Credentials" });
      }
    } else {
      res.status(200).json({ success: "false", error: "No user found" });
    }
  } else {
    res.status(400).json({ error: "Invalid Method" });
  }
};

export default connectDB(handler);
