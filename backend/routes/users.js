const router = require('express').Router();
let User = require('../model/user.model');

router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    const newUser = new User({username,password,email});

    newUser.save()
     .then(() => res.json('User added!'))
     .catch(err => res.status(400).json('Error: ' + err));
});

// find user by id
router.route('/:id').get((req, res) => {
    User.findById(req.params.id)
     .then(user => res.json(user))
     .catch(err => res.status(400).json('Error: ' + err));
});

// update the user information
router.route('/update/:id').post((req, res) => {
    User.findById(req.params.id)
        .then(user => {
            user.username = req.body.username;
            user.password = req.body.password;
            user.email = req.body.email;

            user.save()
             .then(() => res.json('User updated'))
             .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});




module.exports = router;