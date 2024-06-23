const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');


const app = express()

const port = 3000;


// // Middleware to parse JSON bodies
app.use(bodyParser.json());

// Create a connection to the MYSQL database

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin123',
    database: 'my_backend'
})


// // connect with our database

db.connect((error) => {
    if(error){
        console.log("Error while connecting to database is: ", error);
        return;
    }
    console.log("We are connected to mySQL!!!");
})



// // start my server
app.listen(port, () => {
    console.log(`Server running at PORT:  ${port}`);
})