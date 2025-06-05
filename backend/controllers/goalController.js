const asyncHandler = require('express-async-handler');

//@desc     Get goals
//@route    GET /api/goals
//@access   Private
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: 'Get goals',
  });
});

module.exports = {
  getGoals,
};
