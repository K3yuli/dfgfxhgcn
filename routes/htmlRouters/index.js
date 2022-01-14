const path = require('path');
const router = require('express').Router();

// the '/' brings us to the root route of the server!
// This is the route used to create a homepage for a server.
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});
// route for animals
router.get('/animals', (req, res) => {
    res.sendFile(path.join(__dirname, './public/animals.html'));
});

router.get('/zookeepers', (req, res) => {
    res.sendFile(path.join(__dirname, './public/zookeepers.html'));
});

// wildcard routes
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

module.exports = router;