angular
.module('gymApp')
.controller('MainCtrl', MainCtrl);


MainCtrl.$inject = ['$rootScope','CurrentUserService','$state','$scope', 'filterFilter', 'Exercise'];
function MainCtrl($rootScope,CurrentUserService,$state, $scope, filterFilter, Exercise) {
  const vm = this;
  vm.all = Exercise.query();
  $rootScope.$on('loggedIn', () => {
    vm.user = CurrentUserService.currentUser;
    // $state.go('tasksIndex'); //needs to be fixed
  });
  vm.logout = () => {
    CurrentUserService.removeUser();
  };
  $rootScope.$on('loggedOut', () => {
    vm.user = null;
    $state.go('login');
  });

  vm.filterExercises = filterExercises;

  // $scope.getRandomIndex = function(){
  //   var index = Math.floor(Math.random() * $scope.myData.exercises.length);
  //   console.log(index);
  //   $scope.item = $scope.myData.exercises[index];
  //   console.log($scope.item);
  //   console.log($scope.item.name);
  // };

  function filterExercises() {
    // vm.filtered = [];
    const params = { name: vm.q };
    if (vm.useLevel) params.level = vm.level;
    if (vm.useBodypart) params.bodypart       = vm.bodypart;
    vm.filtered = filterFilter(vm.all, params);
  }
  // $scope.$watchGroup([
  //   () => vm.q,
  //   () => vm.level,
  //   () => vm.useLevel,
  //   () => vm.bodypart,
  //   () => vm.useBodypart
  // ], filterExercises);

  // vm.filterExercises = filterExercises;
}
