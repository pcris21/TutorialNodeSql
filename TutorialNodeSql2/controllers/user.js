module.exports = function (app) {
    var User = {
        index: function (req, res) {

            debugger;
            res.render('index', { title: 'Express' });
        },
        validateLogin: function (req, res) {
            debugger;
            var repository = require('../repository/repository');
            var parameter = require('../models/parameters');
            var arrayparameters = [];

            var _parm =  parameter();

            var UserEmail = _parm.newParameter();
            UserEmail.Name = 'UserEmail' //req.body.UserName;
            UserEmail.DataType = 'VarChar';
            UserEmail.Size = 200;
            UserEmail.Value = req.body.UserEmail;
            UserEmail.TypePut = 'input';

            arrayparameters.push(UserEmail);

            var UserPassword = _parm.newParameter();
            UserPassword.Name = 'UserPassword' //req.body.UserName;
            UserPassword.DataType = 'VarChar';
            UserPassword.Size = 10;
            UserPassword.Value = req.body.UserPassword;
            UserPassword.TypePut = 'input';

            arrayparameters.push(UserPassword);

            req.body = 'ValidateLogin';

            repository.execProcedureQuery(req, res, arrayparameters, function (resultsets) {
                console.log(resultsets);
                res.json(resultsets);
            })

        },
        newUser: function (req, res) {

            var repository = require('../repository/repository');
            var parameter = require('../models/parameters');
            var arrayparameters = [];

            var _parm = parameter();

            var UserId  = _parm.newParameter();
            UserId.Name = 'UserId' 
            UserId.DataType = 'BigInt';
            UserId.Value = 0;
            UserId.TypePut = 'output';

            arrayparameters.push(UserId);

            var UserName = _parm.newParameter();
            UserName.Name = 'UserName' //req.body.UserName;
            UserName.DataType = 'VarChar';
            UserName.Size = 200;
            UserName.Value = req.body.UserName;
            UserName.TypePut = 'input';

            arrayparameters.push(UserName);

            var UserEmail = _parm.newParameter();
            UserEmail.Name = 'UserEmail' //req.body.UserName;
            UserEmail.DataType = 'VarChar';
            UserEmail.Size = 10;
            UserEmail.Value = req.body.UserEmail;
            UserEmail.TypePut = 'input';

            arrayparameters.push(UserEmail);

            var UserPassword = _parm.newParameter();
            UserPassword.Name = 'UserPassword' //req.body.UserName;
            UserPassword.DataType = 'VarChar';
            UserPassword.Size = 10;
            UserPassword.Value = req.body.UserPassword;
            UserPassword.TypePut = 'input';

            arrayparameters.push(UserPassword);

            var UserLevel = _parm.newParameter();
            UserLevel.Name = 'UserLevelId' //req.body.UserName;
            UserLevel.DataType = 'BigInt';
            UserLevel.Size = 8;
            UserLevel.Value = req.body.UserLevel;
            UserLevel.TypePut = 'input';

            arrayparameters.push(UserLevel);

            req.body = 'NewUser';

            repository.execProcedureOutput(req, res, arrayparameters, 'UserId', function (status) {
                console.log(status);
                res.json(status);
            })

        },
        users: function (req, res) {
            var repository = require('../repository/repository');
            var parameter = require('../models/parameters');
            var arrayparameters = [];

            var _parm = parameter();

            var Start = _parm.newParameter();
            Start.Name = 'Start' //req.body.UserName;
            Start.DataType = 'Int';
            Start.Size = 200;
            Start.Value = req.body.Start;
            Start.TypePut = 'input';

            arrayparameters.push(Start);

            var End = _parm.newParameter();
            End.Name = 'End' //req.body.UserName;
            End.DataType = 'Int';
            End.Size = 200;
            End.Value = req.body.End;
            End.TypePut = 'input';

            arrayparameters.push(End);

            req.body = 'GetUsers';

            repository.execProcedureQuery(req, res, arrayparameters, function (resultsets) {
                debugger;
                console.log(resultsets);
                res.json(resultsets);
            });
        }
    }
    return User;
}