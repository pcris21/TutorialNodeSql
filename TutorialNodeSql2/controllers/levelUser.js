module.exports = function (app) {
    var LevelUser = {
        getLevelUser: function (req, res) {
            debugger;
            var repository = require('../repository/repository');

            req.body = 'GetLevelUser';

            repository.execProcedureQuery(req, res, null, function (resultsets) {
                console.log(resultsets);
                res.json(resultsets);
            });
        }
    }
    return LevelUser
}