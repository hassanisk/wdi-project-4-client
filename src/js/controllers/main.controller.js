angular
.module('gymApp')
.controller('MainCtrl', MainCtrl);


MainCtrl.$inject = ['$rootScope','CurrentUserService','$state','$scope', 'filterFilter', 'Exercise'];
function MainCtrl($rootScope,CurrentUserService,$state, $scope, filterFilter, Exercise) {
  const vm  = this;
  vm.all    = Exercise.query();
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

  function filterExercises() {
    vm.final       = [];
    var randomItem = [] ;
    var randomIndex;
    var item;
    const params   = { name: vm.q };
    if (vm.useLevel) params.level       = vm.level;
    params.bodypart = vm.bodypart;
    vm.filtered    = filterFilter(vm.all, params);

    if (vm.level === 1 ) {
      // console.log(vm.filtered);
      for(var e = 0; e < 3; e++) {
        randomIndex = Math.floor(Math.random() * vm.filtered.length);
        item        = vm.filtered.splice(randomIndex, 1);
        randomItem  = item[0];
        vm.final.push(randomItem);
        console.log(vm.final);
      }
    } else if (vm.level === 2 ) {
      for(var m = 0; m < 4; m++){
        randomIndex = Math.floor(Math.random() * vm.filtered.length);
        item        = vm.filtered.splice(randomIndex, 1);
        randomItem  = item[0];
        vm.final.push(randomItem);
      }
    } else if (vm.level === 3 ) {
      for(var h = 0; h < 5; h++){
        randomIndex = Math.floor(Math.random() * vm.filtered.length);
        item        = vm.filtered.splice(randomIndex, 1);
        randomItem  = item[0];
        vm.final.push(randomItem);
      }
    } else  {
      for(var s = 0; s < 6; s++){
        randomIndex = Math.floor(Math.random() * vm.filtered.length);
        item        = vm.filtered.splice(randomIndex, 1);
        randomItem  = item[0];
        vm.final.push(randomItem);
        console.log(vm.final);
      }
    }
  }
}
