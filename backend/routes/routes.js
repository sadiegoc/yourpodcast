const { upload } = require('../middlewares/upload')
const express = require('express')

module.exports = app => {
    app.use('/images/profile', express.static('../storage/profiles/imgs/'))

    app.post('/signup', app.controllers.userController.save)
    app.post('/signin', app.controllers.auth.signin)
    app.post('/validateToken', app.controllers.auth.validateToken)

    app.route('/users')
        .get(app.controllers.userController.get)
        .post(app.controllers.userController.save)

    app.route('/podcasts')
        .post(
            app.middlewares.passport.authenticate(),
            upload.fields([{ name: 'mediaFile' }, { name: 'imageFile' }]),
            app.controllers.podcastsController.save
        )
        .get(app.controllers.podcastsController.get)
    
    app.route('/podcasts/:id')
        .all(app.middlewares.passport.authenticate())
        .put(app.controllers.podcastsController.update)
        .delete(app.controllers.podcastsController.remove)
}