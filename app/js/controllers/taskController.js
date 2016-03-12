todoManager.controller('TaskController',[function(){
  var self = this;
  self.newTask = "";
  self.tasks =[];
  self.tasksCompleted = [];

  self.addTask = function(){
    self.tasks.push({text: self.newTask, done:false});
    self.newTask = '';
  };

  self.completeTask = function(index){
    self.tasksCompleted.push(self.tasks[index]);
    self.tasks.splice(index, 1);
  };

  self.editMode = function(){
    $(event.target).closest('li');

  }

}]);
