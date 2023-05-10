import Gov from "../../models/Gov";
import connectDB from "../../middleware/mongoose";
var CryptoJS = require("crypto-js");
var AES = require("crypto-js/aes");

const handler = async (req, res) => {
  if (req.method == "POST") {
    let { name, GovId } = req.body;
    let u = new Gov({
      GovId,
      name,
    });
    await u.save();
    res.status(200).json({ success: true });
  } else {
    res.status(400).json({ success: false, error: "Invalid Method" });
  }
};

export default connectDB(handler);
