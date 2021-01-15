const express = require ('express');
const mongoose = require ('mongoose');
const app = express();
const bodyParser = require('body-parser');
const dotenv = require('dotenv/config');
const cors = require('cors');

// Middleware
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

// Routes 
app.get('/', (req,res) => {
  res.send('we are on home');
});

// Import routes
const admin = require('./routes/admin');
const auth = require('./routes/auth');
const rsvpRoute = require('./routes/rsvp');
const photoRoute = require('./routes/photo');
const commentRoute = require('./routes/comments');

// Route middlewares
app.use('/admin', admin);
app.use('/user', auth);
app.use('/rsvp', rsvpRoute);
app.use('/photos', photoRoute);
app.use('/comments', commentRoute);
 
// Connect to DB
mongoose.connect(
  process.env.databaseURL,
  {useNewUrlParser: true,
  useUnifiedTopology: true },
  () => console.log('connected')
);

// Listen to server
app.listen(3000);