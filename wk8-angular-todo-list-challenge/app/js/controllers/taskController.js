todoManager.controller('TaskController',[ 'TaskService', function(TaskService){

  var self = this;
  self.taskServ = TaskService;
  self.newTask = "";
  self.tasks = self.taskServ.returnTasks();
  self.tasksCompleted = self.taskServ.returnCompletedtasks();


  self.addTask = function(){
    self.taskServ.addTask(self.newTask);
    self.newTask = '';
  };

  self.completeTask = function(index){
    self.tasksCompleted.push(self.tasks[index]);
    self.tasks.splice(index, 1);
  };


}]);
