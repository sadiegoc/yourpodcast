const { uploadProfilePicture } = require('../middlewares/uploadProfilePicture')
const { uploadPodcast } = require('../middlewares/uploadPodcast')

module.exports = app => {
    app.post('/signup', app.controllers.userController.save)
    app.post('/signin', app.controllers.auth.signin)
    app.post('/validateToken', app.controllers.auth.validateToken)

    app.route('/user/:id')
        .patch(
            app.middlewares.passport.authenticate(),
            uploadProfilePicture.single('profilePicture'),
            app.controllers.userController.update
        )

    app.route('/upload/podcast')
        .post(
            app.middlewares.passport.authenticate(),
            uploadPodcast.fields(['podcastMedia', 'thumbnailImage']),
            app.controllers.podcastsController.save
        )

    // app.route('/podcasts/:id')
    //     .all(app.middlewares.passport.authenticate())
    //     .put(app.controllers.podcastsController.update)
    //     .delete(app.controllers.podcastsController.remove)

    // app.route('/upload/img/thumbnail')
    //     .post(
    //         app.middlewares.passport.authenticate(),
    //         uploadThumbnail.single('thumbnailImage'),
    //         app.controllers.podcastsController.save
    //     )
    //     .get(app.controllers.podcastsController.get)
}