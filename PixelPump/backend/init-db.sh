#!/bin/bash
# Script d'initialisation de la base de données PixelPump

echo "🚀 Initialisation de la base de données PixelPump..."

# Vérifier si PostgreSQL est installé
if ! command -v psql &> /dev/null; then
    echo "❌ PostgreSQL n'est pas installé. Veuillez l'installer d'abord."
    echo "Sur Ubuntu/Debian: sudo apt install postgresql postgresql-client"
    exit 1
fi

# Variables de configuration
DB_NAME="portfolio"
DB_USER="postgres"

echo "📊 Création de la base de données..."

# Créer la base de données si elle n'existe pas
psql -U $DB_USER -tc "SELECT 1 FROM pg_database WHERE datname = '$DB_NAME'" | grep -q 1 || psql -U $DB_USER -c "CREATE DATABASE $DB_NAME"

# Exécuter le script d'initialisation
echo "🗃️  Exécution du script d'initialisation..."
psql -U $DB_USER -d $DB_NAME -f ../database/init.sql

if [ $? -eq 0 ]; then
    echo "✅ Base de données initialisée avec succès!"
    echo "🧪 Exécution des tests..."
    psql -U $DB_USER -d $DB_NAME -f ../database/test_init.sql
    echo "✅ Tests terminés!"
else
    echo "❌ Erreur lors de l'initialisation de la base de données"
    exit 1
fi
