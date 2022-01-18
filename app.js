const express = require("express")
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3001

// Configuring the database
const dbConfig = require('./config/dbconfig.js');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// Create Express App
const app = express()

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())


// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

// Require Owner routes
require('./routes/owner.routes.js')(app);

// Require Pet routes
require('./routes/pet.routes.js')(app);

app.get("/" , (req ,res)=>{
    res.send("Hello World")
})


app.listen(PORT , ()=>{
    console.log(`App Running on Port ${PORT}`)
})

// api versioning branch in updated