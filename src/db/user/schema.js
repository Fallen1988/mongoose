const mongoose = require('mongoose');

const UserServicesSchema = {
    google: {
        fullName: String,
        accessToken: String,
        refreshToken: String,
    },
};

const UserProfileSchema = {
    fullName: {
        type: String,
        required: [true, 'You have  to fill up full name field'],
        lowercase: true,
        trim: true,
        minlength: [5, 'Your full name is too short'],
    },
    post: String,
};

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    profile: UserProfileSchema,
    services: { type: UserServicesSchema },
});

module.exports = mongoose.model("User", UserSchema);