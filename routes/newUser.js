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
        console.log("Connected correctly to MongoDB server");
    }
);


// register data to database
function newUser(req, res, next) {
    db.collection("Users").insertOne({
            email: req.body.signupMail,
            password: req.body.signupPassword,
            name: req.body.fullName,
            birthDate: req.body.birthDate,
            location: req.body.location,
            medical_information: {
                practice: req.body.practice,
                duration_revalidation: req.body.duration_revalidation,
                cause: req.body.cause_revalidation,
                remarks: req.body.remarks
            },
            hipper_details: {
                pam_client_id: req.body.pam_client_id,
                startdate: req.body.startdate_hipper
            },
        },
        done
    );


    function done(err, data) {
        if (err) {
            next(err);
        } else {
            res.redirect("/");
        }
    }
}

module.exports = newUser;