angular
.module('gymApp')
.controller('NutritionIndexCtrl', NutritionIndexCtrl);

NutritionIndexCtrl.$inject = ['Nutrition','$http'];
function NutritionIndexCtrl(Nutrition, $http){
  const vm  = this;
  vm.all    = Nutrition.query();

  $http
  .get('http://localhost:3000/api/nutritions')
  .then(response => {
    vm.nutritions = response.data;
    console.log(vm.nutritions);
  });
}
