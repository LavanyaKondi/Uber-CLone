const express = require('express');
const app = express();
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(bodyParser.json());
const userRoutes = require('./routes/user');

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const mongoUrl = "mongodb+srv://user20:test123@cluster0.d0monoh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(mongoUrl, {
        useNewUrlParser: true,
    })
    .then(() => {
        console.log("connected database");
    })
    .catch((e) => console.log(e));



app.use('/api/user', userRoutes);
app.listen(5000, () => {
    console.log("server started ");
})