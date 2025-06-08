const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const Coordinator = require('../models/coordinators');

//@desc     Register a new user
//@route    POST /api/users
//@access   Public
const registerUser = asyncHandler(async (req, res) => {
  //check if req.body exists
  if (!req.body) {
    res.status(400);
    throw new Error('Request body is missing');
  }
  const { first_name, last_name, email, password, gender } = req.body;

  if (!first_name || !last_name || !email || !password || !gender) {
    res.status(400);
    throw new Error('Please add all fields');
  }

  //check if coordinator already exists
  const coordinatorExists = await Coordinator.findOne({ email });
  if (coordinatorExists) {
    res.status(400);
    throw new Error('User already exists');
  }

  //Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  //Create coordinator
  const coordinator = await Coordinator.create({
    first_name,
    last_name,
    email,
    password: hashedPassword,
    gender,
  });

  console.log('New coordinator saved:', coordinator);

  if (coordinator) {
    res.status(201).json({
      _id: coordinator.id,
      first_name: coordinator.first_name,
      last_name: coordinator.last_name,
      email: coordinator.email,
      gender: coordinator.gender,
    });
  } else {
    res.status(400);
    throw new Error('Invalid uer data');
  }
});

//@desc     Authenticate a user
//@route    POST /api/users/login
//@access   Public
const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: 'Login User' });
});

//@desc     Get user data
//@route    GET /api/users/me
//@access   Public
const getMe = asyncHandler(async (req, res) => {
  res.json({ message: 'This is a user data' });
});

module.exports = { registerUser, loginUser, getMe };
