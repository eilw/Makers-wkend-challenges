describe('service: TaskService', function(){
  var taskDbService, task, taskText;

  beforeEach(module('ToDoManager'));
  beforeEach(inject(function(TaskService){
    taskServ = TaskService;
  }));

  describe ('adding and completing tasks',function(){

    beforeEach(function(){
      taskText = 'this is the first task';
      task = {text: taskText, done: false}
      taskServ.newTask = taskText;
      taskServ.addTask(taskText);
    });

    it('tasks can be added',function(){
      expect(taskServ.tasks.length).toEqual(1);
    });


    it('a task is stored in completed tasks, when clicked',function(){
      var index = 0;
      taskServ.completeTask(index);
      expect(taskServ.tasksCompleted).toContain(task);
    });

    it('a task is removed from todos, when completed', function(){
      var index = 0;
      taskServ.completeTask(index);
      expect(taskServ.tasks).not.toContain(task);
    });
  });

  describe ('getTasks - calling the api to get tasks',function(){
     var httpBackend;
     beforeEach(inject(function($httpBackend){
       httpBackend = $httpBackend
       httpBackend
         .when('GET','http://localhost:9292/api?project_id=1')
         .respond(
            {"task":
              [{"id":1,"content":"first task","completed":false,"project_id":1},
              {"id":2,"content":"completed task","completed":true,"project_id":1}]
            }
         );
     }));

    afterEach(function() {
      httpBackend.verifyNoOutstandingExpectation();
      httpBackend.verifyNoOutstandingRequest();
    });

     it('displays todo tasks in the task', function(){
       taskServ.getTasks();
       httpBackend.flush();
       expect(taskServ.tasks[0].text).toEqual('first task');
     });

     it('completed tasks are put in the completed list', function(){
       taskServ.getTasks();
       httpBackend.flush();
       expect(taskServ.tasksCompleted[0].text).toEqual('completed task');
     });
   });


});
