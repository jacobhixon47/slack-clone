angular.module('dopeSlack')
  .factory('Auth', function($firebaseAuth) {
    var auth = $firebaseAuth();

    return auth;
  });
