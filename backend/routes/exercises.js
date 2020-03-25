// in this page we are coding how we are going to get and manipulate exercises data on mongoDB
// at mongoDB database and create, get, update, delete exercises at the database
// we use 

const router = require('express').Router();
let Exercise = require('../models/exercise.model'); // we import Exercises model 
// which is the structure of exercise data on the database

router.route('/').get((req, res) => { // to get the existing exercises we go to postman and make a get request of http://localhost:5000/exercises/
    Exercise.find()
        .then(exercises => res.json(exercises))
        .catch(err => res.status(400).json('Error ' + err));

});

router.route('/add').post((req, res) => { // to add a new exercise we go to postman and make a post request of http://localhost:5000/exercises/add
    const username = req.body.username; // to the body of the request we put this data in json format
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newExercise = new Exercise({ username, description, duration, date });
    newExercise.save() // it saves the new exercise to the database
        .then(() => res.json('Exercise added!'))
        .catch(err => res.status(400).json('Error ' + err))
});

router.route('/:id').get((req, res) => { // to get an exercise based on its id we go to postman and make a get request of http://localhost:5000/exercises/1234566
    Exercise.findById(req.params.id)
        .then(exercise => res.json(exercise))
        .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/:id').delete((req, res) => { // to delete an exercise we go to postman and make a delete request of http://localhost:5000/exercises/1234566
    Exercise.findByIdAndDelete(req.params.id)
        .then(() => res.json("Exercise deleted"))
        .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/update/:id').post((req, res) => { // to update an exercise we go to postman and make a post request of http://localhost:5000/exercises/update/1234566
    const username = req.body.username; // to the body of the request we put this data in json format
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    Exercise.findById(req.params.id)
        .then(exercise => { // currently we have to provide all these info to update an exercise, otherwise it will give an error but this can be changed
            exercise.username = username;
            exercise.description = description;
            exercise.duration = duration;
            exercise.date = date;

            exercise.save().then(() => res.json('Exercise updated'))
                .catch(err => res.status(400).json('Error: ' + err))
        })

});

module.exports = router;