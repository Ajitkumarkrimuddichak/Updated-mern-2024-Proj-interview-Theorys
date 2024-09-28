import express from "express";
const app = express();

import connectDB from "./db/connectdb.js";
import web from "./routes/web.js";
import cors from "cors";
app.use(cors());

import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT || "8000";
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017";

//Database connection Call
connectDB(DATABASE_URL);

//JSON
app.use(express.json());

//Load Routes
app.use("/api", web);

app.get("/", function (req, res) {
  res.send("Hello World ");
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
