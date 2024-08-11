module.exports = app => {
    app.route('/users')
        // .get(app.app.controllers.user.get)
        .post(app.app.controllers.user.save)

    // app.route('/users/:id')
    //     .get(app.app.controllers.user.getById)
    //     .put(app.app.controllers.user.save)
    //     .delete(app.app.controllers.user.remove)
}