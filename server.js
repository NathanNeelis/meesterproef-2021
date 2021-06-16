require("dotenv").config();

const port = process.env.PORT || 2000
const express = require('express');
const bodyParser = require("body-parser"); // load body parser for http requests
const compression = require('compression'); // compression pages
const path = require("path"); // path for easy paths
const app = express(); // save express to app variable
const session = require("express-session"); // sessions for login cookie

// database connection
const connectMDB = require('./config/mongooseConfig') // load Mongoose config
connectMDB(); // connect with database

// Routes
const home = require('./routes/home');
const activities = require('./routes/activities')
const login = require('./routes/login')
const offline = require('./routes/offline')
const register = require('./routes/register')
const newUser = require('./routes/newUser')
const loginpost = require('./routes/loginpost')
const logout = require('./routes/logout')
const info = require('./routes/info')
const profile = require('./routes/profile')
const logActivity = require('./routes/logActivity')
const newActivity = require('./routes/postActivity')
const feedbackActivity = require('./routes/feedbackActivity')
const savedActivity = require('./routes/savedActivity')
const planActivities = require('./routes/planActivities')

// Utils
const userRedirectLogin = require('./utils/userRedirectLogin')

// Static path, compression, bodyparser and sessions
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
    .get("/activities/:activity/:feedback", feedbackActivity)
    .get("/activities/saved/:activity/:feedback", savedActivity)
    .get("/login", login)
    .get("/register", register)
    .get("/logout", logout)
    .get("/info", info)
    .get("/profile", profile)
    .get("/offline", offline)

app.post("/register", newUser)
    .post("/login", loginpost)
    .post("/activities", planActivities)
    .post("/activities/:activity", newActivity)


app.listen(port, () => {
    console.log(`Server is working at http://localhost:${port}`)
});