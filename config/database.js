const mongoose = require("mongoose");
require("dotenv").config();

const connectDatabase = () => {
  mongoose.connect(process.env.DB_URI).then((data) => {
    console.log(`mongodb is connected with server: ${data.connection.host}`);
  });
};
module.exports = connectDatabase;
