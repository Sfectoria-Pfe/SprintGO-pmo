const express= require("express");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mysql = require('mysql');
const config = require('../config/config');

const connection = mysql.createConnection(config.mysql);

connection.connect((error) => {
    if (error) {
        console.error('Error connecting to MySQL:', error);
        console.log('Not connected to the database');
    } else {
        console.log('Connected to MySQL database');
        console.log('dbconnected');
    }
});




