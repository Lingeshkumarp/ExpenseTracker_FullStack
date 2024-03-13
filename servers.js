const {details}=require('./schemas')
const mongoose=require('mongoose')
const express=require('express')
const bodyparser=require('body-parser')
const app=express()
app.use(bodyparser.json())
async function connectdb(){
    try{
        await mongoose.connect('mongodb+srv://lingeshkumarp2022cse:Seceuse.12@lingesh.bv5r1lm.mongodb.net/logindetails?retryWrites=true&w=majority&appName=Lingesh')
    console.log("DB CONNECTED")
    const port=process.env.port || 8000
    app.listen(port,()=>{
    console.log(`listening on port ${port}`)
    })
    }
    catch(error){
        console.log(error)
        console.log("NOT CONNECTED")
    }
}

connectdb()

app.post('/adds',async(request,response)=>{
    // console.log(request.body)
    // response.json({
    //     "status":"created"
    // })
   try{
    await details.create({
        "username":request.body.username,
        "password":request.body.password,
    })
    console.log("success")
    response.status(200).json({
        "status":"successful" 
    })
   }
   catch(error){
    console.log(error)
    response.status(404).json({
        "status":"unsuccessful"
    })
   }
})