const express = require("express")
const bodyParser = require('body-parser');
const expressGraphQL = require("express-graphql").graphqlHTTP;
const PORT = process.env.PORT || 3001

const dbConfig = require('./config/dbconfig.js');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

app.use('/api/v1', require('./routes/index'));

app.use('/api/v2/graphql', expressGraphQL({
    schema: require('./graphql/schema'),
    graphiql: true
}));

app.use('/docs', express.static('view/doc.html'))


app.listen(PORT , ()=>{
    console.log(`App Running on Port ${PORT}`)
})
