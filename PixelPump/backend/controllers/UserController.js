const userService = require('../services/UserService');
const User = require('../models/User');
const Quest = require('../models/Quest');
const Achievement = require('../models/Achievement');

exports.getAll = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des utilisateurs', error: error.message });
  }
};

exports.create = async (req, res) => {
  try {
    const user = await userService.createUser(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ message: 'Erreur lors de la création de l’utilisateur', error: err.message });
  }
};

exports.getOne = async (req, res) => {
  const user = await userService.getUserById(req.params.id);
  if (!user) return res.status(404).json({ message: 'Utilisateur non trouvé' });
  res.json(user);
};

exports.update = async (req, res) => {
  const user = await userService.updateUser(req.params.id, req.body);
  if (!user) return res.status(404).json({ message: 'Utilisateur non trouvé' });
  res.json(user);
};

exports.remove = async (req, res) => {
  const result = await userService.deleteUser(req.params.id);
  if (!result) return res.status(404).json({ message: 'Utilisateur non trouvé' });
  res.json({ message: 'Utilisateur supprimé' });
};

exports.getUserProjects = async (req, res) => {
  try {
    const projects = await userService.getUserProjects(req.params.id);
    if (!projects) return res.status(404).json({ message: 'Utilisateur non trouvé ou aucun projet' });
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des projets utilisateur', error: error.message });
  }
};

// Nouveau: Obtenir le profil complet d'un utilisateur avec ses quêtes et achievements
exports.getUserProfile = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findByPk(id, {
      attributes: ['id', 'email', 'username', 'xp', 'level', 'avatar', 'created_at', 'last_login'],
      include: [
        {
          model: Quest,
          attributes: ['id', 'title', 'description', 'type', 'xp_reward', 'is_completed', 'due_date']
        },
        {
          model: Achievement,
          attributes: ['id', 'title', 'description', 'condition', 'unlocked_at']
        }
      ]
    });

    if (!user) {
      return res.status(404).json({ message: 'Utilisateur non trouvé' });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération du profil utilisateur', error: error.message });
  }
};
