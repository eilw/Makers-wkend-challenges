describe("ToDoManager", function(){
  it('a user can add a task and the input is cleared after submitted',function(){
    browser.get("http://localhost:8000");
    var task = element(by.model('taskCtrl.newTask'));
    var submit = $('#addTask');
    task.sendKeys('The first task');
    submit.click();
    expect(task.getAttribute('value')).toEqual('');
    var tasks = element.all(by.css('.task'));
    expect(tasks.count()).toBe(1);
  });
});
