angular.module('serverUser', ['ngResource']).factory(
    'factoryUser',
    function ($http) {
        return {
            login: function (params, callback) { $http.post('/user/login', params).then(function (resultsets) { callback(resultsets); }, function (err) { console.log(err); }) },
            newUser: function (params, callback) {$http.post('/user/new', params).then(function (resultsets) { callback(resultsets); }, function (err) { console.log(err); }) },
            list: function (params, callback) { $http.post('/user/list', params).then(function (resultsets) { callback(resultsets); }, function (err) { console.log(err); })}
            };
    }).factory(
    'factoryLevel',
    function ($http) {
        return {
            getLevelUser: function (callback) { $http.get('/level').then(function (resultsets) { callback(resultsets); }, function (err) { console.log(err); }) }
        };
    }
);
