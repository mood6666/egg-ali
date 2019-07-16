'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.resources('posts', '/api/posts', controller.home);

  router.get('/login', controller.login.login);
  router.get('/logout', controller.login.logout );
  router.get('/sign', controller.login.sign );
  router.post('/auth', app.passport.authenticate('local', { successRedirect: '/api/posts',failureRedirect: '/login', }))
};
