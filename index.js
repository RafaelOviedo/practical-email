const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const port = 3000;
const routes = require('./src/routes/index');

dotenv.config();

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

app.use('/', routes);

app.listen(port, () => {
  console.log('App running on port 3000')
})

module.exports = app;