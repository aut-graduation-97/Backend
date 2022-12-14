const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    content: {
        type: String,
        required: [true, 'Comment requires content'],
        validate: {
            validator: (content) => content.length < 260,
            message: 'Comment must be less than 260 characters',
        }
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

const TarinSchema = new Schema({
    property: {
        type: String,
        required: [true, 'Tarin should contain a characteristic of person'],
    },
    voters: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'student',
        }
    ],
});

const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
    },
    studentId: {
        type: String,
        required: [true, 'Student id is required'],
        unique: true,
        dropDups: true,
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
    },
    github: String,
    spotify: String,
    email: String,
    phone: String,
    telegram: String,
    twitter: String,
    instagram: String,
    linkedin: String,
    bio: String,
    avatar: String,
    comments: [
        CommentSchema,
    ],
    tarin: [
        TarinSchema,
    ],
});

UserSchema.pre('remove', function (next) {
    const Tweet = mongoose.model('tweet');

    Tweet.deleteMany({userId: this._id})
        .then(() => {
            next();
        });
});

UserSchema.pre('save', function(next){
    bcrypt.hash(this.password , 10 , (err,hash) => {
        this.password = hash
        next()
    })
})

UserSchema.pre('findOneAndUpdate', function(next){
    const update = this.getUpdate();
    bcrypt.hash(update.$set.password , 10 , (err,hash) => {
        update.$set.password = hash
        next()
    })
})

const User = mongoose.model('user', UserSchema);
module.exports = User;

