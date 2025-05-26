
# 📡 External and Internal API Documentation

## 🌐 External APIs

| API                      | Usage                                                                 | Justification                                                                 |
|--------------------------|-----------------------------------------------------------------------|------------------------------------------------------------------------------|
| **Firebase Authentication** | Authentification des utilisateurs                                        | Fournit une solution sécurisée et rapide à mettre en place pour gérer l’inscription, la connexion, la récupération de mot de passe, etc. |
| **Gravatar API** *(optionnel)* | Avatar par défaut basé sur l’email                                  | Permet de générer rapidement une image d’avatar par défaut, sans avoir à en héberger soi-même. |

> **Remarque :** Le choix d’*external APIs* est volontairement limité pour rester aligné avec la portée MVP, réduire les dépendances, et simplifier le déploiement.

## 🧠 Internal API Endpoints (Node.js + Express)

> Format d'échange : `application/json`

### 🔐 Auth

| Endpoint              | Method | Description                         | Input (Body)                                  | Output (JSON)                      |
|-----------------------|--------|-------------------------------------|-----------------------------------------------|------------------------------------|
| `/api/auth/register`  | POST   | Crée un nouvel utilisateur          | `{ email, password, username }`               | `{ token, user }`                  |
| `/api/auth/login`     | POST   | Authentifie l’utilisateur           | `{ email, password }`                         | `{ token, user }`                  |

### 👤 Users

| Endpoint                 | Method | Description                       | Input                                           | Output                        |
|--------------------------|--------|-----------------------------------|------------------------------------------------|-------------------------------|
| `/api/users/:id`         | GET    | Récupère les infos utilisateur    | URL param: `id`                                | `{ id, username, xp, level, ... }` |
| `/api/users/:id/avatar` | PUT    | Met à jour l’avatar               | `{ avatar: JSON }`                             | `{ success: true }`           |
| `/api/users/:id/xp`      | PATCH  | Ajoute de l’XP à l’utilisateur    | `{ xp: number }`                               | `{ newXp, newLevel }`         |

### 📅 Quests

| Endpoint                     | Method | Description                          | Input                                          | Output                        |
|------------------------------|--------|--------------------------------------|------------------------------------------------|-------------------------------|
| `/api/quests`                | GET    | Liste des quêtes de l’utilisateur    | Query param: `userId=UUID`                     | `[ { quest }, ... ]`          |
| `/api/quests/:id/complete`   | POST   | Marque une quête comme complétée     | URL param: `id`                                | `{ success: true, xpGained }` |
| `/api/quests/assign/daily`   | POST   | (Interne) Assigne les quêtes journ.  | Aucun ou `{ userId }`                          | `{ assignedQuests: [...] }`   |

### 🏆 Achievements

| Endpoint                        | Method | Description                        | Input                                          | Output                       |
|---------------------------------|--------|------------------------------------|------------------------------------------------|------------------------------|
| `/api/achievements/:userId`     | GET    | Liste des succès débloqués         | URL param: `userId`                            | `[ { title, unlockedAt } ]`  |
| `/api/achievements/check`       | POST   | (Interne) Vérifie les conditions   | `{ userId }`                                   | `{ unlocked: [...] }`        |

### 📈 Progression

| Endpoint                     | Method | Description                          | Input                                          | Output                                 |
|------------------------------|--------|--------------------------------------|------------------------------------------------|----------------------------------------|
| `/api/users/:id/progress`    | GET    | Récupère XP, niveau, stats           | URL param: `id`                                | `{ xp, level, completedQuests, streak }` |
