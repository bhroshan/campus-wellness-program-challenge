const asyncHandler = require('express-async-handler');

const Challenge = require('../models/challenge');
const User = require('../models/users');

//@desc     Get challenge (s)
//@route    GET /api/challenges
//@access   Private
const getChallenges = asyncHandler(async (req, res) => {
  const challenges = await Challenge.find({ user: req.user.id });
  res.status(200).json(challenges);
});

//@desc     Set challenge (s)
//@route    POST /api/challenges
//@access   Private
const setChallenge = asyncHandler(async (req, res) => {
  if (!req.body.title && !req.body.description && !req.body.instructions) {
    res.status(400);
    throw new Error('Please fill out the all field');
  }

  const challenge = await Challenge.create({
    title: req.body.title,
    description: req.body.description,
    instructions: req.body.instructions,
    user: req.user.id,
  });

  res.status(200).json(challenge);
});

//@desc     Update challenge (s)
//@route    PUT /api/challenges/:id
//@access   Private
const updateChallenge = asyncHandler(async (req, res) => {
  const challenge = await Challenge.findById(req.params.id);

  if (!challenge) {
    res.status(400);
    throw new Error('Challenge not found');
  }

  const user = await User.findById(req.user.id);

  //Check for User exists or not
  if (!user) {
    res.status(401);
    throw new Error('User not found');
  }

  //Only login user matches the challenge user
  if (challenge.user.toString() != user.id) {
    res.status(401);
    throw new Error('User not authorized');
  }

  const updatedChallenge = await Challenge.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
});

//@desc     Delete challenge (s)
//@route    Delete /api/challenges/:id
//@access   Private
const deleteChallenge = asyncHandler(async (req, res) => {
  const challenge = await Challenge.findById(req.params.id);

  if (!challenge) {
    res.status(404);
    throw new Error('Challenge not found');
  }

  //Check if Logged in user exits
  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(401);
    throw new Error('User not found');
  }

  //only allow the owner to delete the challenge
  if (challenge.user.toString() !== user.id) {
    res.status(401);
    throw new Error('User not authorized');
  }

  await challenge.deleteOne();

  res.status(200).json({
    message: 'Challenge deleted successfully',
    id: req.params.id,
  });
});

module.exports = {
  getChallenges,
  setChallenge,
  updateChallenge,
  deleteChallenge,
};
