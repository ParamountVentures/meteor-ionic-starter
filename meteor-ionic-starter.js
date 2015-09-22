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

  app.controller('TestController', function() {
    this.message = 'Hello from the Angular Controller';
  });
}