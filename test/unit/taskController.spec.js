describe('TaskController', function() {
  beforeEach(module('ToDoManager'));

  var ctrl, task, taskText;

  beforeEach(inject(function($controller) {
    ctrl = $controller('TaskController');

  }));


  describe ('adding and completing tasks',function(){

    beforeEach(function(){
      taskText = 'this is the first task';
      task = {text: taskText, done: false}
      ctrl.newTask = taskText;
      ctrl.addTask();
    });

    it('tasks can be added',function(){
      expect(ctrl.tasks.length).toEqual(1);
    });

    it('task input is cleared when task is added',function(){
      expect(ctrl.newTask).toEqual('')
    });

    it('a task is stored in completed tasks, when clicked',function(){
      var index = 0;
      ctrl.completeTask(index);
      expect(ctrl.tasksCompleted).toContain(task);
    });

    it('a task is removed from todos, when completed', function(){
      var index = 0;
      ctrl.completeTask(index);
      expect(ctrl.tasks).not.toContain(task);
    });

  });

  describe ('editing a task',function(){

    beforeEach(function(){
      taskText = 'this is the first task';
      task = {text: taskText, done: false}
      ctrl.newTask = taskText;
      ctrl.addTask();
    });

    it('a task can be edited', function(){
      var index = 0;
      var editedTask = 'this is an edited task'
      ctrl.editTask(editedTask);
      expect(ctrl.tasks).toContain(editedTask);
    });

    it('the old task is removed', function(){
      var index = 0;
      var editedTask = 'this is an edited task'
      ctrl.editTask(editedTask);
      expect(ctrl.tasks).not.toContain(task);
    });

  });
});
