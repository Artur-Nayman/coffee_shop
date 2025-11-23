require("dotenv").config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const authRoutes = require('./routes/userRoutes');
const adminRoutes = require('./routes/adminRoutes');
const db = require('./config/db');


const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../public')));

app.use('/api/auth', authRoutes);
app.use('/admin',adminRoutes);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'login.html'));
});

module.exports = app;
