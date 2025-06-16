const express = require('express');
const router = express.Router();
const projectController = require('../controllers/ppController');
const authMiddleware = require('../middleware/authMiddleware');

router.use(authMiddleware);

router.get('/', projectController.getAll);
router.post('/', projectController.create);
router.get('/:id', projectController.getOne);
router.put('/:id', projectController.update);
router.delete('/:id', projectController.remove);

module.exports = router;
