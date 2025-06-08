const express = require('express');
const router = express.Router();
const { protect } = require('../middlewares/authMiddleware');

const {
  getChallenges,
  setChallenge,
  updateChallenge,
  deleteChallenge,
} = require('../controllers/challengeController');

router.post('/', protect, setChallenge);
router.delete('/:id', protect, deleteChallenge);
router.put('/:id', protect, updateChallenge);
router.get('/', protect, getChallenges);

module.exports = router;
