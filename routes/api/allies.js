const router = require('express').Router();
const alliesController = require('../../controllers/alliesController');

// Matches with '/api/users'
router.route('/')
  .get(alliesController.findAll)

// Matches with '/api/users/:id'
router.route('/:id')
  .get(alliesController.findById)

  module.exports = router;
