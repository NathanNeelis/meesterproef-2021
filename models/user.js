const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
SALT_WORK_FACTOR = 10;

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        index: {
            unique: true
        }
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    birthDate: {
        type: Date,
        required: false
    },
    location: {
        type: String,
        required: false,
    },
    hipper_details: {
        type: Object,
        required: true,
        pam_client_id: {
            type: String,
            required: true,
        },
        hipperbox_id: {
            type: Number,
            required: true,
        },
        startdate: {
            type: Date,
            required: false,
        },
    },
    activities: {
        type: Object,
        required: false,
        date: {
            type: String,
            required: false,
        },
        activity: {
            type: Object,
            required: false,
            activity: {
                type: String,
                required: false,
            },
            startDate_activity: {
                type: String,
                required: false,
            },
            startTime_activity: {
                type: String,
                required: false,
            },
            endDate_activity: {
                type: String,
                required: false,
            },
            endTime_activity: {
                type: String,
                required: false,
            },
            duration: {
                type: String,
                required: false,
            },
            pamScore: {
                type: Number,
                required: false,
            }
        }

    },
    planned_activities: {
        type: Object,
        required: false,
        date: {
            type: String,
            required: false,
        },
        activities: {
            type: Object,
            required: false,

            wandelen: {
                type: String,
                required: false,
            },
            boodschappen: {
                type: String,
                required: false,
            },
            stofzuigen: {
                type: String,
                required: false,
            },
            tuinieren: {
                type: String,
                required: false,
            },
            fietsen: {
                type: String,
                required: false,
            },
            oefeningen: {
                type: String,
                required: false,
            },
            overige: {
                type: String,
                required: false,
            },
        }
    }
})

// RESOURCE: https://www.mongodb.com/blog/post/password-authentication-with-mongoose-part-1


userSchema.pre('save', function (next) {
    var user = this;

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();

    // generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
        if (err) return next(err);

        // hash the password using our new salt
        bcrypt.hash(user.password, salt, function (err, hash) {
            if (err) return next(err);

            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });


});

userSchema.methods.comparePassword = function (candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

const User = mongoose.model('users', userSchema);
module.exports = User;