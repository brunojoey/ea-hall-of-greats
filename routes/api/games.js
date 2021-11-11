const router = require('express').Router();
const gamesController = require('../../controllers/gamesController');

// Matches with '/api/games'
router.route('/')
  .get(gamesController.findAll);

// Matches with '/api/games/:id'
router.route('/:id')
  .get(gamesController.findById);

module.exports = router;
