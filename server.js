const express = require('express');
const compression = require('compression');
const path = require("path");
const app = express();
const port = process.env.PORT || 2000


// imports
const home = require('./routes/home');

// EXPRESS ROUTeS
app.use(express.static(path.resolve("public")))
    .use(compression());

// Routing
app.get("/", home)

app.listen(port, () => {
    console.log(`Server is working at http://localhost:${port}`)
});