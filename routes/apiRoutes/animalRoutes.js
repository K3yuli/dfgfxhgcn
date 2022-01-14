const router = require('express').Router();
const { filterByQuery, findById, createNewAnimal, validateAnimal } = require('../../lib/animals');
const { animals } = require('../../data/animals.json');

// add the route of animals
router.get('/animals', (req, res) => {
    // accessing the query property on the req object
    let results = animals;
    // call the filterByQuery()
    if(req.query) {
        results = filterByQuery(req.query, results);
    }
    res.json(results);
});


// new GET route for animals
// A param route must come after the other GET route.
router.get('/animals/:id', (req, res) => {
    const result = findById(req.params.id, animals);
    if(result) {
        res.json(result);
    } else {
        res.send(404);
    }
});

// route that listens for POST requests
router.post('/animals', (req, res) => {
    // set id based on what the next index of the array will be
    req.body.id = animals.length.toString();
    // passing data through validation function
    // if any data is req.body is incorrect, send 400 error back
    if(!validateAnimal(req.body)) {
        res.status(400).send('The animal is not properly formatted.');
    }  else {
        const animal = createNewAnimal(req.body, animals);
            // req.body is where our incoming content will be
            res.json(animal);
    }
});

module.exports = router;