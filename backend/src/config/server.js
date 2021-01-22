const port = 3003;
const bodyParser = require('body-parser');
const express = require('express');
const cors = require('./cors');
const queryParser = require('express-query-int');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors);
app.use(queryParser());

app.listen(port, () => {
  console.log(`BACKEND is running on ${port}`);
});

module.exports = app;
