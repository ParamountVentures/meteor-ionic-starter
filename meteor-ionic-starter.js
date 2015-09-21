if (Meteor.isClient) {
  var app = angular.module('start',
    [
      'angular-meteor',
      'ionic'
    ]
  );

  function onReady() {
    angular.bootstrap(document,['start']);
  }

  if (Meteor.isCordova) {
    angular.element(document).on('deviceready, onReady');
  } else {
    angular.element(document).ready(onReady);
  }
}