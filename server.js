const express = require('express');
const app = express();
const mysql = require("mysql");
const bcrypt = require('bcrypt');
const users=[];

app.use(express.json());

app.post("/register",async(req,res)=>{
  try{
    const{email,password}=req.body;
    //find user 
    const findUser=users.find((data) => email == data.email);
    if(findUser){
        res.status(400).send("email already exists");
    } else {
        const hashedPassword = await bcrypt.hash(password,10);
        users.push({email, password: hashedPassword});
        console.log(users);
        res.status(201).send("Registered successfully");
    }
  } catch (err){
    res.status(500).send({message: err.message});
  }
});

app.post("/login",async(req,res)=>{
    try {
        const {email, password} = req.body;
        const findUser = users.find((data) => email == data.email);
        if (!findUser) {
            res.status(400).send("Email or password is incorrect");
        } else {
            const passwordMatch = await bcrypt.compare(password, findUser.password);
            if (passwordMatch) {
                res.status(200).send("Logged in successfully");
            } else {
                res.status(400).send("Email or password is incorrect");
            }
        }
    } catch (err) {
        res.status(500).send({message: err.message});
    }
});

app.listen(3002, () => {
    console.log('Server started on port 3002');
    console.log('nodemon working');
    
    
});
