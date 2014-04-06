var app = angular.module('scotchTodo', []);

app.controller('LoginCtrl', function($scope) {
  $scope.name = 'World';

  $scope.myusers = [{
    username: 'admin',
    password: 'admin'
  }, {
    username: 'user2',
    password: '12323'
  }];
  $scope.submit = function() {
    if ($scope.username && $scope.password) {
      var user = $scope.username;
      var pass = $scope.password;

      $scope.myusers.push({
        username: user,
        password: pass
      });
      
      /*$location.path('/index.html');*/
      $window.location.href = '/index.html';
      
    } else {
      alert("Invalid Login");
    }
  }
});