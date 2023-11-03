// const express = require('express');
// const {connectToDB} = require ('./config/db');
import express from 'express';
import { connectToDB } from './config/db.js';
import router from './src/job.routes.js';
const app = express();
import dotenv from 'dotenv';
dotenv.config();

app.use(express.json()); // IMPORTANT HAI
app.use('/', router);


app.listen(3000, () => {
    console.log("Server is listening on 3000");
    connectToDB();
})