app.controller('userCtrl', ['$scope', '$location', 'factoryUser', 'factoryLevel', function ($scope, $location, factoryUser, factoryLevel) {

    $scope.Load = function () {
        factoryLevel.getLevelUser(function (resultsets) {
            debugger;
            console.log(resultsets);
            if (resultsets.data[0]) {
                var length = resultsets.data[0].length;
                var array = resultsets.data[0];
                var arrayLevel = [];
                arrayLevel.push({ LevelId: 0, LevelName: 'select'});
                for (var i = 0; i < length; i++){
                    arrayLevel.push(array[i]);
                }

                $scope.arrayLevel = arrayLevel;
            }
        });
    }

    $scope.selectItem = function (event, element) {
        debugger;
        $scope.UserLevel;
    }

    $scope.IsEmail = function () {

    }

    $scope.validateLogin = function () {
        var login = {}
        login.UserEmail = $scope.UserEmail;
        login.UserPassword = $scope.UserPassword;

        if (login.UserEmail === '' || login.UserPassword === '') {
            $scope.mensagem = 'Campos obrigatórios!';
        }
        else {
            var result = null;
            factoryUser.login(login, function (resultsets) {
                debugger;
                result = resultsets;
                if (null != resultsets.data[0]) {
                    $location.path('/user/new');
                }
            });

            console.log(result);
        }
    };

    $scope.newUser = function () {
        var user = {};

        user.UserId = $scope.UserId;
        user.UserName = $scope.UserName;
        user.UserEmail = $scope.UserEmail;
        user.UserPassword = $scope.UserPassword;
        user.UserLevel = $scope.UserLevel;
        user.UserStatus = $scope.UserStatus;

        var result = null;

        factoryUser.newUser(user, function (resultsets) {
            debugger;
            result = resultsets;
            $scope.mensagem = resultsets.data.name + ':' + resultsets.data.value;
        });

        console.log(result);
    };

    $scope.cancelar = function () {

    }

    var user = function () {
        this.UserId = null;
        this.UserName = null;
        this.UserEmail = null;
        this.UserPassword = null;
        this.UserLevel = null;
        this.UserStatus = null;
    }

    $scope.listUsers = function () {
        debugger;
        var filter = {};
        filter.Start = 0;
        filter.End = 10;

        var listUser = [];

        factoryUser.list(filter, function (resultsets) {
            debugger;
            var length = resultsets.data[0].length;
            var array = resultsets.data[0];
            for (var i = 0; i < length; i++) {
                var _user = new user();
                _user.UserId = array[i].UserId;
                _user.UserName = array[i].UserName;
                _user.UserEmail = array[i].UserEmail;
                _user.UserLevel = array[i].LevelName;
                _user.UserStatus = array[i].UserStatus === null ? 'Ativo' : 'Desativado';
                listUser.push(_user);
            }

            $scope.listUser = listUser;

        });

    };

    $scope.getLevelUser = function () {

        var result = null;
        factoryLevel.getLevelUser(function (resultsets) {
            debugger;
            result = resultsets;
        });

        console.log(result);
    };

}]);