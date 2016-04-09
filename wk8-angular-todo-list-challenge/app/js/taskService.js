todoManager.service('TaskService',['TaskDbService', function(TaskDbService){
  var self = this;

  self.tasks =[];
  self.tasksCompleted = [];
  self.PROJECT_ID = 1;



  self.addTask = function(taskText){
    self.tasks.push({text: taskText, done:false});
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
    TaskDbService.retrieve(self.PROJECT_ID).then(function(response){
      self.displayTasks(response.data.task);
    });
  };

  self.returnTasks = function(){
    return self.tasks;
  };

  self.returnCompletedtasks = function(){
    return self.tasksCompleted;
  };

  self.getTasks();

}]);
