angular
.module('gymApp')
.controller('WorkoutShowCtrl', WorkoutShowCtrl);

WorkoutShowCtrl.$inject = ['Exercise', '$stateParams'];
function WorkoutShowCtrl (Exercise, $stateParams) {
  const vm = this;

  vm.exercise =  Exercise
  .get({id: $stateParams.id})
  // .$promise
  // .then(exercise => {
  //   console.log('we here', exercise);
  //   vm.exercise = exercise;
  // })
  ;
}
