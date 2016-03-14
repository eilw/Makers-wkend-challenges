describe('factory: GetTasks', function(){
  var getTasks, tasks;

  tasks = {"task":
    [{"id":1,"content":"first task","completed":false,"project_id":1},
    {"id":2,"content":"completed task","completed":true,"project_id":1}]
  };

  beforeEach(module('ToDoManager'));
  beforeEach(inject(function(GetTasks){
    getTasks = GetTasks;
  }));

  it("responds to retrieve",function(){
    expect(getTasks.retrieve).toBeDefined();
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
      getTasks.retrieve()
        .then(function(response) {
        expect(response.data).toEqual(tasks)
        })
        httpBackend.flush();
    })
  });
});
