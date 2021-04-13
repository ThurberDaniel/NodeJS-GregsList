import mongoose from "mongoose";
const Schema = mongoose.Schema;



const Job = new Schema(
  {
    title: { type: String, required: true },
    wage: { type: Number, required: true },
    description: { type: String, minLength: 3 }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Job;