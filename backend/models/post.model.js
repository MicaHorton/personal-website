const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const marked = require('marked');
const createDomPurify = require('dompurify');
const { JSDOM } = require('jsdom');
const dompurify = createDomPurify(new JSDOM().window);

const postSchema = new Schema({
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
        trim: true,
        minlength: 5
    },
    markdown: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 5
    },
    sanatizedHtml: {
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

postSchema.pre('validate', function(next) {    
    if (this.markdown) {
        this.sanatizedHtml = dompurify.sanitize(marked(this.markdown));
    }
    next()
})

const Post = mongoose.model('Post', postSchema);
module.exports = Post;

