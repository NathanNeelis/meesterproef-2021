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
    const username = req.body.loginEmail;
    const password = req.body.loginPassword

    const findUser = () => {
        db.collection("Users").findOne({
            email: username
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
        if (password === user.password) {
            req.session.sessionID = user._id;
            res.redirect('/');
        } else {
            res.render('login.ejs', {
                error: true,
                email: username
            });

        };
    }

    if (req.body.loginEmail && req.body.loginPassword) {
        findUser();
    } else {
        res.render('login.ejs', {
            error: true,
            email: username
        });
    }
};

module.exports = loginpost;