todoManager.factory('GetTasks', ['$http', function($http){
  return {
    retrieve: function(){
      return $http({
        url: 'http://localhost:9292/api',
        method: 'GET',
        params: { project_id: 1 }
      });
    }};
  }
]);
