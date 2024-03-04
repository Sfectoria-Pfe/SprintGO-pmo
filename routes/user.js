const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const bcrypt = require('bcrypt'); 
const config = require('../config/config')

const connection = mysql.createConnection(config.mysql);
connection.connect();
router.post('/', async (req, res) => {
    const { username, email, password } = req.body;

    const checkQuery = "SELECT * FROM users WHERE email = ?";
    connection.query(checkQuery, [email], async (error, results, fields) => {
        if (error) {
            console.error('Error checking user:', error);
            return res.status(500).send('Error creating user.');
        }
        if (results.length > 0) {
            return res.status(400).send('Email already exists.');
        }

        
        try {
            
            const hashedPassword = await bcrypt.hash(password, 10);

            
            const insertQuery = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
            connection.query(insertQuery, [username, email, hashedPassword], (error, results, fields) => {
                if (error) {
                    console.error('Error inserting user:', error);
                    return res.status(500).send('Error creating user.');
                }
                res.status(201).send('User created successfully.');
            });
        } catch (error) {
            console.error('Internal error:', error);
            res.status(500).send('Error creating user.');
        }
    });
});



router.get('/', (req, res) => {
    const query = 'SELECT * FROM users';
    connection.query(query, (error, results, fields) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error fetching users.');
            return;
        }
        res.json(results);
    });
});

router.get('/:id', (req, res) => {
    const userId = req.params.id;
    const query = 'SELECT * FROM users WHERE id = ?';
    connection.query(query, [userId], (error, results, fields) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error fetching user.');
            return;
        }
        if (results.length === 0) {
            res.status(404).send('User not found.');
            return;
        }
        res.json(results[0]);
    });
});


router.put('/:id', async(req, res) => {
    const userId = req.params.id;
    const { username, email, password } = req.body;


    const hashedPassword = await bcrypt.hash(password, 10);
    const query = 'UPDATE users SET username = ?, email = ?, password = ? WHERE id = ?';
    connection.query(query, [username, email, hashedPassword, userId], (error, results, fields) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error updating user.');
            return;
        }
        res.send('User updated successfully.');
    });
});

router.delete('/:id', (req, res) => {
    const userId = req.params.id;
    const query = 'DELETE FROM users WHERE id = ?';
    connection.query(query, [userId], (error, results, fields) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error deleting user.');
            return;
        }
        res.send('User deleted successfully.');
    });
});
module.exports = router;
