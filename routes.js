// Initialize express router
let router = require('express').Router();

// Set default API response
router.get('/', function (req, res) {
    res.json({
       status: 'API Its Working',
       message: 'Welcome to RESTHub crafted with love!',
    });
});

// Import controllers
var userController = require('./controllers/usersController');
var eventController = require('./controllers/eventController');

// user routes
router.route('/users')
    .get(userController.getAll)
    .post(userController.createNew);
router.route('/users/:user_id')
    .get(userController.viewUser)
    .patch(userController.updateUser)
    .put(userController.updateUser)
    .delete(userController.deleteUser);
// event routes
router.route('/events')
    .get(eventController.getAll)
    .post(eventController.createNew);
router.route('/events/:event_id')
    .get(eventController.viewEvent)
    .patch(eventController.updateEvent)
    .put(eventController.updateEvent)
    .delete(eventController.deleteEvent);

// Export API routes
module.exports = router;