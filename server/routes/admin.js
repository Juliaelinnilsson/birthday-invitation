const express =  require('express');
const router =  express.Router();
const Admin =  require('../model/Admin');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const {registerValidation, loginValidation} = require('../validation');

router.post('/registration', async (req,res)=>{
  //Validation
  const {error} = registerValidation(req.body);
  if(error) return res.status(400).send(error.details[0].message)

  //checking admin in db
  const emailExist = await Admin.findOne({email: req.body.email});
  if(emailExist) return res.status(400).send('email already exist');
  
  //Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  //create new admin
  const admin = new Admin({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    password: hashedPassword
  });
  try{
    const savedAdmin = await admin.save();
    res.send({admin: admin._id});
  }catch(err){
    res.status(400).send(err);
  }
});

router.post('/login', async (req,res)=>{
  //Validate the data before we a admin
  const {error} = loginValidation(req.body);
  if(error) return res.status(400).send(error.details[0].message);
  
  //Checking if the email exist
  const admin = await Admin.findOne({email: req.body.email});
  if(!admin) return res.status(400).send('email or password is wrong');
 
  //Check if password is correct
  const validPass = await bcrypt.compare(req.body.password, admin.password);
  if(!validPass) return res.status(400).send('Invalid password');
 
  //Create and assign token
  const token = jwt.sign({_id: admin._id}, process.env.tokenSecret);
  res.header('auth-token', token).send(token);

  res.send('logged in')
});

module.exports = router;