const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studenntSchema = new Schema({
    name : {type: String, required: true},
    age : {type: Number, required: true},
    gender: {type: String, required: true}
});

const Student = mongoose.model("student" , studenntSchema);
module.exports = Student;
