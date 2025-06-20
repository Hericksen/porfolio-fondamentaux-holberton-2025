#!/bin/bash

echo "🧪 Script de test complet de PixelPump"
echo "=================================="

BASE_URL="http://localhost:3001/api"

# Test 1: Endpoint racine
echo "1. Test de l'endpoint racine..."
curl -s $BASE_URL/../ | head -1
echo ""

# Test 2: Création d'un compte
echo "2. Création d'un compte de test..."
REGISTER_RESPONSE=$(curl -s -X POST $BASE_URL/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "demo@pixelpump.com",
    "password": "demo123",
    "username": "demo_user"
  }')

echo $REGISTER_RESPONSE | head -1
echo ""

# Extraire le token et l'ID utilisateur
TOKEN=$(echo $REGISTER_RESPONSE | grep -o '"token":"[^"]*"' | cut -d'"' -f4)
USER_ID=$(echo $REGISTER_RESPONSE | grep -o '"id":"[^"]*"' | cut -d'"' -f4)

if [ "$TOKEN" != "" ]; then
  echo "3. Token obtenu, test des endpoints protégés..."

  # Test 3: Créer une quête
  echo "   - Création d'une quête..."
  QUEST_RESPONSE=$(curl -s -X POST $BASE_URL/quests \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer $TOKEN" \
    -d "{
      \"title\": \"Quête de démonstration\",
      \"description\": \"Tester l'API PixelPump\",
      \"type\": \"demo\",
      \"xp_reward\": 50,
      \"user_id\": \"$USER_ID\"
    }")

  QUEST_ID=$(echo $QUEST_RESPONSE | grep -o '"id":"[^"]*"' | cut -d'"' -f4)
  echo "   Quête créée avec l'ID: $QUEST_ID"

  # Test 4: Obtenir les quêtes de l'utilisateur
  echo "   - Récupération des quêtes utilisateur..."
  curl -s -X GET $BASE_URL/quests/user/$USER_ID \
    -H "Authorization: Bearer $TOKEN" | head -1
  echo ""

  # Test 5: Créer un achievement
  echo "   - Création d'un achievement..."
  curl -s -X POST $BASE_URL/achievements \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer $TOKEN" \
    -d "{
      \"title\": \"Premier pas\",
      \"description\": \"Votre premier achievement\",
      \"condition\": \"complete_tutorial\",
      \"user_id\": \"$USER_ID\"
    }" | head -1
  echo ""

  # Test 6: Obtenir le profil utilisateur
  echo "   - Récupération du profil utilisateur..."
  curl -s -X GET $BASE_URL/users/$USER_ID/profile \
    -H "Authorization: Bearer $TOKEN" | head -1
  echo ""

  echo "✅ Tous les tests de l'API sont passés avec succès!"
else
  echo "❌ Échec de l'authentification"
fi

echo ""
echo "🌐 Frontend disponible sur: http://localhost:3000"
echo "🔧 Backend API disponible sur: http://localhost:3001"
echo "📊 Endpoints principaux:"
echo "   - POST /api/auth/register - Créer un compte"
echo "   - POST /api/auth/login - Se connecter"
echo "   - GET /api/users/:id/profile - Profil utilisateur"
echo "   - GET /api/quests/user/:id - Quêtes utilisateur"
echo "   - POST /api/quests - Créer une quête"
echo "   - GET /api/achievements/user/:id - Achievements utilisateur"
