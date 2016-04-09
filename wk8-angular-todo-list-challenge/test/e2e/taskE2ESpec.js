describe("ToDoManager", function(){
  it('a user can add a task and the input is cleared after submitted',function(){
    browser.get("http://localhost:8000");
    var task = element(by.model('taskCtrl.newTask'));
    var submit = $('#addTask');
    task.sendKeys('Test task first');
    submit.click();
    expect(task.getAttribute('value')).toEqual('');
    var newTask = element.all(by.css('.task')).all(by.css('input[type=text]')).last();
    expect(newTask.getAttribute('value')).toEqual('Test task first');
  });

  it('a user can complete a task and it is stored in completed',function(){
    browser.get("http://localhost:8000");
    var task = element(by.model('taskCtrl.newTask'));
    var submit = $('#addTask');
    task.sendKeys('The first task');
    submit.click();
    var checkComplete = element.all(by.css('.task')).all(by.css("input[type=checkbox]")).last().click();
    var completedTask = element.all(by.css('.completed-task')).last();
    expect(completedTask.getText()).toEqual('The first task');
  });

  xit('a user can edit a task',function(){
    browser.get("http://localhost:8000");
    var task = element(by.model('taskCtrl.newTask'));
    var submit = $('#addTask');
    task.sendKeys('The first task');
    submit.click();
    var taskToBeEdited = element(by.model('task.text'));
    taskToBeEdited.clear();
    taskToBeEdited.sendKeys('Edited first task');
    var task = element(by.css('.task')).all(by.css('input[type=text]')).last();
    expect(task.getAttribute('value')).toEqual('Edited first task');
  });
});
