const mongoose = require('mongoose');
// Setup schema
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
});
// Export User model
module.exports = User = mongoose.model("users", userSchema);