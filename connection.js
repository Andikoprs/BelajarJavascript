const mongoose = require("mongoose");
const dotEnv = require("dotenv");

// set env variables
dotEnv.config();

//add database
const database = "mongodb://" + process.env.DB_HOST + "/" + process.env.DB_NAME;

// Connect the database
mongoose
  .connect(database)
  .then(() => {
    console.log("DB connection Successfully!");
  })
  .catch((error) => {
    console.log("error", error);
  });
