const Book = require("../model/Book");
const router = require("express").Router();

router.get("/", (req, res) => {
  Book.find().exec((error, docs) => {
    if (error) return res.status(400).json({ success: false, error });
    else {
      return res.status(200).json({
        success: true,
        response: {
          counts: docs.length,
          data: docs,
        },
      });
    }
  });
});

module.exports = router;
