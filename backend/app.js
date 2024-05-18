const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

const userRoutes = require('./routes/users');
const symptomRoutes = require('./routes/symptoms');
const diagnosisRoutes = require('./routes/diagnosis');
const skinLesionRoutes = require('./routes/skinLesions');

app.use('/api/users', userRoutes);
app.use('/api/symptoms', symptomRoutes);
app.use('/api/diagnosis', diagnosisRoutes);
app.use('/api/skin-lesions', skinLesionRoutes);

mongoose.connect('mongodb://localhost:27017/SDAProject').then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

module.exports = app;
