const router = require('express').Router();
const alliesController = require('../../controllers/alliesController');

// Matches with '/api/allies'
router.route('/')
  .get(alliesController.findAll)

// Matches with '/api/allies/:id'
router.route('/:id')
  .get(alliesController.findById)

  module.exports = router;
