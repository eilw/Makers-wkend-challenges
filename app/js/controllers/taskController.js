todoManager.controller('TaskController',[ 'GetTasks', function(GetTasks){

  var self = this;
  self.newTask = "";
  self.tasks =[];
  self.tasksCompleted = [];

  self.addTask = function(){
    self.tasks.push({text: self.newTask, done:false});
    self.newTask = '';
    self.getTasks();
  };

  self.displayTasks = function(tasks){
    for(var i = 0; i<tasks.length; i++){
      if(tasks[i].completed){
        self.tasksCompleted.push({text: tasks[i].content, done: tasks[i].completed, taskId: tasks[i].id, projectId: tasks[i].project_id});
      }
      else{
        self.tasks.push({text: tasks[i].content, done: tasks[i].completed, taskId: tasks[i].id, projectId: tasks[i].project_id});
      }
    }
  };

  self.completeTask = function(index){
    self.tasksCompleted.push(self.tasks[index]);
    self.tasks.splice(index, 1);
  };

  self.getTasks = function(){
    GetTasks.retrieve().then(function(response){
      self.displayTasks(response.data.task);
    });
  };

}]);
