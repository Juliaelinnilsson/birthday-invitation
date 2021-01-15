const express = require('express');
const router = express.Router();
const Rsvp = require('../model/Rsvp');

// Get back all the post
router.get('/', async (req,res) => {
  try {
    const rsvps = await Rsvp.find();
    res.json(rsvps)
  } catch (err) {
    res.json({ message: err });
  }
});

// Submits a post
router.post('/', async (req,res) => {
  const rsvp = new Rsvp({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    allergy: req.body.allergy,
    other: req.body.other
  });
  try { 
  const savedRsvp = await rsvp.save();
  res.json(savedRsvp);
  } catch (err) {
    res.json({ message: err });
  }
});

// Specific rsvp
router.get('/:rsvpId', async (req, res) => {
  try {
    const rsvp = await Rsvp.findById(req.params.rsvpId);
    res.json(rsvp);
  } catch (err) {
    res.json({ message:err });
  }
});

// Delete rsvp
router.delete('/:rsvpId', async (req, res) => {
  try {
    const removedRsvp = await Rsvp.remove({ _id: req.params.rsvpId });
    res.json(removedRsvp);
  } catch (err) {
    res.json({ message:err });
  }
});

// Update a rsvp
router.patch('/:rsvpId', async (req, res) => {
  try {
    const updatedRsvp = await Rsvp.updateOne(
      { _id: req.params.rsvpId  },
      { $set: { firstname: req.body.firstname }}
    );
    res.json(updatedRsvp);
} catch (err) {
  res.json({ message:err });
}
});

module.exports = router;