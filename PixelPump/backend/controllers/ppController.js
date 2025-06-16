const projectService = require('../services/ProjectService');

exports.getAll = async (req, res) => {
  const projects = await projectService.getAllProjects();
  res.json(projects);
};

exports.create = async (req, res) => {
  const project = await projectService.createProject(req.body);
  res.status(201).json(project);
};

exports.getOne = async (req, res) => {
  const project = await projectService.getProjectById(req.params.id);
  if (!project) return res.status(404).json({ message: 'Projet non trouvé' });
  res.json(project);
};

exports.update = async (req, res) => {
  const project = await projectService.updateProject(req.params.id, req.body);
  if (!project) return res.status(404).json({ message: 'Projet non trouvé' });
  res.json(project);
};

exports.remove = async (req, res) => {
  const result = await projectService.deleteProject(req.params.id);
  if (!result) return res.status(404).json({ message: 'Projet non trouvé' });
  res.json({ message: 'Projet supprimé' });
};
