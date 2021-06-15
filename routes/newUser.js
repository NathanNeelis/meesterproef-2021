const User = require('../models/user');

// register data to database
function newUser(req, res, next) {
    User.findOne({
        email: req.body.signupMail
    }, (err, user) => {
        if (err) {
            console.log('MongoDB Error:' + err);
        } else if (user) {
            console.log('error: user already in database')
            res.render('register.ejs', {

            });
        } else {
            User.create({
                    email: req.body.signupMail,
                    password: req.body.signupPassword,
                    name: req.body.fullName,
                    birthDate: req.body.birthDate,
                    location: req.body.location,
                    hipper_details: {
                        pam_client_id: req.body.pam_client_id,
                        hipperbox_id: req.body.hipperbox_id,
                        startdate: req.body.startdate_hipper
                    },
                },
                done
            );
        }
    });








    function done(err, data) {
        if (err) {
            next(err);
        } else {
            res.redirect("/");
        }
    }
}

module.exports = newUser;