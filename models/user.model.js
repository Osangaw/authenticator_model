import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true,
        unique: false
    },
    password: {
        type: String,
        required: true
    },
    //confirmPassword: {
    //type: String,
    //  required: true
    //},
    email : {
        type: String,
        required: true,
        unique: true
    },
    phoneNumber:{
        type: String,
        required: true,
        unique: true
    },
    profilePic: {
        type: String,
        default: '',
    },
    isFrozen: {
        type: Boolean,
        default: false
    },
    coverPhoto: {

    },
    
},
{timstamps: true
}
)

const User = mongoose.model('User', userSchema)
export default User