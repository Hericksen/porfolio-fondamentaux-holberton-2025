const express = require('express');
const cors = require('cors');
const app = express();

const sequelize = require('./config/db');
const User = require('./models/User');
const Project = require('./models/Project');

const userRoutes = require('./routes/userRoutes');
const projectRoutes = require('./routes/projectRoutes');
const authRoutes = require('./routes/authRoutes');

app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/auth', authRoutes);

sequelize.sync({ alter: true }).then(() => {
  console.log('✅ Base synchronisée avec PostgreSQL');
  app.listen(3001, () => {
    console.log('🚀 Serveur backend lancé sur le port 3001');
  });
}).catch(err => {
  console.error('❌ Erreur de synchronisation :', err);
});
