angular
.module('gymApp')
.controller('ExerciseShowCtrl', ExerciseShowCtrl);

ExerciseShowCtrl.$inject = ['Exercise', '$stateParams'];
function ExerciseShowCtrl (Exercise, $stateParams) {
  const vm = this;

  Exercise
  .get($stateParams.id)
  .then(exercise => {
    console.log(exercise)
    vm.exercise = exercise;
  });
}
