const express = require('express');
const router = express.Router();
const { protect } = require('../middlewares/authMiddleware');
const challengeUpload = require('../middlewares/challengeUploadMiddleware');

const {
  getChallenges,
  setChallenge,
  updateChallenge,
  deleteChallenge,
  getChallenge,
} = require('../controllers/challengeController');

router.post('/', protect, challengeUpload.single('challenge_image'), setChallenge);
router.delete('/:id', protect, deleteChallenge);
router.put('/:id', protect, challengeUpload.single('challenge_image'), updateChallenge);
router.get('/', protect, getChallenges);
router.get('/:id', protect, getChallenge);

module.exports = router;
