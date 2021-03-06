angular
.module('gymApp')
.controller('UserIndexCtrl', UserIndexCtrl);

UserIndexCtrl.$inject = ['User', '$http'];
function UserIndexCtrl(User, $http){
  const vm  = this;
  vm.users = User.query();

  $http
  .get('http://localhost:3000/api/users')
  .then(response => {
    vm.users = response.data;
    console.log(vm.users);
  });
}
