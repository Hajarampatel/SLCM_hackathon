import mongoose from "mongoose";
const DocumentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    desc: { type: String, default: "" },
    uid: { type: String, required: true },
    certificateId: { type: String, required: true },
    issuedBy: { type: String, required: true },
    url: { type: String, required: true },
  },
  { timestamps: true }
);
mongoose.models = {};
export default mongoose.model.Document ||
  mongoose.model("Document", DocumentSchema);
