const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const bcrypt = require('bcrypt'); 
const config = require('../config/config');
const jwt = require('jsonwebtoken');


const connection = mysql.createConnection(config.mysql);

connection.connect();


router.post('/signup', async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !password || !email) return res.status(400).send('Username, email, and password are required.');

    try {
       
        const checkQuery = "SELECT * FROM users WHERE email = ?";
        connection.query(checkQuery, [email], async (error, results, fields) => {
            if (error) {
                console.error('Error checking user:', error);
                return res.status(500).send('Error creating user.');
            }
            if (results.length > 0) {
                return res.status(400).send('email already exists.');
            }
            
            
            const hashedPassword = await bcrypt.hash(password, 10);
            const insertQuery = "INSERT INTO users (email, username, password) VALUES (?, ?, ?)";
            connection.query(insertQuery, [email, username, hashedPassword], (error, results, fields) => {
                if (error) {
                    console.error('Error inserting user:', error);
                    return res.status(500).send('Error creating user.');
                }
                res.status(201).send('User created successfully.');
            });
        });
    } catch (error) {
        console.error('Internal error:', error);
        res.status(500).send('Error creating user.');
    }
});
router.post('/signin', async (req, res) => {
    const { email, password } = req.body;
    if (!password || !email) {
        return res.status(400).send('Email and password are required.');
    }

    try {
       
        const selectQuery = "SELECT * FROM users WHERE email = ?";
        connection.query(selectQuery, [email], async (error, results, fields) => {
            if (error) {
                console.error('Error checking user:', error);
                return res.status(500).send('Error signing in.');
            }
            if (results.length === 0) {
                return res.status(401).send('Email not found.');
            }

        
            const user = results[0];
            const passwordMatch = await bcrypt.compare(password, user.password);
            if (passwordMatch) {
                const token = jwt.sign({ email: user.email }, config.secretKey);
                res.json({ token });
            } else {
                res.status(401).send('Invalid email or password.');
            }
        });
    } catch (error) {
        console.error('Internal error:', error);
        res.status(500).send('Error signing in.');
    }
});
module.exports = router;