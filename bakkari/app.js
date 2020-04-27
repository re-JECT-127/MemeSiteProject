'use strict';
require('dotenv').config();
const cors = require('cors');
const express = require('express');
const app = express();
const port = 3000;
const memeRoute = require('./routes/memeRoute');
//const userRoute = require('./routes/memeRoute');

app.use(cors());
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(express.static('public'));
app.use(express.static('uploads'));

app.use('/meme', memeRoute);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
