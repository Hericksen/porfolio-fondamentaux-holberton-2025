const express = require('express');
const sequelize = require('./config/db');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(express.json());

app.use('/users', userRoutes);

sequelize.sync()
  .then(() => {
    console.log('✅ Base synchronisée avec PostgreSQL');
    app.listen(3001, () => console.log('🚀 Serveur backend lancé sur le port 3001'));
  })
  .catch((err) => {
    console.error('❌ Erreur de synchronisation avec la base :', err);
  });
