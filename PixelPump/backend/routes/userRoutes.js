const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', userController.create);
router.use(authMiddleware);

router.get('/', userController.getAll);
router.get('/:id', userController.getOne);
router.get('/:id/profile', userController.getUserProfile);
router.put('/:id', userController.update);
router.delete('/:id', userController.remove);
router.get('/:id/projects', userController.getUserProjects);

module.exports = router;
