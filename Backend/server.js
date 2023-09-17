const express = require("express");
const { connection } = require("./config/db");
const cors = require("cors");



const app = express();
app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>{
    res.status(200).send({msg:"Welcome to Finest Shave Backend!"})
})





app.listen(8080,async()=>{
    try {
        await connection;
        console.log("Connected to DB!")
    } catch (error) {
        console.log(error.message);
    }
    console.log("Server is Started!");
})