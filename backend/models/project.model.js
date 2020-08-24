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
    description: {
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
    },
    tags: {
        type: Array,
        required: false,
        unique: false,
    }
}, {
    timestamps: true,
});

const Project = mongoose.model('Project', projectSchema);
module.exports = Project;