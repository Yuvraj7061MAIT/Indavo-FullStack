const port = 4000;
const express = require('express');


const app = express();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');
const cors = require('cors');



app.use(express.json());
app.use(cors());

// Database Connection
const uri = "mongodb+srv://yuvraj7061:Yuvraj7061@@cluster0.z9fvq.mongodb.net"; // Corrected connection string
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));

// API Creation
app.get('/', function(req, res) {
    res.send('Express app is running');
});








app.listen(port , (err, res) => {
    if(err) throw err;
    console.log(`Server is running on port ${port}`);
});
