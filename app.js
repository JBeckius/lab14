var app = angular.module('router', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    // .when('/', {
    //   templateUrl: 'views/home.html',
    //   controller: 'routeController'
    // })
    .when('/view1', {
      templateUrl: 'views/view1.html',
      controller: 'routeController'
    })
    .when('/view2', {
      templateUrl: 'views/view2.html',
      controller: 'routeController'
    })
    .when('/view3', {
      templateUrl: 'views/view3.html',
      controller:'routeController'
    })
    .when('/view4', {
      templateUrl: 'views/view4.html',
      controller:'routeController'
    })
    .otherwise('/');
}]);
