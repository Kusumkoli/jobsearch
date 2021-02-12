const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');


//routes
const loginRoutes = require('./routes/login');
const jobRoutes = require('./routes/job');

const app = express();

//EJS templating
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static(__dirname + '/public'));

app.use(cookieParser());
//Routing 
app.use(bodyParser.urlencoded({ extended: true }));
loginRoutes.use(bodyParser.json());
app.use(loginRoutes);
jobRoutes.use(bodyParser.json());
app.use(jobRoutes);



const PORT = process.env.PORT || 2010;

//db config
const db = require("./config/keys").mongoURI;

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to the Database successfully');
        app.listen(PORT, () => {
            console.log('Server is listening on Port:', PORT)
          });
    });