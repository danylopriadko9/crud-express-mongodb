import express from 'express';
import mongoose from 'mongoose';
import router from './router.js';

import * as dotenv from 'dotenv';
dotenv.config();

const PORT = 5000;

const DB_URL = `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@paymentstoreapp.wruui.mongodb.net/?retryWrites=true&w=majority`;

const app = express();
app.use(express.json());
app.use('/api', router);

const startApp = async () => {
  try {
    await mongoose
      .connect(DB_URL)
      .then(() => console.log('DB Connect Success!'));
    app.listen(5000, () => {
      console.log(`Server is running on ${PORT} port!`);
    });
  } catch (error) {
    console.log(error);
  }
};

startApp();
