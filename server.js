const express = require("express");
const app = express();
const port = process.env.PORT || 4040;
const mongoose = require("mongoose");
const os = require("os");
const books = require("./api/books");
require("dotenv").config();

mongoose.connect(`mongodb://db:27017/books`,
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

app.use("/books", books);

app.listen(port, () =>
  console.log(`Listening on ${os.platform()} server on port ${port}`)
);
