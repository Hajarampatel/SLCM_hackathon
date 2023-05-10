import Institute from "../../models/Institute";
import connectDB from "../../middleware/mongoose";
var CryptoJS = require("crypto-js");
var AES = require("crypto-js/aes");

const handler = async (req, res) => {
  if (req.method == "POST") {
    let { name, InstId, password } = req.body;
    let u = new Institute({
      InstId,
      name,
      password: CryptoJS.AES.encrypt(
        req.body.password,
        process.env.AES_SECRET
      ).toString(),
    });
    await u.save();
    res.status(200).json({ success: true });
  } else {
    res.status(400).json({ success: false, error: "Invalid Method" });
  }
};

export default connectDB(handler);
