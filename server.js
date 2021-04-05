const express = require("express");
const app = express();
const port = process.env.PORT || 4040;
const os = require("os");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", express.static(__dirname));

app.get("/api", (req, res) => {
  res.status(200).json({
    message: "Connect",
  });
});

app.listen(port, () =>
  console.log(`Listening on ${os.platform()} server on port ${port}`)
);
