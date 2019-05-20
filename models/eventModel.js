var mongoose = require('mongoose');
// Setup schema
var eventSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    dateTime: {
        type: String,
        required: true
    },
    place: {
        type: String,
        required: true
    },
    createdBy: {
      type: String,
      required: true
    },
    attending: Number,
    image: String,  
});

// Export Event model
var Event = module.exports = mongoose.model('event', eventSchema);
module.exports.get = function (callback, limit) {
  Event.find(callback).limit(limit);
}