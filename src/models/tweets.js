const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TweetSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    },
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user',
        }
    ],
    text: {
        type: String,
        required: [true, 'Text is required'],
        validate: {
            validator: (text) => text.length <= 180,
            message: "Text must be less than 180 characters"
        },
    },
    images: [
        {
            type: String,
            validate: {
                validator: (image) => image.length <= 200,
                message: "Image URL must be less than 200 characters"
            }
        },
    ],
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

TweetSchema.virtual('likesCount').get(function () {
    return this.likes.length;
});

const Tweet = mongoose.model('tweet', TweetSchema);
module.exports = Tweet;
