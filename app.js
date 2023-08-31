const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const userController = require('./controllers/userController');
const jobController = require('./controllers/jobController');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.post('/hire', userController.searchProviders);
app.post('/create-job', jobController.createJob);
app.post('/pay-job', jobController.payJob);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
