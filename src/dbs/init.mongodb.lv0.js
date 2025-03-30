"use strict";

import mongoose from "mongoose";

const connectString =
  process.env.MONGODB_URI || "mongodb://localhost:27017/shopDev";

mongoose
  .connect(connectString)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

if (1 === 0) {
  mongoose.set("debug", true);
  mongoose.set("debug", {
    color: true,
  });
}

export default mongoose;
