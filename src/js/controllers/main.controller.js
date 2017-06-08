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

  vm.biceps = function() {
    console.log('clicked');
    var bicep = document.getElementsByClassName('biLeft')[0];
    if (bicep.style.opacity === '1') {
      bicep.classList.toggle('opac');
      vm.bodypart = '';
    } else {
      bicep.classList.toggle('opac');
      var bicepButton = document.getElementById('r1');
      bicepButton.checked = true;
      vm.bodypart = bicepButton.value;
    }
  };
  vm.legsBack = function() {
    var leg = document.getElementsByClassName('legsBack')[0];
    if (leg.style.opacity === '1') {
      leg.classList.toggle('opac');
      vm.bodypart = '';
    } else {
      leg.classList.toggle('opac');
      var legButton = document.getElementById('r2');
      legButton.checked = true;
      vm.bodypart = legButton.value;
    }
  };
  vm.abs = function() {
    var abs = document.getElementsByClassName('abs')[0];
    if (abs.style.opacity === '1') {
      abs.classList.toggle('opac');
      vm.bodypart = '';
    } else {
      abs.classList.toggle('opac');
      var absButton = document.getElementById('r4');
      absButton.checked = true;
      vm.bodypart = absButton.value;
    }
  };
  vm.back = function() {
    var back = document.getElementsByClassName('back')[0];
    if (back.style.opacity === '1') {
      back.classList.toggle('opac');
      vm.bodypart = '';
    } else {
      back.classList.toggle('opac');
      var backButton = document.getElementById('r5');
      backButton.checked = true;
      vm.bodypart = backButton.value;
    }
  };
}
