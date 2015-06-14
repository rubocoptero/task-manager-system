var TaskWriteService = require('../src/TaskWriteService.js'),
    Task = require('../src/Task.js');
    TaskRepository = require('../src/TaskRepository.js');

describe('Task Write Service', function () {
    it('should create a new task', function () {
        var name = 'New task';
        spyOn(TaskRepository, 'save');
        spyOn(Task, 'new').and.returnValue(Task.new(name));

        TaskWriteService.createNewTag(name);

        expect(TaskRepository.save).toHaveBeenCalledWith(Task.new(name));
    });

    it('should define task instructions', function () {
        var instructions = 'More instructions',
            targetTask = Task.new('My name');

        spyOn(targetTask, 'defineInstructions');
        spyOn(TaskRepository, 'getById').and.returnValue(targetTask);
        spyOn(TaskRepository, 'save');

        TaskWriteService.defineTaskInstructions('id', instructions);

        expect(targetTask.defineInstructions).toHaveBeenCalledWith(instructions);
        expect(TaskRepository.save).toHaveBeenCalledWith(targetTask);
    });
});


