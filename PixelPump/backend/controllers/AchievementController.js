const Achievement = require('../models/Achievement');
const User = require('../models/User');

// Créer un nouvel achievement
exports.createAchievement = async (req, res) => {
  try {
    const { title, description, condition, user_id } = req.body;

    // Vérifier que l'utilisateur existe
    const user = await User.findByPk(user_id);
    if (!user) {
      return res.status(404).json({ message: 'Utilisateur non trouvé' });
    }

    const achievement = await Achievement.create({
      title,
      description,
      condition,
      user_id,
      unlocked_at: new Date()
    });

    res.status(201).json({ message: 'Achievement créé avec succès', achievement });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la création de l\'achievement', error: error.message });
  }
};

// Obtenir tous les achievements d'un utilisateur
exports.getUserAchievements = async (req, res) => {
  try {
    const { userId } = req.params;

    const achievements = await Achievement.findAll({
      where: { user_id: userId },
      include: [{ model: User, attributes: ['username', 'email'] }]
    });

    res.json(achievements);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des achievements', error: error.message });
  }
};

// Débloquer un achievement
exports.unlockAchievement = async (req, res) => {
  try {
    const { achievementId } = req.params;

    const achievement = await Achievement.findByPk(achievementId);
    if (!achievement) {
      return res.status(404).json({ message: 'Achievement non trouvé' });
    }

    if (achievement.unlocked_at) {
      return res.status(400).json({ message: 'Achievement déjà débloqué' });
    }

    achievement.unlocked_at = new Date();
    await achievement.save();

    res.json({ message: 'Achievement débloqué avec succès', achievement });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors du déblocage de l\'achievement', error: error.message });
  }
};

// Obtenir tous les achievements
exports.getAllAchievements = async (req, res) => {
  try {
    const achievements = await Achievement.findAll({
      include: [{ model: User, attributes: ['username', 'email'] }]
    });
    res.json(achievements);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des achievements', error: error.message });
  }
};

// Supprimer un achievement
exports.deleteAchievement = async (req, res) => {
  try {
    const { achievementId } = req.params;

    const achievement = await Achievement.findByPk(achievementId);
    if (!achievement) {
      return res.status(404).json({ message: 'Achievement non trouvé' });
    }

    await achievement.destroy();
    res.json({ message: 'Achievement supprimé avec succès' });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la suppression de l\'achievement', error: error.message });
  }
};
