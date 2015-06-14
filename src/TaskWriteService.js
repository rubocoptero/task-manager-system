var TaskRepository = require('./TaskRepository.js'),
    Task = require('./Task.js');

module.exports = {
    createNewTag: function (name) {
        TaskRepository.save(Task.new(name));
    },
    defineTaskInstructions: function (id, instructions) {
        var task = TaskRepository.getById(id);
        task.defineInstructions(instructions);
        TaskRepository.save(task);
    }
};

