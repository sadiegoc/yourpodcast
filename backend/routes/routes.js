module.exports = app => {
    app.route('/users')
        .get(app.controllers.user.get)
        .post(app.controllers.user.save)

    app.route('/users/:id')
        .put(app.controllers.user.save)
        .get(app.controllers.user.getById)
    //     .delete(app.app.controllers.user.remove)

    app.route('/upload')
        .post(app.controllers.podcasts.save)
}