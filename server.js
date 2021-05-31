const port = process.env.PORT || 2000

const express = require('express');
const bodyParser = require("body-parser"); // load body parser for http requests
const mongo = require("mongodb");
const compression = require('compression');
const path = require("path");
const app = express();
const session = require("express-session");

require("dotenv").config();

// database connection
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

// Routes
const home = require('./routes/home');
const activities = require('./routes/activities')
const login = require('./routes/login')
const register = require('./routes/register')
const newUser = require('./routes/newUser')
const loginpost = require('./routes/loginpost')
const logout = require('./routes/logout')
const info = require('./routes/info')
const profile = require('./routes/profile')
const logActivity = require('./routes/logActivity')
const newActivity = require('./routes/postActivity')

// Utils
const userRedirectLogin = require('./utils/userRedirectLogin')

// EXPRESS ROUTeS
app.use(express.static(path.resolve("public")))
    .use(compression())
    .use(
        bodyParser.urlencoded({
            extended: true,
        })
    )
    .use(session({
        resave: false,
        saveUninitialized: true,
        secret: process.env.SESSION_SECRET
    }));;

// Routing
app.get("/", userRedirectLogin, home)
    .get("/activities", userRedirectLogin, activities)
    .get("/activities/:activity", logActivity)
    .get("/login", login)
    .get("/register", register)
    .get("/logout", logout)
    .get("/info", info)
    .get("/profile", profile)

app.post("/register", newUser)
    .post("/login", loginpost)
    .post("/activities/:activity", newActivity)

app.listen(port, () => {
    console.log(`Server is working at http://localhost:${port}`)
});