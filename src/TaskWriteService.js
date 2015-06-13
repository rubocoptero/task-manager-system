var TaskRepository = require('./TaskRepository.js'),
    Task = require('./Task.js');

module.exports = {
    createNewTag: function (name) {
        TaskRepository.save(Task.new(name));
    }
};

