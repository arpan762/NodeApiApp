const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();
const bodyParser = require('body-parser')

const Route = require('./routes/posts');

const port = 3000;

app.use(bodyParser.json());
app.use('/posts', Route);


mongoose.connect(process.env.DB_CONNECTION)
        .then(() => {
         console.log('Connected!')
         app.listen(port, () => {
             console.log(`server Running on port ${port}`);
        });
        }).catch((error) => console.log(error));