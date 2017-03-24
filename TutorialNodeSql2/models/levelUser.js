var level = function () {
    this.LevelId = null;
    this.LevelName = null;
}

module.exports = function () {
    var Level = {
        newLevel: function () {
            var _level = new level();
            return _level;
        }
    }
    return Level;
}