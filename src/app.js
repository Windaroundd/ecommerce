import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import compression from "compression";
import { checkOverload, countConnect } from "./helpers/check.connect.js";

const app = express();

// init middlewares
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());
app.use(express.json());

// init db
import "./dbs/init.mongodb.js";
checkOverload();

// init routes

app.get("/", (req, res, next) => {
  return res.status(200).json({
    message: "Hello World",
  });
});

// handle error

export default app;
