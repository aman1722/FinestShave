const bcrypt = require("bcrypt");
const { UserModel } = require("../models/userModel");

 
const register = async(req,res)=>{
    try {
        const {name,email,password} = req.body;

        const userAlreadyExists = await UserModel.findOne({email});

        if(userAlreadyExists) return res.status(501).send({msg:"User Already Exists!"})

        bcrypt.hash(password, 12, async(err, hash)=> {
            // Store hash in your password DB.
            const newUser = new UserModel({...req.body,password:hash});
            await newUser.save()
        });

        res.status(200).send({msg:"Registration Sucessful!"})
        
    } catch (error) {
        res.status(501).send(error.message);
    }
}




module.exports={
    register
}