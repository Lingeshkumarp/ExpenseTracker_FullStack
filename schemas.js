const mongoose=require('mongoose')

const credentialschema= new mongoose.Schema({
    username:{
        type:String
    },
    password:{
        type:String
    }
})

const details=mongoose.model('LOGINDETAILS',credentialschema)
module.exports={details}