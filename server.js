const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const db = require('./config/db.js');
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());


PORT =process.env.PORT || 8000;
db
app.listen(PORT, ()=>{
    console.log("Server is running on PORT:8000");
});