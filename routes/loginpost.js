// const User = require('../models/user');
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
        // console.log("Connected correctly to MongoDB server");
    }
);


// logs in a user and gives it a session
function loginpost(req, res) {
    const password = req.body.loginPassword

    const findUser = () => {
        db.collection('Users').findOne({
            email: req.body.loginEmail
        }, (err, user) => {
            if (err) {
                console.log('MongoDB Error:' + err);
            } else if (user) {
                checkPassword(user);
            } else {
                res.render('login.ejs', {

                });
            }
        });
    };

    const checkPassword = (user) => {
        if (req.body.loginPassword === user.password) {
            req.session.sessionID = user._id;
            req.session.user = {
                user: user
            }
            res.redirect('/');
        } else {
            res.render('login.ejs', {
                error: true,
                email: req.body.loginEmail
            });

        };
    }

    if (req.body.loginEmail && req.body.loginPassword) {
        findUser();
    } else {
        res.render('login.ejs', {
            error: true,
            email: req.body.loginEmail
        });
    }
};


// const loginpost = (req, res) => {
//     const findUser = () => {
//         User.findOne({
//             email: req.body.loginEmail
//         }, (err, user) => {
//             if (err) {
//                 console.log('MongoDB Error:' + err);
//             } else if (user) {
//                 console.log(user)
//                 checkPassword(user);
//             } else {
//                 res.render('login.ejs', {

//                 });
//             }
//         });
//     };

//     const checkPassword = (user) => {
//         user.comparePassword(req.body.loginPassword, (err, matches) => {
//             if (err) {
//                 console.log(err);
//             } else if (matches) {
//                 req.session.sessionID = user._id;
//                 req.session.user = {
//                     user: user
//                 }
//                 res.redirect('/');
//             } else if (!matches) {
//                 res.render('login', {
//                     data: req.body
//                 });
//             }
//         });
//     };

//     if (req.body.loginEmail && req.body.loginPassword) {
//         findUser();
//     } else {
//         res.render('login.ejs', {
//             error: true,
//             email: req.body.loginEmail
//         });
//     }
// };

module.exports = loginpost;