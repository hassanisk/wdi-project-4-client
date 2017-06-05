angular
.module('gymApp')
.controller('MainCtrl', MainCtrl);


MainCtrl.$inject = ['$rootScope','CurrentUserService','$state','$scope', 'filterFilter'];
function MainCtrl($rootScope,CurrentUserService,$state, $scope, filterFilter) {
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


  $scope.getRandomIndex = function(){
    var index = Math.floor(Math.random() * $scope.myData.exercises.length);
    console.log(index);
    $scope.item = $scope.myData.exercises[index];
    console.log($scope.item);
    console.log($scope.item.name);
  };


  filterExercises();
  function filterExercises() {
    const params = { bodypart: vm.q };
    if (vm.easy) params.size  = 'easy';
    if (vm.medium) params.size = 'medium';
    if (vm.hard) params.size  = 'hard';

    vm.filtered = filterFilter(vm.myData, params);
  }
  $scope.$watchGroup([
    () => vm.easy,
    () => vm.medium,
    () => vm.hard,
    () => vm.q
  ], filterExercises);

  vm.filterExercises = filterExercises;




  $scope.myData = {};
  $scope.myData.exercises = [
    { bodypart: 'biceps',
    name: 'biceps curls',
    desc: 'this is an easy exercises',
    rep: '10*10*10',
    image: 'http://cdn-mf1.heartyhosting.com/sites/mensfitness.com/files/hammer_cheat_curl_main.jpg',
    level: 'easy'
  },
  {
    bodypart: 'biceps',
    name: 'biceps preach',
    desc: 'this is a hard exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 'hard'
  },
  {
    bodypart: 'biceps',
    name: 'biceps cable',
    desc: 'this is a medium exercises',
    rep: '10*10*10*10',
    image: 'http://build-muscle-101.com/wp-content/uploads/2014/12/high-pulley-cable-curl-ex.jpg',
    level: 'medium'
  },
  {
    bodypart: 'legs',
    name: 'squat',
    desc: 'this is a hard exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 'hard'
  },
  {
    bodypart: 'legs',
    name: 'deadlift',
    desc: 'this is a hard exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 'easy'
  },
  {
    bodypart: 'chest',
    name: 'bench press',
    desc: 'this is a hard exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 'medium'
  },
  {
    bodypart: 'abs',
    name: 'crunches',
    desc: 'this is a easy exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 'easy'
  },
  {
    bodypart: 'abs',
    name: 'crunches',
    desc: 'this is a easy exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 'easy'
  },
  {
    bodypart: 'shoulder',
    name: 'shoulder press',
    desc: 'this is a easy exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 'medium'
  },
  {
    bodypart: 'triceps',
    name: 'triceps extension',
    desc: 'this is a easy exercises',
    rep: '10*10*10*10',
    image: 'http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/band-curl-arms-exercise_landscape.jpg',
    level: 'savage'
  }
];

$scope.myData.doClick = function(exercise) {
  $scope.name = exercise.name;
  $scope.desc = exercise.desc;
  $scope.rep = exercise.rep;
  $scope.image = exercise.image;
  $scope.level = exercise.level;
};

$scope.bodyparts = [
  {
    name: 'chest'
  },
  {
    name: 'abs'
  },
  {
    name: 'shoulders'
  },
  {
    name: 'back'
  },
  {
    name: 'biceps'
  },
  {
    name: 'triceps'
  }
];


}
