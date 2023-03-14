import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';

// init express
const app = express();
dotenv.config();

// env setup
const PORT = process.env.PORT || 5050;

// listen the server
app.listen(PORT, () => console.log(`Server running: ${PORT}`.bgCyan));
