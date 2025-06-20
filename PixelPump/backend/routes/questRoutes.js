const express = require('express');
const router = express.Router();
const questController = require('../controllers/QuestController');
const authMiddleware = require('../middleware/authMiddleware');

// Routes protégées (nécessitent une authentification)
router.post('/', authMiddleware, questController.createQuest);
router.get('/user/:userId', authMiddleware, questController.getUserQuests);
router.put('/:questId/complete', authMiddleware, questController.completeQuest);
router.delete('/:questId', authMiddleware, questController.deleteQuest);

// Route publique pour obtenir toutes les quêtes (pour les admins)
router.get('/', questController.getAllQuests);

module.exports = router;
