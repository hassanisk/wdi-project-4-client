angular
.module('gymApp')
.controller('MainCtrl', MainCtrl);


MainCtrl.$inject = ['$rootScope','CurrentUserService','$state','$scope'];
function MainCtrl($rootScope,CurrentUserService,$state, $scope) {
  const vm = this;
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


  $scope.getRandomIndex = function(length){
    return Math.floor(Math.random() * length);
  };
  $scope.myData = {};
  $scope.myData.exercises = [
    {
      name: 'biceps curls',
      desc: 'this is an easy exercises',
      rep: '10*10*10',
      image: 'http://cdn-mf1.heartyhosting.com/sites/mensfitness.com/files/hammer_cheat_curl_main.jpg',
      level: 'easy'
    },
    {
      name: 'biceps preach',
      desc: 'this is a hard exercises',
      rep: '10*10*10*10',
      image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
      level: 'hard'
    },
    {
      name: 'biceps cable',
      desc: 'this is a medium exercises',
      rep: '10*10*10*10',
      image: 'http://build-muscle-101.com/wp-content/uploads/2014/12/high-pulley-cable-curl-ex.jpg',
      level: 'medium'
    }
  ];

  $scope.myData.doClick = function(exercise) {
    $scope.name = exercise.name;
    $scope.desc = exercise.desc;
    $scope.rep = exercise.rep;
    $scope.image = exercise.image;
    $scope.level = exercise.level;


  };
  $scope.levels = [
    {
      name: 'Easy'
    },
    {
      name: 'Intermediate'
    },
    {
      name: 'Hard'
    },
    {
      name: 'Beast Mode!'
    }
  ];

}
