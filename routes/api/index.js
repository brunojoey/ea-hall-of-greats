const router = require('express').Router();
const allyRoutes = require('./allies');
const gameRoutes = require('./games');

// Catch games and allies routes.
router.use('/allies', allyRoutes);
router.use('/games', gameRoutes);

module.exports = router;