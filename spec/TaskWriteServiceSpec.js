var TaskWriteService = require('../src/TaskWriteService.js'),
    Task = require('../src/Task.js');
    TaskRepository = require('../src/TaskRepository.js');

describe('Task Write Service', function () {
    it('should create a new task', function () {
        var name = 'New task';
        spyOn(TaskRepository, 'save');

        TaskWriteService.createNewTag(name);

        expect(TaskRepository.save).toHaveBeenCalledWith(Task.new(name));
    });
});


