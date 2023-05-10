import Student from "../../models/Student";
import connectDB from "../../middleware/mongoose";
var CryptoJS = require("crypto-js");
var AES = require("crypto-js/aes");

const handler = async (req, res) => {
  if (req.method == "POST") {
    let { name, email, password, phone, aadhar } = req.body;
    let u = new Student({
      name,
      email,
      phone,
      aadhar,
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
