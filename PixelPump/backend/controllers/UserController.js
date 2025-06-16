const userService = require('../services/UserService');

exports.getAll = async (req, res) => {
  const users = await userService.getAllUsers();
  res.json(users);
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
  const projects = await userService.getUserProjects(req.params.id);
  if (!projects) return res.status(404).json({ message: 'Utilisateur non trouvé ou aucun projet' });
  res.json(projects);
};
