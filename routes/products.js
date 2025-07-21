const express = require('express');
const router = express.Router();

// GET
router.get('/', (req, res) => {
  res.json({ message: "This is the GET product path" });
});

// POST
router.post('/', (req, res) => {
  res.json({ message: "This is the POST product path and a product was added" });
});

// PUT
router.put('/', (req, res) => {
  res.json({ message: "This is the PUT product path and a product was replaced" });
});

// PATCH
router.patch('/', (req, res) => {
  res.json({ message: "This is the PATCH product path and a product was updated" });
});

// DELETE
router.delete('/', (req, res) => {
  res.json({ message: "This is the DELETE product path and a product was deleted" });
});

module.exports = router;
