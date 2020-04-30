const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const projectSchema = new Schema({
    title: { 
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 5
    },
    post: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 5
    }
}, {
    timestamps: true,
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;