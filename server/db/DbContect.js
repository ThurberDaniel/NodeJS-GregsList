import ValueSchema from "../models/Value";
import mongoose from "mongoose";

class DbContect {
  Cars = mongoose.model("Car", ValueSchema);
  Houses = mongoose.model("House", ValueSchema);
  Jobs = mongoose.model("Job", ValueSchema);

}

export const dbContect = new DbContect();
