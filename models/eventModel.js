const mongoose = require('mongoose');
// Setup schema
const eventSchema = mongoose.Schema({
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
module.exports = User = mongoose.model("events", eventSchema);