angular
.module('gymApp')
.factory('Fav', favFactory);

favFactory.$inject = ['API', '$resource'];
function favFactory(API, $resource) {
  return $resource(`${API}/favs/:id`, {id: '@_id'}, {
    'update': { method: 'PUT'}
  });
}
