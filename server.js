const express = require("express");
const app = express();
const port = process.env.PORT || 80;
const os = require("os");
require("dotenv").config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/compute", (req, res) => {
  res.status(200).json({ message: "Compute time" });
});

app.post("/compute", (req, res) => {
  let a = req.body.first_number;
  let b = req.body.second_number;

  return res
    .status(200)
    .json({ success: true, result: parseInt(a) + parseInt(b) });
});

app.listen(
  port,
  () => console.log`Listening on + ${os.platform()} server on port ${port}`
);
