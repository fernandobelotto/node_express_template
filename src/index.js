import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import db from "./configuration/database";
import dotenv from "dotenv";

import router from "./routes";

dotenv.config();

const app = express();

const { PORT } = process.env;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/user", router);

async function connectDatabase() {
  try {
    await db.authenticate();
    console.log("Database connected...");
  } catch (err) {
    console.log("Error: " + err);
  }
}
async function startServer() {
    try {
      await db.sync();
      app.listen(PORT, console.log(`Server started at http://localhost:${PORT}`));
    } catch (err) {
      console.log("Error: " + err);
    }
  }  

connectDatabase();
startServer()