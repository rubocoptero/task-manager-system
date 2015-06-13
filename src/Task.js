function Task (name) {
    var name;
}


module.exports = {
    new: function (name) {
        return new Task(name);
    }
};
