const express = require('express');
const router = express.Router();
const { protect } = require('../middlewares/authMiddleware');
const challengeUpload = require('../middlewares/challengeUploadMiddleware');

const {
  getChallenges,
  setChallenge,
  updateChallenge,
  deleteChallenge,
} = require('../controllers/challengeController');

router.post('/', protect, challengeUpload.single('challenge_image'), setChallenge);
router.delete('/:id', protect, deleteChallenge);
router.put('/:id', protect, challengeUpload.single('challenge_image'), updateChallenge);
router.get('/', protect, getChallenges);

module.exports = router;
