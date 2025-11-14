const express = require('express');
const path = require('path');
const cors = require('cors');
const authRoutes = require('./routes/userRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Статика (фронтенд)
app.use(express.static(path.join(__dirname, '../public')));

// API маршрути
app.use('/api/auth', authRoutes);

// Відкриття головної сторінки
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'login.html'));
});

module.exports = app;
