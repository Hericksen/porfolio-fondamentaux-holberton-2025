const projectService = require('../services/ProjectService');
const User = require('../models/User');

exports.getAll = async (req, res) => {
  try {
    const projects = await projectService.getAllProjects();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des projets', error: error.message });
  }
};

exports.create = async (req, res) => {
  try {
    const { title, description, userId } = req.body;

    // Vérifier que l'utilisateur existe
    if (userId) {
      const user = await User.findByPk(userId);
      if (!user) {
        return res.status(404).json({ message: 'Utilisateur non trouvé' });
      }
    }

    const project = await projectService.createProject(req.body);
    res.status(201).json({ message: 'Projet créé avec succès', project });
  } catch (error) {
    res.status(400).json({ message: 'Erreur lors de la création du projet', error: error.message });
  }
};

exports.getOne = async (req, res) => {
  try {
    const project = await projectService.getProjectById(req.params.id);
    if (!project) return res.status(404).json({ message: 'Projet non trouvé' });
    res.json(project);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération du projet', error: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const project = await projectService.updateProject(req.params.id, req.body);
    if (!project) return res.status(404).json({ message: 'Projet non trouvé' });
    res.json({ message: 'Projet mis à jour avec succès', project });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la mise à jour du projet', error: error.message });
  }
};

exports.remove = async (req, res) => {
  try {
    const result = await projectService.deleteProject(req.params.id);
    if (!result) return res.status(404).json({ message: 'Projet non trouvé' });
    res.json({ message: 'Projet supprimé avec succès' });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la suppression du projet', error: error.message });
  }
};
