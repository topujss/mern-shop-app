import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import cors from 'cors';
import categoryRoute from './routes/categoryRoute.js';
import brandRoute from './routes/brandRoute.js';
import tagRoute from './routes/tagRoute.js';
import mongoDBConnect from './config/db.js';
import { serverError } from './middlewares/serverErrorHandler.js';

// init express
const app = express();
dotenv.config();

// env setup
const PORT = process.env.PORT || 5050;

// middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// set static folder
app.use(express.static('api/public'));

// route prefix
app.use(process.env.API_PREFIX, categoryRoute);
app.use(process.env.API_PREFIX, brandRoute);
app.use(process.env.API_PREFIX, tagRoute);

app.use(serverError);

// listen the server
app.listen(PORT, () => {
  mongoDBConnect();
  console.log(`Server running: ${PORT}`.bgCyan);
});
