module.exports = function (app) {
    var user = app.controllers.user;
    app.get('/user', user.index);
    app.post('/user/login', user.validateLogin);
    app.post('/user/new', user.newUser);
    app.post('/user/list', user.users);
}