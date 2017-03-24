var app = angular.module('TutorialNodeSql2', ['serverUser','ngRoute']);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    debugger;

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

    $routeProvider
        .when('/user/login',{ templateUrl: '/partials/user/login.html', controller: 'userCtrl' })
        .when('/user/new', { templateUrl: '/partials/user/new.html', controller: 'userCtrl' })
        .when('/user/list', { templateUrl: '/partials/user/list.html', controller: 'userCtrl' })
        .otherwise({ redirectTo: '/user' });
}]);