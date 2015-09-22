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

  app.controller('TestController', function($scope) {
      $scope.message = 'Hello from the Angular Controller';

      $scope.changeText = function() {
        this.message = 'New Message from the Angular Controller';
      }
  });
}