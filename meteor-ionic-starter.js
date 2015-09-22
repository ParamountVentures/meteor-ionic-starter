if (Meteor.isClient) {
 var app = angular.module('starter', [
     'angular-meteor',
     'ionic'
   ]
 );

  function onReady() {
    angular.bootstrap(document, ['starter']);
    console.log('Ready');
  }

  // the web and cordova fire different events for readiness
  if (Meteor.isCordova) {
    console.log('Preparing Cordova');
    angular.element(document).on('deviceready', onReady);
  } else {
    console.log('Preparing Web');
    angular.element(document).ready(onReady);
  }
}