const express = require('express');
const path = require('path');
const app = express();

// Menyajikan file statis dari folder 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Routing utama ke index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Wajib diekspor untuk Vercel Serverless Function
module.exports = app;
