const express = require ('express');
const mongoose = require ('mongoose');
const app = express();
const bodyParser = require('body-parser');
const dotenv = require('dotenv/config');
const cors = require('cors');
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream')
const crypto = require('crypto');
const path = require('path');

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
//const photoRoute = require('./routes/photo');
const commentRoute = require('./routes/comments');

// Route middlewares
app.use('/admin', admin);
app.use('/user', auth);
app.use('/rsvp', rsvpRoute);
//app.use('/photos', photoRoute);
app.use('/comments', commentRoute);

// Connect to DB
mongoose.connect(
  process.env.databaseURL,
  {useNewUrlParser: true,
  useUnifiedTopology: true },
  () => console.log('connected')
);

var connection = mongoose.connection;

// Init gfs
let gfs; 

connection.once('open', () => {
  // Init stream
  gfs = Grid(connection.db, mongoose.mongo);
  gfs.collection('uploads');
});

// Create storage engine
const storage = new GridFsStorage({
  url: process.env.databaseURL,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = buf.toString('hex') + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketName: 'uploads'  //should match gfs.collection
        };
        resolve(fileInfo);
      });
    });
  }
});

// Get back all the post
app.get('/', (req, res) => {
  gfs.files.find().toArray((err, files) => {
    // Check if files 
    if(!files || files.lenght === 0) {
      return res.status(404).json({
        err: 'No files exist'
      })
    }

    // Files exist
    return res.json(files);
  })
});

// @route GET /
// @desc Loads form
// app.get('/', (req,res) => {
//   gfs.files.find().toArray((err, files) => {
//     // Check if files 
//     if(!files || files.lenght === 0) {
//       res.render({index, files: false});
//     } else {
//       files.map(file => {
//         if(
//           file.contentType === 'image/jpeg' || 
//           file.contentType === 'image/png'
//           ) {
//           file.isImage  = true;
//         } else {
//           file.isImage = false;
//         }
//       });
//       res.render({files: files});
//     }
//   });
// });

const upload = multer({ storage });

// @route POST /upload
// @desc Uploads file to DB
// "file" need to be the same as the forms input name
app.post('/upload', upload.single('file'), (req, res) => {
  // res.json({file: req.file});
});

// @route GET / files
//@desc Display all files i JSON
app.get('/photos/files', (req, res) => {
  gfs.files.find().toArray((err, files) => {
    // Check if files 
    if(!files || files.lenght === 0) {
      return res.status(404).json({
        err: 'No files exist'
      })
    }

    // Files exist
    return res.json(files);
  })
});

// @route GET / files/:filename
//@desc Display single file object
app.get('/photos/files/:filename', (req, res) => {
  gfs.files.findOne({filename: req.params.filename}, (err, file) => {
     // Check if files 
     if(!file || file.lenght === 0) {
      return res.status(404).json({
        err: 'No file exist'
      })
    }

    // File exist
    return res.json(file);
  });
});


// @route GET / image/:filename
//@desc Display Image
app.get('/image/:filename', async (req, res) => {
  try {
     await gfs.files.findOne({filename: req.params.filename}, (err, file) => {
      // Check if files 
      if(!file || file.lenght === 0) {
       return res.status(404).json({
         err: 'No file exist'
       });
     }
     // Check if image 
     if (file.contentType === 'image/jpeg' || file.contentType === 'image/png') {
       // Read output to browser 
       const readstream = gfs.createReadStream(file.filename);
       readstream.pipe(res);
     } else {
       res.status(404).json({
         err: 'Not an image'
       })
     }
    
   });
  } catch (err) {
    res.json({ message:err });
  }
  
});



// app.delete('/files/:id', (req, res) => {
//   gfs.remove({ _id: req.params.id }, (err) => {
//     if (err) return res.status(500).json({ success: false })
//       return res.json({ success: true });
//     })
// })

// Listen to server
app.listen(3000);