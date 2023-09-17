const express = require("express");



const app = express();
app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>{
    res.status(200).send({msg:"Welcome to Finest Shave Backend!"})
})





app.listen(8080,()=>{
    console.log("Server is Started!");
})