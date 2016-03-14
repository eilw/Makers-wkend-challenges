describe('service: TaskDbService', function(){
  var taskDbService, tasks, PROJECTID;

  tasks = {"task":
    [{"id":1,"content":"first task","completed":false,"project_id":1},
    {"id":2,"content":"completed task","completed":true,"project_id":1}]
  };

  PROJECTID = 1;

  beforeEach(module('ToDoManager'));
  beforeEach(inject(function(TaskDbService){
    taskDbService = TaskDbService;
  }));

  it("responds to retrieve",function(){
    expect(taskDbService.retrieve).toBeDefined();
  });

  describe ('get stored tasks from api',function(){
     var httpBackend;
     beforeEach(inject(function($httpBackend){
       httpBackend = $httpBackend
       httpBackend
         .expectGET('http://localhost:9292/api?project_id=1')
         .respond({"task":
           [{"id":1,"content":"first task","completed":false,"project_id":1},
           {"id":2,"content":"completed task","completed":true,"project_id":1}]
         });
     }));
    afterEach(function() {
      httpBackend.verifyNoOutstandingExpectation();
      httpBackend.verifyNoOutstandingRequest();
    });

    it("returns the search query",function(){
      taskDbService.retrieve(PROJECTID)
        .then(function(response) {
        expect(response.data).toEqual(tasks)
        })
        httpBackend.flush();
    })
  });
});
