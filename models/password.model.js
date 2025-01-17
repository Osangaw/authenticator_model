import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    
    userName: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
})