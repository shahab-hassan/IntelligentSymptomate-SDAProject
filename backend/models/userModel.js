const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please enter username..."],
        unique: [true, "Username is already taken!"],
        // validate: [validator.isAlphanumeric, "Username can't contain special characters..."]
    },
    email: {
        type: String,
        required: [true, "Please enter your email..."],
        unique: true,
        validate: [validator.isEmail, "Please enter a valid email..."]
    },
    password: {
        type: String,
        // required: [true, "Please Enter Your Password"],
        minLength: [8, "Password should be greater than 8 characters"],
        select: false,
    },
    googleId: {
        type: String,
    },
    facebookId: {
        type: String,
    },
},
    {
        timestamps: true
    }
)

module.exports = mongoose.model("User", userSchema);