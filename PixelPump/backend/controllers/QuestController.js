const Quest = require('../models/Quest');
const User = require('../models/User');

// Créer une nouvelle quête
exports.createQuest = async (req, res) => {
  try {
    const { title, description, type, xp_reward, due_date, user_id } = req.body;

    // Vérifier que l'utilisateur existe
    const user = await User.findByPk(user_id);
    if (!user) {
      return res.status(404).json({ message: 'Utilisateur non trouvé' });
    }

    const quest = await Quest.create({
      title,
      description,
      type,
      xp_reward: xp_reward || 0,
      due_date,
      user_id
    });

    res.status(201).json({ message: 'Quête créée avec succès', quest });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la création de la quête', error: error.message });
  }
};

// Obtenir toutes les quêtes d'un utilisateur
exports.getUserQuests = async (req, res) => {
  try {
    const { userId } = req.params;

    const quests = await Quest.findAll({
      where: { user_id: userId },
      include: [{ model: User, attributes: ['username', 'email'] }]
    });

    res.json(quests);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des quêtes', error: error.message });
  }
};

// Marquer une quête comme terminée
exports.completeQuest = async (req, res) => {
  try {
    const { questId } = req.params;

    const quest = await Quest.findByPk(questId, {
      include: [{ model: User }]
    });

    if (!quest) {
      return res.status(404).json({ message: 'Quête non trouvée' });
    }

    if (quest.is_completed) {
      return res.status(400).json({ message: 'Quête déjà terminée' });
    }

    // Marquer comme terminée
    quest.is_completed = true;
    await quest.save();

    // Ajouter XP à l'utilisateur
    const user = quest.User;
    user.xp += quest.xp_reward;

    // Calculer le niveau (100 XP par niveau)
    user.level = Math.floor(user.xp / 100) + 1;
    await user.save();

    res.json({
      message: 'Quête terminée avec succès',
      quest,
      user: { xp: user.xp, level: user.level }
    });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la completion de la quête', error: error.message });
  }
};

// Obtenir toutes les quêtes
exports.getAllQuests = async (req, res) => {
  try {
    const quests = await Quest.findAll({
      include: [{ model: User, attributes: ['username', 'email'] }]
    });
    res.json(quests);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des quêtes', error: error.message });
  }
};

// Supprimer une quête
exports.deleteQuest = async (req, res) => {
  try {
    const { questId } = req.params;

    const quest = await Quest.findByPk(questId);
    if (!quest) {
      return res.status(404).json({ message: 'Quête non trouvée' });
    }

    await quest.destroy();
    res.json({ message: 'Quête supprimée avec succès' });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la suppression de la quête', error: error.message });
  }
};
