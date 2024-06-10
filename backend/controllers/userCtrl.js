const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");

const userModel = require("../models/userModel")
const sendToken = require("../utils/sendToken")

exports.registerUser = asyncHandler(async(req, res)=>{
    
    let {username, email, password, confirmPass} = req.body;

    if(!username || !email || !password || !confirmPass){
        res.status(400)
        throw new Error("All fields are required!")
    }
    
    if(await userModel.findOne({username})){
        res.status(400)
        throw new Error("Username already taken!")
    }
    if(await userModel.findOne({email})){
        res.status(400)
        throw new Error("Email is already registered!")
    }
    if(password.length<8){
        res.status(400)
        throw new Error("Use 8 or more characters with a mix of letters, numbers & symbols!")
    }

    if(password !== confirmPass){
        res.status(400)
        throw new Error("Passwords do not match...")
    }
    
    let hashPassword = await bcrypt.hash(password, 10);
    
    let newUser;
    try{
        newUser = await userModel.create({username, email, password: hashPassword});
    }
    catch(e){
        res.status(400)
        throw new Error(e)
    }

    res.status(201).json({
        success: true,
        newUser
    })
})

exports.loginUser = asyncHandler(async (req, res)=>{

    let {email, password} = req.body;

    if(!email || !password){
        res.status(400)
        throw new Error("All fields are Required!")
    }

    let user = await userModel.findOne({email}).select("+password");

    if(!user){
        res.status(401)
        throw new Error("Email is not registered...")
    }

    const isPasswordMatched = await bcrypt.compare(password, user.password)

    if(!isPasswordMatched){
        res.status(401)
        throw new Error("Incorrect email or password!");
    }

    sendToken(user, res);

})

exports.logoutUser = asyncHandler(async (req, res)=>{
    res.cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true
    })
    res.status(200).json({
        success: true,
        message: "Logged out!"
    })
})