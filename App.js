const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const mongoose = require('mongoose');
const cors = require('cors');
const { Decimal128 } = require('bson');
const Record = require('./recordModel')

const app = express();
app.use(bodyParser.json());
app.use(cors());
const port = process.env.PORT || 5000

//Settting up MongoDB credentials
const options = {useNewUrlParser: true, useUnifiedTopology: true, dbName: 'cat_feeding', };
mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://brownesc:brownesc@cluster0.rls06.mongodb.net/tagup_record?retryWrites=true&w=majority", options)
        .then(()=> console.log("Connected to MongoDB"))
        .catch((err)=> console.log(`Error connecting to MongoDB ${err}`));



app.get('/',(req,res)=>{
    res.send({1:2,3:4});
})

app.get('/api/list',(req,res)=>{

})

app.post('/api/create', (req,res)=>{
})

/**
 * Adds entry to database in the form of a post request 
 * @param {JSON} req: The entry to store in the database
 * @param {*} res response from server
 */
function handlecreate(req, res){
    let data = req.body
}


app.listen(port)