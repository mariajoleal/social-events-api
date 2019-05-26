const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require("passport");
const users = require("./routes/api/users");

// Initialize the app
const app = express();

// Import routes
let apiRoutes = require("./routes")

// Bodyparser middleware
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);

// Setup server port
const port = process.env.PORT || 8080;

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

// // Send message for default URL
// app.get('/', (req, res) => res.send('Hello World with Express'));

// // Use Api routes in the App
// app.use('/api', apiRoutes)

// Launch app to listen to specified port
app.listen(port, () => console.log("Server up and running on port " + port));
