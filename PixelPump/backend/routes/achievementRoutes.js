const express = require('express');
const router = express.Router();
const achievementController = require('../controllers/AchievementController');
const authMiddleware = require('../middleware/authMiddleware');

// Routes protégées (nécessitent une authentification)
router.post('/', authMiddleware, achievementController.createAchievement);
router.get('/user/:userId', authMiddleware, achievementController.getUserAchievements);
router.put('/:achievementId/unlock', authMiddleware, achievementController.unlockAchievement);
router.delete('/:achievementId', authMiddleware, achievementController.deleteAchievement);

// Route publique pour obtenir tous les achievements (pour les admins)
router.get('/', achievementController.getAllAchievements);

module.exports = router;
