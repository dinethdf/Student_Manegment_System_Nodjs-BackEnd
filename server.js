const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();


const PORT = process.env.PORT || 8070 ;

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
const URL = process.env.MONGODB_URL;

mongoose.connect(URL,{
     //useCreateIndex: true,
     useNewUrlParser: true,
     useUnifiedTopology: true,
     //useFindAndModify :false,
     
});

const connection = mongoose.connection;
connection.once("open", ()=>{
    console.log("MongoDB Connection Success!");

});

const studentRouter = require("./routes/students");

app.use("/", studentRouter);


app.listen(PORT, () =>{
    console.log('Server IS running UP on PORT : '+ PORT);
})