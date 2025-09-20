require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const authRoutes = require('./src/routes/auth');
const bugRoutes = require('./src/routes/bugs');

app.use('/api/auth', authRoutes);
app.use('/api/bugs', bugRoutes);

const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser:true, useUnifiedTopology:true})
  .then(()=> {
    console.log('Mongo connected');
    app.listen(PORT, ()=> console.log('Server running on', PORT));
  })
  .catch(err => {
    console.error('Mongo connection error:', err.message);
  });
