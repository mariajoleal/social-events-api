const express = require("express");
const router = express.Router();

// Load Events model
const Event = require("../../models/eventModel");

router.post("", (req,res) => {
  const event = new Event({
    name: req.body.name,
    dateTime: req.body.dateTime,
    place: req.body.place,
    createdBy: req.body.createdBy,
    attending: req.body.attending,
    image: req.body.image
  });

  event
    .save()
    .then(event => res.json(event))
    .catch(err => console.log(err));
});

router.get("", (req, res) => {
  Event.find(function (err, events) {
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
});

module.exports = router;