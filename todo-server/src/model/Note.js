const mongoose = require('mongoose')


const NoteSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    describe:{
        type: String,
    },
    owner: {
        type: mongoose.Types.ObjectId, 
        ref: "User",
        required: true,
    }
}, {timestamps: true})


module.exports = mongoose.model("Note", NoteSchema)