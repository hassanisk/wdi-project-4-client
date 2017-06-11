angular
.module('gymApp')
.controller('NutritionShowCtrl', NutritionShowCtrl);

NutritionShowCtrl.$inject = ['Nutrition', '$stateParams'];
function NutritionShowCtrl(Nutrition, $stateParams){
  const vm  = this;
  vm.nutrition = Nutrition.get($stateParams);
  console.log(vm.nutrition);
}
