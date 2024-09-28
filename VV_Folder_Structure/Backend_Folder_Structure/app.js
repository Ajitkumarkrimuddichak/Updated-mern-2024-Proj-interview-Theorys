const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const userRoutes = require("./routes/userRoutes");
const { SETTINGS } = require("./constants");
const logger = require("./utils/logger");

const app = express();
const port = SETTINGS.PORT;

// Updated MongoDB connection without deprecated options
mongoose
  .connect(SETTINGS.DB_URI)
  .then(() => {
    logger.log("Connected to the database");
  })
  .catch((err) => {
    logger.error("Database connection error: " + err.message);
  });

app.use(express.json());
app.use("/api", userRoutes);

app.listen(port, () => {
  logger.log(`Server is running on port ${port}`);
});
