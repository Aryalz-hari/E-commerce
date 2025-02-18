const express = require('express');
const path= require('path');
 
const db = require('./data/database');
const authRoutes= require('./routes/auth.routes');
const app= express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.set('views', path.join(__dirname,'views'));


app.use(authRoutes);
db.connectToDatabase().then(app.listen(5000)).catch(function(error){
    console.log('Failed to connect to the database');
    console.log(Error);
})