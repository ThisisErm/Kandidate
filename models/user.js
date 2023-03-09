const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const Schema = mongoose.Schema

const SALT_ROUNDS = 6

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        //trim takes off white space at start and end
        trim: true,
        lowercase: true,
        required: true
    },
    password: {
        type: String,
        trim: true,
        minLength: 3,
        required: true
    }
},{
    timestamps: true,
    //gets rid of password 
    toJSON: {
        transform: function(doc, user){
            delete user.password
            return user
        }
    }
})


    //before save run this async function
userSchema.pre("save", async function(next){
    if (!this.isModified("password")) return next()
    this.password = await bcrypt.hash(this.password, SALT_ROUNDS)
    return next()
})


module.exports = mongoose.model("User", userSchema)