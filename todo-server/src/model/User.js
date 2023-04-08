const mongoose = require('mongoose')
const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require('uuid');
const { Role } = require('../../Role');


const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    session:{
        type: String
    },
    role:{
        type: String,
        enum: Role,
        default: Role.USER,
    }
    
}, {timestamps: true})

UserSchema.pre('save', async function(next) { 
    const password = this.password 
    this.password = await bcrypt.hash(password, 10);
    this.session = uuidv4();
    next();
});


module.exports = mongoose.model("User", UserSchema)