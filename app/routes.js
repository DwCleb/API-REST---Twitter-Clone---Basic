const express = require('express');
const requireDir = require('require-dir');

const routes = express.Router();

const authMiddleware = require('./middlewares/auth');

const controllers = requireDir('./controllers');

/**
 * Auth
 */
routes.post('/signup', controllers.authController.signup);
routes.post('/signin', controllers.authController.signin);

/**
 * Auth Routes
 */
routes.use(authMiddleware);

routes.get('/tweet', (req, res) => {
  res.send('OK');
});

/**
 * Tweet Routes
 */
routes.post('/tweets', controllers.tweetController.create);
routes.delete('/tweets/:id', controllers.tweetController.destroy);

/**
 * Users
 */
routes.put('/users', controllers.userController.update);

/**
 * Likes
 */
routes.post('/like/:id', controllers.likeController.toggle);

/**
 * Follow
 */
routes.post('/follow/:id', controllers.followController.follow);

module.exports = routes;
