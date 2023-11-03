// const mongoose = require('mongoose');
import mongoose from 'mongoose';

export const connectToDB = async () => {
    try {
        const dbURL = process.env.DB_URL;
        await mongoose.connect(dbURL);
        console.log("Connected to mongoDB");
    } catch (err) {
        console.log("Maamla fas gaya",err);
    }
}
