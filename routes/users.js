const express = require('express');
const router = express.Router();

// GET
router.get('/', (req, res) => {
  res.json({ message: "This is the GET user path" });
});

// POST
router.post('/', (req, res) => {
  res.json({ message: "This is the POST user path and a user was added" });
});

// PUT
router.put('/', (req, res) => {
  res.json({ message: "This is the PUT user path and a user was replaced" });
});

// PATCH
router.patch('/', (req, res) => {
  res.json({ message: "This is the PATCH user path and a user was updated" });
});

// DELETE
router.delete('/', (req, res) => {
  res.json({ message: "This is the DELETE user path and a user was deleted" });
});

module.exports = router;
