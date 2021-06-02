const port = process.env.PORT || 2000

const express = require('express');
const bodyParser = require("body-parser"); // load body parser for http requests

const compression = require('compression');
const path = require("path");
const app = express();
const session = require("express-session");



require("dotenv").config();

const connectMDB = require('./config/mongodbConfig')
connectMDB();


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
const feedbackActivity = require('./routes/feedbackActivity')
const savedActivity = require('./routes/savedActivity')

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
    .get("/activities/:activity/:feedback", feedbackActivity)
    .get("/activities/saved/:activity/:feedback", savedActivity)
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