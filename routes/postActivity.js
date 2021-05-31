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


// save activity to database
function newActivity(req, res, next) {
    const username = req.session.user.user.email;
    const date = new Date();
    const time = Date.now();

    db.collection('Users').updateOne({
        email: username
    }, {
        $push: {
            activities: {
                date: date,
                time: time,
                activity: {
                    activity: req.body.sort_activity,
                    start_activity: req.body.start_activity,
                    end_activity: req.body.end_activity,
                    duration: req.body.duration_activity
                },
            },
        }
    }, done);

    function done(err, data) {
        if (err) {
            next(err);
        } else {
            res.redirect("/"); // redirect to overview
        }
    }
}

module.exports = newActivity;