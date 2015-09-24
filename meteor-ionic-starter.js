if (Meteor.isClient) {
 var app = angular.module('starter', [
     'angular-meteor',
     'ui.router',
     'ionic'
   ]
 );

  function onReady() {
    angular.bootstrap(document, ['starter']);
  }

  // the web and cordova fire different events for readiness
  if (Meteor.isCordova) {
    angular.element(document).on('deviceready', onReady);
  } else {
    angular.element(document).ready(onReady);
  }

  // route config
  app.config(function($urlRouterProvider, $stateProvider, $locationProvider){

    // avoid page refreshes on navigation
    $locationProvider.html5Mode(true);

    // map the urls to templates to load
     $stateProvider
       .state('index', {
         url: '/',
         templateUrl: 'index.ng.html'
       })
       .state('second', {
         url: '/second',
         templateUrl: 'second.ng.html'
       })

      // if nothing matches, back to home
      $urlRouterProvider.otherwise("/");
    });

  // controller config
  app.controller('TestController', function($scope, $meteor) {
      $scope.message = 'Hello from the Angular Controller';

      $scope.changeAngularText = function() {
        this.message = 'New Message from the Angular Controller';
      };

      $scope.changeMeteorText = function() {
        var self = this;
        $meteor.call('changeText').then(
          function (data) {
            self.message = data;
          },
          function (err) {
            console.log('error', err);
          }
        );
      };
  });
}

if (Meteor.isServer) {
  Meteor.methods({
    'changeText': function() {
      return 'New Message from the Meteor Controller';
    }
  });
}