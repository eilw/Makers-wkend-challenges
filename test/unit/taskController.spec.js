describe('TaskController', function() {
  beforeEach(module('ToDoManager'));

  var ctrl, task;

  beforeEach(inject(function($controller) {
    ctrl = $controller('TaskController');

  }));


  describe ('adding and completing tasks',function(){

    beforeEach(function(){
      task = 'this is the first task';
      ctrl.newTask = task;
      ctrl.addTask();
    });

    it('tasks can be added',function(){
      expect(ctrl.tasks.length).toEqual(1);
    });

    it('task input is cleared when task is added',function(){
      expect(ctrl.newTask).toEqual('')
    });

    it('a task is stored in completed tasks, when clicked',function(){
      ctrl.finishTask = ctrl.tasks[0];
      ctrl.completeTask();
      expect(ctrl.tasksCompleted).toContain(task);
    });

    it('a task is removed from todos, when completed', function(){
      ctrl.finishTask = ctrl.tasks[0];
      ctrl.completeTask();
      expect(ctrl.tasks).not.toContain(task);
    });

  });
});
