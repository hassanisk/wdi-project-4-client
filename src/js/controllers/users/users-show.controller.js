angular
.module('gymApp')
.controller('UserShowCtrl', UserShowCtrl);

UserShowCtrl.$inject = ['User', '$stateParams','$state', 'CurrentUserService'];
function UserShowCtrl(User, $stateParams, $state, CurrentUserService){
  const vm  = this;
  vm.user = User.get($stateParams);

  vm.delete = () => {
    User.delete($stateParams).$promise.then(() =>{
      CurrentUserService.removeUser();
      $state.go('home');
    });
  };
}
