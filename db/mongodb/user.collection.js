const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema;
const UsersSchema = new Schema({
    username: {
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
    },
    password:{
        type:String,
        required:true,
        trim:true
    },
},{timestamps:true,toJSON: { virtuals: true }  })


// hash user password before saving into database
UsersSchema.pre('save', function (next) {
    this.password = bcrypt.hashSync(this.password, 10);
    next();
});

// Hash password when updating
UsersSchema.pre('findOneAndUpdate', function (next) {
    const update = this.getUpdate();
    if (update.password) {
        update.password = bcrypt.hashSync(update.password, 10);
    }
    next();
});

module.exports= mongoose.model('Users',UsersSchema)