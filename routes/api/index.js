const router = require('express').Router();
const gameRoutes = require('./games');

// Catch games routes.
router.use('/games', gameRoutes);

module.exports = router;
