const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Import database connection
const sequelize = require('./config/db');

// Import models
const User = require('./models/User');
const Project = require('./models/Project');
const Quest = require('./models/Quest');
const Achievement = require('./models/Achievement');

// Import routes
const userRoutes = require('./routes/userRoutes');
const projectRoutes = require('./routes/projectRoutes');
const authRoutes = require('./routes/authRoutes');
const questRoutes = require('./routes/questRoutes');
const achievementRoutes = require('./routes/achievementRoutes');

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/quests', questRoutes);
app.use('/api/achievements', achievementRoutes);

// Route de base
app.get('/', (req, res) => {
  res.json({
    message: 'PixelPump Backend API',
    version: '1.0.0',
    endpoints: {
      auth: '/api/auth',
      users: '/api/users',
      projects: '/api/projects',
      quests: '/api/quests',
      achievements: '/api/achievements'
    }
  });
});

// Gestion d'erreur globale
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Erreur interne du serveur' });
});

// Gestion des routes non trouvées
app.use('*', (req, res) => {
  res.status(404).json({ message: 'Route non trouvée' });
});

const PORT = process.env.PORT || 3001;

// Synchronisation de la base de données et démarrage du serveur
sequelize.sync({ alter: true }).then(() => {
  console.log('✅ Base de données synchronisée avec PostgreSQL');
  app.listen(PORT, () => {
    console.log(`🚀 Serveur backend lancé sur le port ${PORT}`);
    console.log(`📡 API disponible sur http://localhost:${PORT}`);
  });
}).catch(err => {
  console.error('❌ Erreur de synchronisation de la base de données:', err);
  process.exit(1);
});
