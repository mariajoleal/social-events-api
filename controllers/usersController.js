// Import user model
User = require('../models/userModel');
// Handle index actions
exports.getAll = function (req, res) {
  User.get(function (err, users) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Users retrieved successfully",
            data: users
        });
    });
};
// Handle create user actions
exports.createNew = function (req, res) {
    var user = new User();
    user.name = req.body.name ? req.body.name : user.name;
    user.gender = req.body.gender;
    user.email = req.body.email;
    user.phone = req.body.phone;
    user.username = req.body.username;
    user.password = req.body.password;
// save the user and check for errors
    user.save(function (err) {
        if (err)
            res.json(err);
res.json({
            message: 'New user created!',
            data: user
        });
    });
};

// Handle view user info
exports.viewUser = function (req, res) {
    User.findById(req.params.user_id, function (err, user) {
        if (err)
            res.send(err);
        res.json({
            message: 'User details loading..',
            data: user
        });
    });
};
// Handle update user info
exports.updateUser = function (req, res) {
User.findById(req.params.user_id, function (err, user) {
        if (err)
            res.send(err);
        user.name = req.body.name ? req.body.name : user.name;
        user.username = req.body.username ? req.body.username : user.username;
        user.password = req.body.password ? req.body.password : user.password;
        user.gender = req.body.gender ? req.body.gender : user.gender;
        user.email = req.body.email ? req.body.email : user.email;
        user.phone = req.body.phone ? req.body.phone : user.phone;
// save the user and check for errors
        user.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'User Info updated',
                data: user
            });
        });
    });
};
// Handle delete user
exports.deleteUser = function (req, res) {
    User.deleteOne({
        _id: req.params.user_id
    }, function (err, user) {
        if (err)
            res.send(err);
res.json({
            status: "success",
            message: 'User deleted'
        });
    });
};