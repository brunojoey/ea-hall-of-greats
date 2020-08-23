const router = require('express').Router();
const allyRoutes = require('./allies');
const gameRoutes = require('./games');
const imageRoute = require('./images');

// Catch games and allies routes.
router.use('/allies', allyRoutes);
router.use('/games', gameRoutes);
router.use('/images', imageRoute);

module.exports = router;
