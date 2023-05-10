import mongoose from "mongoose";
const StudentSchema = new mongoose.Schema(
  {
    name: { type: String, default: "" },
    email: { type: String, required: true, unique: true },
    phone: { type: Number, required: true },
    password: { type: String, required: true },
    aadhar: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);
mongoose.models = {};
export default mongoose.model.Student ||
  mongoose.model("Student", StudentSchema);
