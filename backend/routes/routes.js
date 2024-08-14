const { upload } = require('../middlewares/upload')

module.exports = app => {
    app.route('/users')
        .get(app.controllers.userController.get)
        .post(app.controllers.userController.save)

    app.route('/users/:id')
        .put(app.controllers.userController.save)
        .get(app.controllers.userController.getById)
    //     .delete(app.app.controllers.user.remove)

    app.route('/upload')
        .post(upload.fields([
            { name: 'mediaFile' },
            { name: 'imageFile' }
        ]),
        app.controllers.podcastsController.save)
}