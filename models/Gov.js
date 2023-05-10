import mongoose from "mongoose";
const GovSchema = new mongoose.Schema(
  {
    GovId: { type: String, required: true },
    name: { type: String, default: "Edu" },
  },
  { timestamps: true }
);
mongoose.models = {};
export default mongoose.model.Gov || mongoose.model("Gov", GovSchema);
