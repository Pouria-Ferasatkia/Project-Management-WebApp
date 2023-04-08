require('dotenv').config()
const express = require("express");
const cookieParser = require('cookie-parser');
const cors = require('cors')
const mongoose = require("mongoose");


const app = express();

app.use(cors());
app.use(cookieParser(''));
app.use(express.json())


mongoose.connect(process.env.DATA_BASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", (error) => {
    console.error(error)
    process.exit();
}); 
db.once("open", () => console.log("Connected to Database"));


app.use(express.json());


const userRouter = require('./src/routes/Route');

app.use('/api', userRouter)

app.listen(4000, () => console.log("Server Started on port 4000"));
