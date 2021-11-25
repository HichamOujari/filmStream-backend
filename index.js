const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
var morgan = require('morgan')


const filmRouter = require('./routes/film')
const authRouter = require('./routes/auth')
const revueRouter = require('./routes/revue')


const port = process.env.PORT || 3001;
const db_local = 'mongodb://localhost:27017/movies'
const db_hosted = 'mongodb://iad2-c16-0.mongo.objectrocket.com:54660,iad2-c16-2.mongo.objectrocket.com:54660,iad2-c16-1.mongo.objectrocket.com:54660/movies?replicaSet=3aa74dc0afdd4a198d83c936f88e3060&ssl=true'

app.use(bodyParser.json());
app.use(morgan('dev'))
app.use(cors());
app.use(express.json());

app.use("/films", filmRouter)
app.use("/auth", authRouter)
app.use(revueRouter)

mongoose.connect(db_hosted, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});


app.get("/", (req, res) => {
    res.send("Welcome to FilmStream");
})

app.listen(port, () => {
    console.log('app running on port ' + port);
})