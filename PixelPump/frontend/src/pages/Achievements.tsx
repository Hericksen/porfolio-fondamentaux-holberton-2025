import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

const Achievements: React.FC = () => {
  const achievements = [
    {
      id: 1,
      title: "First Steps",
      description: "Complete your first quest",
      icon: "👶",
      earned: true,
      rarity: "COMMON",
      xp: 25
    },
    {
      id: 2,
      title: "Strength Master",
      description: "Reach 15 strength points",
      icon: "💪",
      earned: false,
      rarity: "RARE",
      xp: 100
    },
    {
      id: 3,
      title: "Speed Demon",
      description: "Reach 20 speed points",
      icon: "⚡",
      earned: false,
      rarity: "EPIC",
      xp: 150
    },
    {
      id: 4,
      title: "Endurance Champion",
      description: "Complete 50 cardio quests",
      icon: "🏃",
      earned: true,
      rarity: "RARE",
      xp: 100
    },
    {
      id: 5,
      title: "Code Warrior",
      description: "Solve 100 coding challenges",
      icon: "⚔️",
      earned: false,
      rarity: "LEGENDARY",
      xp: 300
    },
    {
      id: 6,
      title: "Weekly Hero",
      description: "Complete all daily quests for a week",
      icon: "🏆",
      earned: true,
      rarity: "EPIC",
      xp: 200
    }
  ];

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'COMMON': return 'secondary';
      case 'RARE': return 'xp';
      case 'EPIC': return 'endurance';
      case 'LEGENDARY': return 'strength';
      default: return 'secondary';
    }
  };

  const earnedAchievements = achievements.filter(a => a.earned);
  const lockedAchievements = achievements.filter(a => !a.earned);

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="text-center mb-8">
        <h1 className="pixel-title text-4xl text-[var(--pixel-purple)] mb-2">
          ACHIEVEMENTS
        </h1>
        <p className="font-pixel text-[var(--pixel-grid)]">
          {earnedAchievements.length} / {achievements.length} unlocked
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <Card>
          <CardContent className="text-center p-4">
            <div className="text-3xl font-bold text-[var(--pixel-cyan)] mb-2">
              {earnedAchievements.length}
            </div>
            <div className="font-pixel text-sm text-[var(--pixel-grid)]">
              EARNED
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="text-center p-4">
            <div className="text-3xl font-bold text-[var(--pixel-yellow)] mb-2">
              {earnedAchievements.reduce((sum, a) => sum + a.xp, 0)}
            </div>
            <div className="font-pixel text-sm text-[var(--pixel-grid)]">
              TOTAL XP
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="text-center p-4">
            <div className="text-3xl font-bold text-[var(--pixel-orange)] mb-2">
              {Math.round((earnedAchievements.length / achievements.length) * 100)}%
            </div>
            <div className="font-pixel text-sm text-[var(--pixel-grid)]">
              PROGRESS
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Earned Achievements */}
      <div className="mb-8">
        <h2 className="pixel-title text-2xl text-[var(--pixel-cyan)] mb-4">
          EARNED ACHIEVEMENTS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {earnedAchievements.map((achievement) => (
            <Card key={achievement.id} className="pixel-glow relative">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="text-3xl">{achievement.icon}</div>
                  <div>
                    <CardTitle className="text-[var(--pixel-orange)] text-lg">
                      {achievement.title}
                    </CardTitle>
                    <Badge
                      variant={getRarityColor(achievement.rarity) as any}
                      className="font-pixel mt-1"
                    >
                      {achievement.rarity}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="font-pixel text-sm text-[var(--pixel-grid)] mb-3">
                  {achievement.description}
                </p>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="font-pixel">
                    +{achievement.xp} XP
                  </Badge>
                  <div className="w-6 h-6 bg-[var(--pixel-cyan)] rounded-full flex items-center justify-center">
                    <span className="text-[var(--pixel-dark)] font-bold text-sm">✓</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Locked Achievements */}
      <div>
        <h2 className="pixel-title text-2xl text-[var(--pixel-grid)] mb-4">
          LOCKED ACHIEVEMENTS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {lockedAchievements.map((achievement) => (
            <Card key={achievement.id} className="opacity-60 relative">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="text-3xl grayscale">{achievement.icon}</div>
                  <div>
                    <CardTitle className="text-[var(--pixel-grid)] text-lg">
                      {achievement.title}
                    </CardTitle>
                    <Badge
                      variant="outline"
                      className="font-pixel mt-1"
                    >
                      {achievement.rarity}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="font-pixel text-sm text-[var(--pixel-grid)] mb-3">
                  {achievement.description}
                </p>
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="font-pixel">
                    +{achievement.xp} XP
                  </Badge>
                  <div className="w-6 h-6 border-2 border-[var(--pixel-grid)] rounded-full flex items-center justify-center">
                    <span className="text-[var(--pixel-grid)] font-bold text-sm">🔒</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
