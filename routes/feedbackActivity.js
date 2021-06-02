// UTILS
const findActivity = require('../utils/findActivitie')
const User = require('../models/user');

const feedbackActivity = async (req, res) => {
    if (req.session.user) {
        const feedback = req.params.feedback

        // STEP 1: Find the user data
        const data = await User.findOne({
            email: req.session.user.user.email
        });

        // STEP 2: Find the activity
        const foundActivity = findActivity(feedback, data);

        res.render('activity_detailpage.ejs', {
            foundActivity: foundActivity
        });
    } else {
        res.render('login.ejs', {
            error: false,
        })
    }
};

module.exports = feedbackActivity;