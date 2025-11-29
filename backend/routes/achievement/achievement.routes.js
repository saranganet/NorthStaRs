const express = require('express');
const router = express.Router();
const achievementController = require('../../controllers/achievement/achievement.controller');
const authMiddleware = require('../../middleware/auth.middleware');

// Get user's achievements
router.get('/:userId', authMiddleware, async (req, res) => {
  try {
    await achievementController.getUserAchievements(req, res);
  } catch (error) {
    console.error('Error in achievements route:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
