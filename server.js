const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/auth.js');
const userRoutes = require('./routes/user.js');


const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/users', userRoutes);
app.use('/', authRoutes);



app.listen(3004, () => {
    console.log(`Server is running on port 3004`);
});
 
/*
app.post('/add', (req, res) => {
    const username = "maherghariani";
    const password = "789456123";

    const addUserQuery = "INSERT INTO users (username, password) VALUES (?, ?)";
    connection.query(addUserQuery, [username, password], (error, results, fields) => {
        if (error) {
            console.error('Error inserting user:', error);
            return res.status(500).send('Error creating user.');
        }
        res.status(201).send('User created successfully.');
    });
});
*/