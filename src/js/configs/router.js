angular
.module('gymApp')
.config(Router);

Router.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];
function Router($stateProvider, $locationProvider, $urlRouterProvider){
  $locationProvider.html5Mode(true);

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: '/js/views/home.html'
  })
  .state('register', {
    url: '/register',
    templateUrl: '/js/views/register.html',
    controller: 'RegisterCtrl',
    controllerAs: 'vm'
  })
  .state('login', {
    url: '/login',
    templateUrl: '/js/views/login.html',
    controller: 'LoginCtrl',
    controllerAs: 'vm'
  })
  .state('usersIndex', {
    url: '/users',
    templateUrl: '/js/views/users/index.html',
    controller: 'UsersIndexCtrl',
    controllerAs: 'vm'
  })
  .state('usersShow', {
    url: '/users/:id',
    templateUrl: '/js/views/users/show.html',
    controller: 'UserShowCtrl',
    controllerAs: 'vm'
  })
  .state('usersEdit', {
    url: '/users/:id/edit',
    templateUrl: '/js/views/users/edit.html',
    controller: 'UsersEditCtrl',
    controllerAs: 'vm'
  })
  .state('workoutsIndex', {
    url: '/workouts',
    templateUrl: '/js/views/workouts/index.html',
    controller: 'MainCtrl',
    controllerAs: 'vm'
  })
  .state('workoutsShow', {
    url: '/workouts/:id',
    templateUrl: '/js/views/workouts/show.html',
    controller: 'WorkoutShowCtrl',
    controllerAs: 'vm'
  })
  .state('exerciseShow', {
    url: '/exercises/:id',
    templateUrl: '/js/views/exercises/show.html',
    controller: 'ExerciseShowCtrl',
    controllerAs: 'vm'
  })
  .state('nutritionsIndex', {
    url: '/nutritions',
    templateUrl: '/js/views/nutritions/index.html',
    controller: 'NutritionIndexCtrl',
    controllerAs: 'vm'
  })
  .state('nutritionsShow', {
    url: '/nutritions/:id',
    templateUrl: '/js/views/nutritions/show.html',
    controller: 'NutritionShowCtrl',
    controllerAs: 'vm'
  })
  .state('contactIndex', {
    url: '/contact/',
    templateUrl: '/js/views/contact/contact.html'
  })
  .state('aboutIndex', {
    url: '/about/',
    templateUrl: '/js/views/about/about.html'
  })
;

  $urlRouterProvider.otherwise('/');
}
