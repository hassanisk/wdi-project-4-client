angular
.module('gymApp')
.controller('DietIndexCtrl', DietIndexCtrl);

DietIndexCtrl.$inject = ['$http'];
function DietIndexCtrl($http){
  const vm  = this;

  $http
  .get('http://localhost:3000/api/diets')
  .then(response => {
    vm.diets = response.data;
    console.log(vm.diets);
  });
}
