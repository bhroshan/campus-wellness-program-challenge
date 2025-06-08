const mongoose = require('mongoose');

const coordinatorsSchema = mongoose.Schema(
  {
    first_name: {
      type: String,
      required: [true, 'Please add your name'],
      trim: true,
    },
    last_name: {
      type: String,
      required: [true, 'Please add your name'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Please add your email'],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, 'Please add a password'],
    },
    gender: {
      type: String,
      enum: ['male', 'female', 'others'],
      required: [true, 'Please identify yourself'],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Coordinator', coordinatorsSchema);
