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

    const now = new Date()
    const date = now.toISOString().slice(0, 10);
    let time = now.getHours() + ":" + now.getMinutes()


    db.collection('Users').updateOne({
        email: username
    }, {
        $push: {
            activities: {
                date: date,
                time: time,
                activity: {
                    activity: req.body.sort_activity,
                    startDate_activity: req.body.startDate_activity,
                    startTime_activity: req.body.startTime_activity,
                    endDate_activity: req.body.endDate_activity,
                    endTime_activity: req.body.endTime_activity,
                    duration: req.body.duration_activity,
                    pamScore: 0,
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