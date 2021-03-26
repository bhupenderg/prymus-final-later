const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs');


const Schema = mongoose.Schema
const clientSchema = new Schema({
     name: {
         type: String,
         required: [true, 'Fill in your name'],
         trim: true
     },
     email: {
        type: String,
        required: [true, 'Please provide an email address'],
        trim: true,
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'Please provide a valid email']
     },
     password: {
        type: String,
        required: [true, 'Please provide a password'],
        minlength: 8,
        select: false
    },
    passwordConfirm: {
        type: String,
        required: true,
        validate : {
            validator: function(el) {
              return el === this.password
            },
            message: "Password is not matching"
        }
    },

    phone:{
        type: Number,
        required: true,
        trim: true,
        minlength: 10,
        maxlength: 10
    },
    city:{
        type: String,
        required: true,
        trim: true
    },
    state:{
        type: String,
        required: true,
        trim: true
    },
    pincode:{
        type: Number,
        required: true,
        trim: true
    },
    country:{type: String,
        required: true,
        trim: true},
    confirmation:{
        type: Boolean,
        default: false
    }    

},
{
    timestamps: true
})

clientSchema.pre('save', async function(next) {
    // only works if password is modified
    if(!this.isModified('password')) {
            return next()
    }
    

    // hash with the cost of 12
    this.password = await bcrypt.hash(this.password, 12)
    // denying password confirm to get enter into mongodb
    this.passwordConfirm = undefined;
    next();
})

clientSchema.methods.correctPassword = async function(candidatePassword, clientPassword) {
    return await bcrypt.compare(candidatePassword, clientPassword)
}


const Client = mongoose.model('Client', clientSchema)

module.exports = Client;