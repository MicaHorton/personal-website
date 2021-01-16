const router = require('express').Router();
let Post = require('../models/post.model');
let checkAdmin = require('../middleware/checkAdmin');
const cookieParser = require('cookie-parser');
router.use(cookieParser());

/* Get Everything Request */
router.route('/').get((req, res) => {
    res.setHeader("Content-Security-Policy", "script-src 'self' '");
    Post.find()
        .then(posts => res.json(posts))
        .catch(err => res.status(400).json('Error: ' + err));
});

/* Get by ID Request */ 
router.route('/:id').get((req, res) => {
    Post.findById(req.params.id)
      .then(posts => res.json(posts))
      .catch(err => res.status(400).json('Error: ' + err));
 }); 

/* Update by ID Request (Protected) */ 
router.route('/update/:id').post(checkAdmin, (req, res, next) => {
    Post.findById(req.params.id)
        .then(post => {
            post.title = req.body.title;
            post.description = req.body.description;
            post.markdown = req.body.markdown;
            post.tags = req.body.tags;
    
            post.save()
                .then(() => {
                    console.log('POST SAVED',post);
                    res.sendStatus(200);
                })
                .catch(err => res.status(400));
        })
        .catch(err => res.status(400));
}); 

/* Add Request (Protected) */ 
router.route('/add').post(checkAdmin, (req, res) => {
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


/* Route Add Request */ /*
router.route('/add').post((req, res) => {
  const title = req.body.title;
  const post = req.body.post;

  const newProject = new Project({title, post});
  newProject.save()
    .then(() => res.json('Project added!'))
    .catch(err => res.status(400).json('Error: ' + err));
}); */


/* Route Delete by ID Request */ /*
router.route('/:id').delete((req, res) => {
Project.findByIdAndDelete(req.params.id)
    .then(() => res.json('Project deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
}); */

/* Route Update by ID Request */ /*
router.route('/update/:id').post((req, res) => {
Project.findById(req.params.id)
    .then(project => {
    project.title = req.body.title;
    project.post = req.body.post;

    project.save()
        .then(() => res.json('Project updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
}); */


module.exports = router;
