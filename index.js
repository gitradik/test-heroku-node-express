const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const router = require('./router');

const PORT = process.env.PORT || 80;

app.use(cors());
app.use(express.json());
app.use(router);
app.use('/static/image',
    express.static(__dirname + process.env.IMG_URL, { fallthrough: true }),
    function (req, res) {
        res.sendFile(__dirname + process.env.IMG_URL + '/' + process.env.IMG_DEFAULT_NAME);
    },
);

app.listen(PORT);