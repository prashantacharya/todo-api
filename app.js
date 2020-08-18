import cors from 'cors';
import express from 'express';
import { config } from 'dotenv';

import apiRouter from './api.routes';
import createError from './utils/createError';
config();

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', apiRouter);

app.use((req, res, next) => {
  next(createError(404, 'Page Not Found'));
});

app.use((error, req, res, next) => {
  res.status(error.status || 500).json({
    status: 'Error',
    message: error.message || 'Internal server error',
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
