
# 📡 External and Internal API Documentation

## 🌐 External APIs

| API                      | Usage                                       | Justification                                                                 |
|--------------------------|---------------------------------------------|------------------------------------------------------------------------------|
| **Firebase Authentication** | User authentication                          | Provides a secure, fast-to-implement solution for handling registration, login, and password recovery. |
| **Gravatar API** *(optional)* | Default avatar based on email              | Quickly generates a default avatar image without needing to host images locally. |


## 🧠 Internal API Endpoints (Node.js + Express)

> Exchange format: `application/json`

### 🔐 Auth

| Endpoint              | Method | Description                      | Input (Body)                            | Output (JSON)                 |
|-----------------------|--------|----------------------------------|-----------------------------------------|-------------------------------|
| `/api/auth/register`  | POST   | Registers a new user             | `{ email, password, username }`         | `{ token, user }`             |
| `/api/auth/login`     | POST   | Logs in the user                 | `{ email, password }`                   | `{ token, user }`             |

### 👤 Users

| Endpoint                 | Method | Description                         | Input                                      | Output                              |
|--------------------------|--------|-------------------------------------|--------------------------------------------|-------------------------------------|
| `/api/users/:id`         | GET    | Get user profile info               | URL param: `id`                            | `{ id, username, xp, level, ... }`  |
| `/api/users/:id/avatar` | PUT    | Update the user's avatar            | `{ avatar: JSON }`                         | `{ success: true }`                 |
| `/api/users/:id/xp`      | PATCH  | Add XP to a user                    | `{ xp: number }`                           | `{ newXp, newLevel }`               |

### 📅 Quests

| Endpoint                     | Method | Description                             | Input                                         | Output                            |
|------------------------------|--------|-----------------------------------------|-----------------------------------------------|-----------------------------------|
| `/api/quests`                | GET    | Get user's assigned quests              | Query param: `userId=UUID`                    | `[ { quest }, ... ]`              |
| `/api/quests/:id/complete`   | POST   | Mark quest as completed                 | URL param: `id`                               | `{ success: true, xpGained }`     |
| `/api/quests/assign/daily`   | POST   | (Internal) Assign daily quests          | None or `{ userId }`                          | `{ assignedQuests: [...] }`       |

### 🏆 Achievements

| Endpoint                        | Method | Description                             | Input                                       | Output                          |
|---------------------------------|--------|-----------------------------------------|---------------------------------------------|---------------------------------|
| `/api/achievements/:userId`     | GET    | Get user's unlocked achievements        | URL param: `userId`                          | `[ { title, unlockedAt } ]`     |
| `/api/achievements/check`       | POST   | (Internal) Check if achievements unlocked| `{ userId }`                                 | `{ unlocked: [...] }`           |

### 📈 Progress

| Endpoint                     | Method | Description                          | Input                                          | Output                                            |
|------------------------------|--------|--------------------------------------|------------------------------------------------|---------------------------------------------------|
| `/api/users/:id/progress`    | GET    | Get XP, level, and activity stats    | URL param: `id`                                | `{ xp, level, completedQuests, streak }`          |
