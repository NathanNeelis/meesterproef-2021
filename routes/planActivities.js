const User = require('../models/user');
const findAndUpdatePlanning = require('../utils/findAndUpdatePlanning')

// save activity to database
async function planActivity(req, res, next) {
    const foundUser = await User.findOne({
        email: req.session.user.user.email,
        "planned_activities.date": req.body.date_plan_activity
    });

    let date = req.body.date_plan_activity

    let newPlanning = {
        date: req.body.date_plan_activity,
        activities: {
            wandelen: req.body.plan_wandelen,
            boodschappen: req.body.plan_boodschappen,
            stofzuigen: req.body.plan_stofzuigen,
            tuinieren: req.body.plan_tuinieren,
            fietsen: req.body.plan_fietsen,
            oefeningen: req.body.plan_oefeningen,
            overige: req.body.plan_overige,
        }
    }

    if (foundUser) {
        const newArr = findAndUpdatePlanning(foundUser, date, newPlanning);

        User.updateOne({
            email: req.session.user.user.email,
        }, {
            $set: {
                planned_activities: newArr
            }

        }, done);

    } else {
        User.updateOne({
            email: req.session.user.user.email,
        }, {
            $push: {
                planned_activities: {
                    date: req.body.date_plan_activity,
                    activities: {
                        wandelen: req.body.plan_wandelen,
                        boodschappen: req.body.plan_boodschappen,
                        stofzuigen: req.body.plan_stofzuigen,
                        tuinieren: req.body.plan_tuinieren,
                        fietsen: req.body.plan_fietsen,
                        oefeningen: req.body.plan_oefeningen,
                        overige: req.body.plan_overige,
                    },
                },
            }

        }, done);
    }

    function done(err) {
        if (err) {
            next(err);
        } else {
            res.redirect("/activities"); // redirect to activities
        }
    }
}

module.exports = planActivity;