const express = require('express');
const router = express.Router();
const Photo = require('../model/Photo');
const multer = require('multer');

// https://www.youtube.com/watch?v=3f5Q9wDePzY

// define storage for the images

const storage = multer.diskStorage({
  // destination for files
  destination:function (request, file, callback){
    callback(null, './upload');
  },

  // add back the extension
  filename:function (request, file, callback){
    callback(null, Date.now() + file.originalname);
  }
});

// upload parameters for multer
const upload = multer({
  storage:storage,
  limits:{
    fieldSize: 1024 * 1024 * 3,
  }
})

router.post('/', upload.single('file'), async (req, res) => {
  console.log(request.file);
  const photo = new Photo ({
    title: req.body.title,
    img: req.file.filename,
  });
  try{
    photo = await photo.save
  } catch (error) {
    console.log(error)
  }
})


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