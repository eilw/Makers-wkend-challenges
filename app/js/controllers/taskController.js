todoManager.controller('TaskController',[function(){
  var self = this;
  self.newTask = ""
  self.tasks =[];

  self.addTask = function(){
    self.tasks.push(self.newTask);
    self.newTask = '';
  };
}]);
