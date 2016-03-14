todoManager.service('TaskDbService', ['$http', function($http){
  return {
    retrieve: function(projectId){
      return $http({
        url: 'http://localhost:9292/api',
        method: 'GET',
        params: { project_id: projectId }
      });
    }};
  }
]);
