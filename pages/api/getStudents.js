import Student from "../../models/Student";
import connectDB from "../../middleware/mongoose";
import jsonwebtoken from "jsonwebtoken";
const handler = async (req, res) => {
  if (req.method == "POST") {
    let jwt = req.body.token;
    let usrtoken = jsonwebtoken.verify(jwt, process.env.JWT_SECRET);
    let students = await Student.findOne({ email: usrtoken.email });

    res.status(200).json({ name, email, aadhar, phone });
  } else {
    res.status(400).json({ error: "error" });
  }
};
export default connectDB(handler);
