const userService = require('../services/UserService');

exports.getAll = async (req, res) => {
  const users = await userService.getAllUsers();
  res.json(users);
};

exports.create = async (req, res) => {
  const user = await userService.createUser(req.body);
  res.status(201).json(user);
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
