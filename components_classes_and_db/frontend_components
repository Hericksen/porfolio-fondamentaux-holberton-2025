# 💻 Front-End UI Components (React Web App)

This section outlines the main UI components and their roles in the web version of the Gamified Fitness App.

## 🧩 UI Component Overview

| Component            | Description                                                                 |
|----------------------|-----------------------------------------------------------------------------|
| `LoginScreen`        | Handles user authentication via Firebase or custom API                      |
| `Dashboard`          | Displays user's XP, level, avatar, and progress statistics                   |
| `QuestList`          | Lists daily and weekly quests assigned to the user                           |
| `QuestCard`          | Interactive card component to mark a quest as complete and earn XP          |
| `AvatarViewer`       | Interface for customizing and previewing the user's evolving avatar          |
| `ProgressTracker`    | Visualizes XP gains, completed quests, and level-up history                  |
| `AchievementDisplay` | Shows a list of achievements the user has unlocked                          |
| `Settings`           | Allows profile updates, avatar reset, logout, and general preferences       |

## 🔄 Component Interactions

- `Dashboard` is the main hub that connects to:
  - `QuestList`, which maps each quest to a `QuestCard`
  - `ProgressTracker` to show activity history
  - `AchievementDisplay` to show gamification milestones
  - `AvatarViewer` for dynamic avatar customization
- `Settings` allows user-related changes and triggers updates to `Dashboard` data

## 🌐 API Communication

All components interact with the backend via HTTP requests (REST API):

- `LoginScreen` communicates with `/api/auth/*`
- `Dashboard`, `QuestList`, `ProgressTracker` fetch data from `/api/users/:id/progress`, `/api/quests`, `/api/achievements`
- `AvatarViewer` and `Settings` use `/api/users/:id/avatar`, `/api/users/:id`