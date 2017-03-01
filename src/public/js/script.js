(function(angular) {
  'use strict';
angular.module('beanApp', ['ngRoute', 'ngAnimate'])
  .config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/home.html',
          controller: 'HomeCtrl',
          controllerAs: 'home'
        })
        .when('/about', {
          templateUrl: 'views/about.html',
          controller: 'AboutCtrl',
          controllerAs: 'about'
        })
        .when('/search', {
          templateUrl: 'views/search-main.html',
          controller: 'SearchCtrl',
          controllerAs: 'search'
        })
        .when('/search/:type', {
          templateUrl: 'views/search.html',
          controller: 'SearchCtrl',
          controllerAs: 'search'
        })
        .when('/search/:type/:query', {
          templateUrl: 'views/search.html',
          controller: 'SearchCtrl',
          controllerAs: 'search'
        });

      $locationProvider.html5Mode(true);
  }])
  .controller('MainCtrl', ['$route', '$routeParams', '$location',
    function($route, $routeParams, $location) {
      this.$route = $route;
      this.$location = $location;
      this.$routeParams = $routeParams;
  }])
  .controller('HomeCtrl', ['$routeParams', function($routeParams) {
    this.name = "HomeCtrl";
    this.params = $routeParams;
    this.tagline = "This is the index page";
  }])
  .controller('SearchCtrl', ['$routeParams', function($routeParams) {
    this.name = "SearchCtrl";
    this.params = $routeParams;
    this.tagline = "Find stuff here";
  }])
  .controller('AboutCtrl', ['$routeParams', function($routeParams) {
    this.name = "AboutCtrl";
    this.params = $routeParams;
    this.tagline = "Stuff about me";
  }]).directive('header', function() {
    return {
      restrict: 'A',
      templateUrl: 'views/header.html'
    }
  }).directive('footer', function() {
    return {
      restrict: 'A',
      templateUrl: 'views/footer.html'
    }
  }).directive('content', function() {
    return {
      restrict: 'A',
      templateUrl: 'views/content.html'
    }
 });

})(window.angular);