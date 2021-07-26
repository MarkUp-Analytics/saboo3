/* require npm package */
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const multer = require('multer');
const upload = multer();

/* require config and routes */
const config = require("./config/server");

const passport = require("./config/passport");

/* Object Created */
const app = express();

// for parsing application/json
app.use(bodyParser.json()); 

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true })); 

// for parsing multipart/form-data
app.use(upload.array());

/* loading routes. */
const testRoutes = require("./api/routes/Test");
const userRoutes = require("./api/routes/Users");


/* Entry Point Start */
app.all("/api/", (req, res) => {
    res.status(200).json({
        status: true,
        message: "Welcome to Saboo3 app"
    })
})

app.use("/api/test", testRoutes);
app.use("/api/users", userRoutes);
/* Entry Point End */

/* No Route Found Start */
app.use((req, res, next) => {
    const error = new Error("NO Route Found");
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            status: false,
            message: error.message
        }
    });
});
/* No Route Found End */

/* Server Start */
app.listen(config.SERVER_PORT, () =>
    console.log(`Access server with the following link - http://localhost:${config.SERVER_PORT}`)
);

/* Connect To MongoDB */
mongoose.connect(
    config.mongodb.MONGO_URL, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err, db) => {
        if (err) throw err;
        console.log(`MongoDB connected on port ${config.mongodb.MONGO_PORT}`);
    }
);
mongoose.Promise = global.Promise;