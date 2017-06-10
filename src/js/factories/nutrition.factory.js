angular
.module('gymApp')
.factory('Nutrition', nutritionFactory);

nutritionFactory.$inject = ['API', '$resource'];
function nutritionFactory(API, $resource) {
  return $resource(`${API}/nutritions/:id`, {id: '@_id'}, {
    'update': { method: 'PUT'}
  });
}
