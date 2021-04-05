const express = require("express");
const app = express();
const port = process.env.PORT || 4040;
const mongoose = require("mongoose");
const os = require("os");
const books = require("./api/books");
require("dotenv").config();

mongoose.connect(
  os.platform() === "win32"
    ? `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@cluster0-4veva.gcp.mongodb.net/chatops?retryWrites=true&w=majority`
    : `mongodb://localhost:27017/chatops`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (error) => {
    if (error) console.log(error);
    console.log("Connect to database");
  }
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", express.static(__dirname));

app.get("/api", (req, res) => {
  res.status(200).json({
    message: "Connect",
  });
});
app.use("/books", books);

app.listen(port, () =>
  console.log(`Listening on ${os.platform()} server on port ${port}`)
);
