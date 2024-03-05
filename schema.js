///const express=require('express')
const mongoose=require('mongoose')
//const {Expense}=require('./schema.js')
const expenseTrackerSchema=new mongoose.Schema({
    amount : {
        type:Number
    },
    category : {
        type:String
    },
    date : {
        type:String
    }
})

const Expense=mongoose.model('expenseDetails',expenseTrackerSchema)
module.exports={Expense}