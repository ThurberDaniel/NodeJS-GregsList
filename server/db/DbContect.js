import mongoose from "mongoose";
import CarSchema from "../models/Car";
import JobSchema from "../models/Job";
import HouseSchema from "../models/House";


class DbContect {
  Cars = mongoose.model("Car", CarSchema);
  Houses = mongoose.model("House", HouseSchema);
  Jobs = mongoose.model("Job", JobSchema);

}

export const dbContect = new DbContect();
