const router = require('express').Router();
let Post = require('../models/post.model');
let checkAdmin = require('../middleware/checkAdmin');
const cookieParser = require('cookie-parser');
router.use(cookieParser());

// Get Everything Request 
router.route('/').get((req, res) => {
    res.setHeader("Content-Security-Policy", "script-src 'self' '");
    Post.find()
        .then(posts => res.json(posts))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Get by ID Request
router.route('/:id').get((req, res) => {
    Post.findById(req.params.id)
      .then(posts => res.json(posts))
      .catch(err => res.status(400).json('Error: ' + err));
 }); 

// New Post Request (Protected) 
router.route('/').post(checkAdmin, (req, res, next) => {
    const title = req.body.title;
    const description = req.body.description;
    const markdown = req.body.markdown;
    const tags = req.body.tags;

    const newPost = new Post({ title, description, markdown, tags});
    newPost.save()
        .then(() => {
            res.status(200);
            res.send('Post created')
        })
        .catch((err) => res.status(400))
}); 

// Update by ID Request (Protected)
router.route('/:id').post(checkAdmin, (req, res, next) => {
    Post.findById(req.params.id)
        .then(post => {
            post.title = req.body.title;
            post.description = req.body.description;
            post.markdown = req.body.markdown;
            post.tags = req.body.tags;
    
            post.save()
                .then(() => {
                    res.sendStatus(200);
                })
                .catch(err => res.status(400));
        })
        .catch(err => res.status(400));
}); 

// Delete by ID Request (Protected)
router.route('/:id').delete(checkAdmin, (req, res, next) => {
    Post.findByIdAndDelete(req.params.id)
        .then(() => res.status(200).send('Project deleted.'))
        .catch(err => res.status(400).send('Error: ' + err));
}); 


module.exports = router;
