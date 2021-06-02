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
    const now = new Date()
    const date = now.toISOString().slice(0, 10);
    const activity = req.params.activity
    let feedback;

    if (req.body.startDate_activity && req.body.startTime_activity) {
        feedback = req.body.startDate_activity + req.body.startTime_activity;
    } else {
        console.error('something went wrong gathering the data')
        res.render("404.ejs", {
            error: 'Er is helaas iets fout gegaan in het opslaan van de data van de activeit'
        })
    }

    db.collection('Users').updateOne({
        email: req.session.user.user.email
    }, {
        $push: {
            activities: {
                date: date,
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

    function done(err) {
        if (err) {
            next(err);
        } else {
            res.redirect("/activities/" + activity + "/" + feedback); // redirect to overview
        }
    }
}

module.exports = newActivity;