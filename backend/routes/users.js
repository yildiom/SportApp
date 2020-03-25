// in this page we are coding how we are going to get users
// from mongoDB database and post user to the database

const router = require('express').Router();
let User = require('../models/user.model'); // we import User model 
// which is the structure of user data in the database

router.route('/').get((req, res) => { // if we go to postman and make a get request on http://localhost:5000/users/
    User.find() // it finds the users on database. find is a promise method
        .then(users => res.json(users)) // then we return it as json
        .catch(err => res.status(400).json('Error ' + err));

});

router.route('/add').post((req, res) => { // if we go to postman and make a post request on http://localhost:5000/users/add
    const username = req.body.username; // and put username to the body of the request in json format
    const newUser = new User({ username }); // it uses user model to create a new user
    newUser.save() // it saves it to the database (save it as a promise method)
        .then(() => res.json('User added!')) // then tells us that user added
        .catch(err => res.status(400).json('Error ' + err))
});

module.exports = router;