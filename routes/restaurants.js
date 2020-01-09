const express = require('express');
const router = express.Router();

//Create
router.post('/', (req, res) => {
  res.json({ msg: 'Create new restaurant' });
});

//Read
router.get('/', (req, res) => {
  res.json({ msg: 'Show all restaurants' });
});

//Update
router.put('/:id', (req, res) => {
  res.json({ msg: 'Update restaurant' });
});

//Delete
router.delete('/:id', (req, res) => {
  res.json({ msg: 'Delete update' });
});

module.exports = router;
