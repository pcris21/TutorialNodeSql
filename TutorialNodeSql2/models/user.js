var user = function () {
    this.UserId = null;
    this.UserName = null;
    this.UserEmail = null;
    this.UserPassword = null;
    this.UserLevel = null;
    this.UserStatus = null;
}

module.exports = function () {
    var User = {
        newUser: function () {
            var _user = new user();
            return _user;
        }
    }
    return User;
}