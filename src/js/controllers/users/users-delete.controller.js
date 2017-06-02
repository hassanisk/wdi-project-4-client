angular
  .module('gymApp')
  .controller('UsersDeleteCtrl', UsersDeleteCtrl);


UsersDeleteCtrl.$inject = ['User', '$state'];
function UsersDeleteCtrl(User, $state) {
  var vm = this;
  vm.user = User;

  function usersDelete() {
    vm.user
      .$remove()
      .then(() => {
        $state.go('home');
      });
  }

  vm.delete = usersDelete;
}
