# Tests API PixelPump

Ce fichier contient des exemples de requêtes pour tester l'API PixelPump.

## Variables
```bash
BASE_URL=http://localhost:3001/api
```

## 1. Test de l'API de base
```bash
curl -X GET $BASE_URL/../
```

## 2. Authentification

### Créer un compte
```bash
curl -X POST $BASE_URL/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "password123",
    "username": "testuser"
  }'
```

### Se connecter
```bash
curl -X POST $BASE_URL/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "password123"
  }'
```

## 3. Utilisateurs (nécessite un token)

### Obtenir tous les utilisateurs
```bash
curl -X GET $BASE_URL/users \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

### Obtenir le profil d'un utilisateur
```bash
curl -X GET $BASE_URL/users/USER_ID/profile \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

## 4. Quêtes (nécessite un token)

### Créer une quête
```bash
curl -X POST $BASE_URL/quests \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN_HERE" \
  -d '{
    "title": "Ma première quête",
    "description": "Compléter le tutoriel",
    "type": "tutorial",
    "xp_reward": 100,
    "user_id": "USER_ID_HERE"
  }'
```

### Obtenir les quêtes d'un utilisateur
```bash
curl -X GET $BASE_URL/quests/user/USER_ID \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

### Marquer une quête comme terminée
```bash
curl -X PUT $BASE_URL/quests/QUEST_ID/complete \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

## 5. Achievements (nécessite un token)

### Créer un achievement
```bash
curl -X POST $BASE_URL/achievements \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN_HERE" \
  -d '{
    "title": "Premier pas",
    "description": "Compléter votre première quête",
    "condition": "complete_first_quest",
    "user_id": "USER_ID_HERE"
  }'
```

### Obtenir les achievements d'un utilisateur
```bash
curl -X GET $BASE_URL/achievements/user/USER_ID \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

## Script de test automatique

```bash
#!/bin/bash
BASE_URL="http://localhost:3001/api"

echo "🧪 Test de l'API PixelPump"

# Test de base
echo "1. Test de l'endpoint racine..."
curl -s $BASE_URL/../ | jq '.'

# Créer un compte
echo "2. Création d'un compte de test..."
REGISTER_RESPONSE=$(curl -s -X POST $BASE_URL/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "password123",
    "username": "testuser"
  }')

echo $REGISTER_RESPONSE | jq '.'

# Extraire le token et l'ID utilisateur
TOKEN=$(echo $REGISTER_RESPONSE | jq -r '.token')
USER_ID=$(echo $REGISTER_RESPONSE | jq -r '.user.id')

if [ "$TOKEN" != "null" ]; then
  echo "3. Test des endpoints protégés..."

  # Créer une quête
  echo "Création d'une quête..."
  curl -s -X POST $BASE_URL/quests \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer $TOKEN" \
    -d "{
      \"title\": \"Ma première quête\",
      \"description\": \"Compléter le tutoriel\",
      \"type\": \"tutorial\",
      \"xp_reward\": 100,
      \"user_id\": \"$USER_ID\"
    }" | jq '.'

  # Obtenir le profil utilisateur
  echo "Récupération du profil utilisateur..."
  curl -s -X GET $BASE_URL/users/$USER_ID/profile \
    -H "Authorization: Bearer $TOKEN" | jq '.'
else
  echo "❌ Échec de l'authentification"
fi
```
