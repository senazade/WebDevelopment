//import express from 'express';
//import unless from 'express-unless';
//import bodyParser from 'body-parser';
//import helmet from 'helmet';
//import logger from 'morgan';

const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const logger = require('morgan');
const cors = require('cors');


const app = express();
const port = process.env.PORT || 3000;

//ekspresot koristi:
app.use(helmet());
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser,urlencoded());
app.use(bodyParser.json());

app.emit('hi', 'zdravo');
app.emit('hello', 'dobar den');
app.on('hi', (data) =>
{
    console.log(data);
})

// const a = 5;
// const b = 6;
// const zbir = a + b;
// console.log(`Suma na
//  ${a} i ${b} e
//  ${zbir}`)

app.listen(port, () => {
    consolde.log(`API Server is listening on ${port}`);
});
