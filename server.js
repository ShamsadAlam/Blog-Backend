const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDatabase = require("./config/database");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

const blogs = require("./routes/BlogRoutes");
const user = require("./routes/userRoutes");

app.use("/api/blog", user);
app.use("/api/blogs", blogs);

//Connecting to database
connectDatabase();

const port = process.env.PORT || 5000;
app.listen(port, () =>
  console.log("> Server is up and running on port : " + port)
);
