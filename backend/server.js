const express = require('express');
const mysql = require('mysql');
const cors =require ('cors')
const jwt =require('jsonwebtoken')
const bcrypt = require('bcrypt')
const cookieParser =require('cookie-parser')
const dotenv =require('dotenv')
const userRoutes =require('./routes/pages')


dotenv.config({ path:'./.env'})

//express app
const app = express();

// middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());

//routes
app.use('/api/user', userRoutes)


//test
app.get("/",(req,res)=>{
  //  res.render("frontend");
    res.send("<h1>Home Page</h1>");
})


const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});


 
db.connect( (error)=> {
 if(error){
    console.log(error)
 }else{
    console.log('mysql Connected')
 } 
})

app.listen(4000 , ()=> {
    console.log('listening on port 4000');
})