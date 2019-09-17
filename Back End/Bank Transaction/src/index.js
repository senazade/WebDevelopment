import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import logger from 'morgan';
import cors from 'cors';
import unless from 'express-unless';
import jwt from 'express-jwt';

import mainRouter from './Routing/router';

const app = express();
const port = process.env.PORT || 3001;

app.use(logger('dev'));
app.use(cors());
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: '*/*' }));

app.use(mainRouter);

app.listen(port, () => {
    console.log(`API Server is listening on ${port}`);
  });