const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');

const port = 3000;
const mongoURI = 'mongodb://localhost:27017/DevOps-Examen';
mongoose.connect(mongoURI)
    .then(() => console.log('MongoDB conectado exitosamente'))
    .catch(err => console.error('MongoDB error de connecion:', err));

app.get('/index-1.html', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'public', 'index-1.html'));
});

app.get('/index-2.html', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'public', 'index-2.html'));
});

app.use(express.json());

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});