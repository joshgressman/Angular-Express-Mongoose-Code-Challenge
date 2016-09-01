var heroTracker = angular.module('heroTracker', ['ngRoute']);

heroTracker.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/add', {
            templateUrl: '/views/templates/heroview.html',
            controller: 'AddHeroController'
        })
        .when('/config', {
            templateUrl: '/views/templates/configview.html',
            controller: 'DisplayHeroController'
        })
        .otherwise({
            redirectTo: '/play'
        });
}]);
