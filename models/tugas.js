const mongoose = require('mongoose');
const { Schema } = mongoose

const tugasSchema = new Schema({
    tittle: String,
    description: String,
    isDone: Boolean,
    user: {
        type: mongoose.ObjectId,
        ref: "User"
    }
    })

const Tugas = mongoose.model("Tugas", tugasSchema)

module.exports = Tugas