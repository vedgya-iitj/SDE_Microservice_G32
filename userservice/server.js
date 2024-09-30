const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI_USERS, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("User MongoDB connected"))
    .catch(err => console.log(err));

// Import Routes
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

// Basic route
app.get('/', (req, res) => {
    res.send('User Service API');
});

app.listen(PORT, () => {
    console.log(`User Service running on port ${PORT}`);
});
