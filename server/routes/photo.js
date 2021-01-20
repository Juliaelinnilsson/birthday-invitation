const express = require('express');
const router = express.Router();
const Photo = require('../model/Photo');
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream')
const crypto = require('crypto');

// Init gfs
let gfs; // Detta ska göras

conn.once('open', () => {
  // Init stream
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection('uploads');
});

// Create storage engine
const storage = new GridFsStorage({
  url: mongoURI,
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

const upload = multer({ storage });

// @route GET /
// @desc Loads form
app.get('/', (req,res) => {
  gfs.files.find().toArray((err, files) => {
    // Check if files 
    if(!files || files.lenght === 0) {
      res.render('index', {files: false});
    } else {
      files.map(file => {
        if(
          file.contentType === 'image/jpeg' || 
          file.contentType === 'image/png'
          ) {
          file.isImage  = true;
        } else {
          file.isImage = false;
        }
      });
      res.render('index', {files: files});
    }
  });
});

// @route POST /upload
// @desc Uploads file to DB
// "file" need to be the same as the forms input name
app.post('/upload', upload.single('file'), (req, res) => {
  // res.json({file: req.file});
  res.redirect('/')
});

// @route GET / files
//@desc Display all files i JSON
app.get('/files', (req, res) => {
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
app.get('/files/:filename', (req, res) => {
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
app.get('/image/:filename', (req, res) => {
  gfs.files.findOne({filename: req.params.filename}, (err, file) => {
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
});



// https://www.youtube.com/watch?v=3f5Q9wDePzY

// define storage for the images

// const storage = multer.diskStorage({
//   // destination for files
//   destination:function (req, file, callback){
//     callback(null, './uploads');
//   },

//   // add back the extension
//   filename:function (req, file, callback){
//     callback(null, Date.now() + file.originalname);
//   }
// });

// // upload parameters for multer
// const upload = multer({
//   storage:storage,
//   limits:{
//     fieldSize: 1024 * 1024 * 3,
//   }
// })

// router.post('/', upload.single('file'), async (req, res) => {
//   console.log(request.file);
//   const photo = new Photo ({
//     title: req.body.title,
//     img: req.file.filename,
//   });
//   try{
//     photo = await photo.save
//   } catch (error) {
//     console.log(error)
//   }
// })


// // Post a photo
// router.post('/', async (req,res) => {
//   const photo = new Photo({
//     photo: req.body.photo,
//   });
//   try { 
//     const savedPhoto = await photo.save();
//     res.json(savedPhoto);
//   } catch (err) {
//     res.json({ message: err });
//   }
// });

// // Get back all the photos
// router.get('/', async (req,res) => {
//   try {
//     const photos = await Photo.find();
//     res.json(photos)
//   } catch (err) {
//     res.json({ message: err });
//   }
// });

// // Specific photo
// router.get('/:photoId', async (req, res) => {
//   try {
//     const photo = await Photo.findById(req.params.photoId);
//     res.json(photo);
//   } catch (err) {
//     res.json({ message:err });
//   }
// });

// // Delete photo
// router.delete('/:photoId', async (req, res) => {
//   try {
//     const removedPhoto = await Photo.remove({ _id: req.params.photoId });
//     res.json(removedPhoto);
//   } catch (err) {
//     res.json({ message:err });
//   }
// });

module.exports = router;