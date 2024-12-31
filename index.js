const express = require('express')
const dotnet = require('dotenv');
dotnet.config()
const bodyParser = require('body-parser');

const connectDB = require('./db/connection.database');
const app = express()

connectDB();
app.get('/', function (req, res) {
  res.send('Hello World')
})
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api',require('./apis/routes/auth.route'));
app.use('/api/tasks',require('./apis/routes/task.route'));
app.listen(3000)