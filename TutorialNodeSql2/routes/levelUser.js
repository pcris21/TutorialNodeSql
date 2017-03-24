module.exports = function (app) {
    var level = app.controllers.levelUser;
    app.get('/level', level.getLevelUser);
}