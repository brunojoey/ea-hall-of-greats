const router = require('express').Router();
const gamesController = require('../../controllers/gamesController');

// Matches with '/api/users'
router.route('/')
  .get(gamesController.findAll)

// Matches with '/api/users/:id'
router.route('/:id')
  .get(gamesController.findById)

  module.exports = router;
