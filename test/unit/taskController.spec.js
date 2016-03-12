describe('TaskController', function() {
  beforeEach(module('ToDoManager'));

  var ctrl, task;

  beforeEach(inject(function($controller) {
    ctrl = $controller('TaskController');
    task = 'this is the first task';

  }));


  describe ('adding and completing tasks',function(){
    it('tasks can be added',function(){
      ctrl.newTask = task;
      ctrl.addTask();
      expect(ctrl.tasks.length).toEqual(1);
    });

    it('task input is cleared when task is added',function(){
      ctrl.newTask = task;
      ctrl.addTask();
      expect(ctrl.newTask).toEqual('')
    });

  });
});
