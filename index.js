/*
console.log('hello')
console.log(2+3)

Expense Tracker 
*/
// add-expense -> post
// get-expenses -> get
// edit-expenses -> post
// delete expenses

//schema
/**
 * category,amount,date
 


// mongodb+srv://lingesh:<password>@linga.s9jsg8o.mongodb.net/?retryWrites=true&w=majority&appName=Linga


const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")

const app = express();
app.use(bodyParser.json())

function connectToDb(){
    mongoose.connect("mongodb+srv://lingeshkumarp2022cse:Seceuse.12@lingesh.bv5r1lm.mongodb.net/?retryWrites=true&w=majority&appName=Atlas") /// async funciton returns a promise
}

const port = 8000
app.listen(port,function(){
    console.log(listening on port ${port});
})

async function connection{
    mongoose.connect("mongodb+srv://lingeshkumarp2022cse:Seceuse.12@lingesh.bv5r1lm.mongodb.net/?retryWrites=true&w=majority&appName=Atlas") /// async funciton returns a promise
}        
*/
/* 
Expense tracker:

Basic working :
Adding new expenses/income : /add-expense ->post
Displaying existing expenses :/get-expense ->get
editing existing entries : /edit-expense ->patch/put
Deleting existing expenses : /delete-expense ->delete

//

Budget reporting
creating new user
validating user

defining schema 
category , amount , date - fields in expense tracker

*/
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const {Expense} = require('./schema.js')
const bodyParser = require('body-parser')
app.use(bodyParser.json())

async function connectToDb(){
    
    await mongoose.connect("mongodb+srv://lingeshkumarp2022cse:Seceuse.12@lingesh.bv5r1lm.mongodb.net/ExpenseTracker_FullStack?retryWrites=true&w=majority&appName=Lingesh")
    console.log("DB connection established.")
const port = 7000
app.listen(port,function(){
    console.log(`Listening... ${port}`)
})
}
connectToDb()

app.post('/add-expense',async function(request,response){
    try{
        await Expense.create({
            "amount":request.body.amount,
            "category":request.body.category,
            "date":request.body.date
        })
        //if the below lines are esecuted then only the await will run 
    
    //console.log(request.body)
    response.status(200).json({
        "status":"created",
        "message":"new entry created"
    })
}catch(error){
    response.status(201).json({
        "status":"created",
        "message":"entry not created",
        "error":error
    })
}
})

app.get('/get-expenses',async function(request,response){
    try{
        const expenseData=await Expense.find()
        express.response.status.apply(200).json(expenseData)
    }catch(error){
        response.status(500).json({
            "status":"failure",
            "message":"could not fetch entries",
            "error":error
        })
    }
})