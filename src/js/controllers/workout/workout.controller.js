angular
.module('gymApp')
.controller('MyController', function($scope) {
  $scope.myData = {};
  $scope.myData.friends = [{ name: 'Al',age: 26}, { name: 'Mike',age: 21}, { name: 'Brian',age: 46} ];

  $scope.myData.doClick = function(friend) {
    $scope.currentAge = friend.age;
  };
} );
