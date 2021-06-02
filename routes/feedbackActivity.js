// UTILS
const findActivity = require('../utils/findActivitie')
const mongo = require("mongodb");

var db = null;
var url = "mongodb+srv://" + process.env.DB_HOST;

mongo.MongoClient.connect(
    url, {
        useUnifiedTopology: true,
    },
    function (err, client) {
        if (err) {
            throw err;
        }

        db = client.db(process.env.DB_NAME);
    }
);

const feedbackActivity = async (req, res) => {
    if (req.session.user) {
        const feedback = req.params.feedback

        // STEP 1: Find the user data
        const data = await db.collection("Users").findOne({
            email: req.session.user.user.email
        });

        // STEP 2: Find the activity
        const foundActivity = findActivity(feedback, data);

        res.render('feedback_activity.ejs', {
            foundActivity: foundActivity
        });
    } else {
        res.render('login.ejs', {
            error: false,
        })
    }
};

module.exports = feedbackActivity;