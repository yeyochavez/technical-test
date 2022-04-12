require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const studenRoutes = require("./routes/student");
const authRoutes = require("./routes/auth");
var cors = require('cors');

const app = express();
const port = process.env.PORT || 9001;

var corsOptions = {
  origin: '*', 
  optionsSuccessStatus: 200
}
app.use(cors(corsOptions));

// capture body
app.use(express.json());

// middelware
app.use("/api", studenRoutes);
app.use("/api", authRoutes);

//mongoDB connections
const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.lo2nk.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;
mongoose
  .connect(uri)
  .then(() => console.log("connected to MongoDB Atlas"))
  .catch((error) => console.error(error));

app.listen(port, () => console.log("server listening on port", port));
