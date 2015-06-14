function Task (name) {
    var name;

    this.defineInstructions = function (instructions) {

    };
}


module.exports = {
    new: function (name) {
        return new Task(name);
    }
};
