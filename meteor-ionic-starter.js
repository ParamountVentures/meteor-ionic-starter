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