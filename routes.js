// Initialize express router
let router = require('express').Router();

// Set default API response
router.get('/', function (req, res) {
    res.json({
       status: 'API Its Working',
       message: 'Welcome to RESTHub crafted with love!',
    });
});

// Import user controller
var userController = require('./controllers/usersController');

// user routes
router.route('/users')
    .get(userController.getAll)
    .post(userController.createNew);
router.route('/users/:user_id')
    .get(userController.viewUser)
    .patch(userController.updateUser)
    .put(userController.updateUser)
    .delete(userController.deleteUser);

// Export API routes
module.exports = router;