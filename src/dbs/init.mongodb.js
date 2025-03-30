"use strict";

import mongoose from "mongoose";
import { countConnect } from "../helpers/check.connect.js";

const connectString =
  process.env.MONGODB_URI || "mongodb://localhost:27017/shopDev";

class Database {
  constructor() {
    this.connect();
  }

  connect(type = "mongodb") {
    if (1 === 1) {
      mongoose.set("debug", true);
      mongoose.set("debug", {
        color: true,
      });
    }
    mongoose
      .connect(connectString)
      .then(() => {
        console.log("MongoDB connected", countConnect());
      })
      .catch((err) => {
        console.error("MongoDB connection error:", err);
      });
  }
  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }
}
const instanceMongodb = Database.getInstance();

export default instanceMongodb;
