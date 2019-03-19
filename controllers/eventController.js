// Import event model
Event = require('../models/eventModel');
// Handle index actions
exports.getAll = function (req, res) {
  Event.get(function (err, events) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Events retrieved successfully",
            data: events
        });
    });
};
// Handle create event actions
exports.createNew = function (req, res) {
    var event = new Event();
    event.name = req.body.name ? req.body.name : event.name;
    event.date = req.body.date;
    event.place = req.body.place;
    event.time = req.body.time;
    event.createdBy = req.body.createdBy;
    event.attending = req.body.attending;
// save the event and check for errors
    event.save(function (err) {
        if (err)
            res.json(err);
res.json({
            message: 'New event created!',
            data: event
        });
    });
};

// Handle view event info
exports.viewEvent = function (req, res) {
    Event.findById(req.params.event_id, function (err, event) {
        if (err)
            res.send(err);
        res.json({
            message: 'Event details loading..',
            data: event
        });
    });
};
// Handle update event info
exports.updateEvent = function (req, res) {
Event.findById(req.params.event_id, function (err, event) {
        if (err)
            res.send(err);
        event.name = req.body.name ? req.body.name : event.name;
        event.date = req.body.date ? req.body.date : event.date;
        event.place = req.body.place ? req.body.place : event.place;
        event.time = req.body.time ? req.body.time : event.time;
        event.createdBy = req.body.createdBy ? req.body.createdBy : event.createdBy;
        event.attending = req.body.attending ? req.body.attending : event.attending;
// save the event and check for errors
        event.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Event Info updated',
                data: event
            });
        });
    });
};
// Handle delete event
exports.deleteEvent = function (req, res) {
    Event.deleteOne({
        _id: req.params.event_id
    }, function (err, user) {
        if (err)
            res.send(err);
res.json({
            status: "success",
            message: 'Event deleted'
        });
    });
};