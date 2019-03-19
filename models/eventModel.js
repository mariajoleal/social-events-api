var mongoose = require('mongoose');
// Setup schema
var eventSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    place: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    createdBy: {
      type: String,
      required: true
    },
    attending: Number
});

// Export Event model
var Event = module.exports = mongoose.model('event', eventSchema);
module.exports.get = function (callback, limit) {
  Event.find(callback).limit(limit);
}