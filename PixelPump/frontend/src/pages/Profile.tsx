import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';

const Profile: React.FC = () => {
  const { user } = useAuth();

  if (!user) return null;

  const stats = [
    { label: 'Force', value: user.strength || 12, color: 'strength', icon: '💪' },
    { label: 'Endurance', value: user.endurance || 8, color: 'endurance', icon: '❤️' },
    { label: 'Vitesse', value: user.speed || 13, color: 'speed', icon: '⚡' },
  ];

  const recentActivity = [
    { action: 'Completed Daily Workout', xp: 50, time: '2 hours ago' },
    { action: 'Solved Coding Challenge', xp: 75, time: '1 day ago' },
    { action: 'Achieved "Weekly Hero"', xp: 200, time: '3 days ago' },
  ];

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="text-center mb-8">
        <h1 className="pixel-title text-4xl text-[var(--pixel-purple)] mb-2">
          PROFILE
        </h1>
        <p className="font-pixel text-[var(--pixel-grid)]">
          Your pixel journey progress
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Character Info */}
        <div className="lg:col-span-1">
          <Card className="pixel-glow">
            <CardHeader className="text-center">
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-[var(--pixel-purple)] to-[var(--pixel-pink)] rounded-lg flex items-center justify-center mb-4">
                <div className="w-24 h-24 bg-[var(--pixel-orange)] rounded opacity-90 flex items-center justify-center">
                  <div className="text-4xl">👤</div>
                </div>
              </div>
              <CardTitle className="text-[var(--pixel-cyan)]">
                {user.username}
              </CardTitle>
              <p className="font-pixel text-[var(--pixel-grid)]">
                Level {user.level} Hero
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-[var(--pixel-yellow)] mb-2">
                  {user.xp} XP
                </div>
                <div className="w-full bg-[var(--pixel-space)] rounded-full h-3 mb-2">
                  <div
                    className="pixel-progress-fill h-full rounded-full"
                    style={{ width: `${(user.xp % 100)}%` }}
                  />
                </div>
                <p className="font-pixel text-xs text-[var(--pixel-grid)]">
                  {100 - (user.xp % 100)} XP to next level
                </p>
              </div>

              <Button variant="default" className="w-full">
                CUSTOMIZE AVATAR
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Stats */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-[var(--pixel-purple)]">
                CHARACTER STATS
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-4xl mb-2">{stat.icon}</div>
                    <div className="text-2xl font-bold text-[var(--pixel-cyan)] mb-1">
                      {stat.value}
                    </div>
                    <div className="font-pixel text-sm text-[var(--pixel-grid)] mb-2">
                      {stat.label}
                    </div>
                    <Badge variant={stat.color as any} className="font-pixel">
                      {stat.label}
                    </Badge>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="bg-[var(--pixel-space)]">
                  <CardContent className="p-4 text-center">
                    <div className="text-xl font-bold text-[var(--pixel-orange)] mb-2">
                      23
                    </div>
                    <div className="font-pixel text-sm text-[var(--pixel-grid)]">
                      QUESTS COMPLETED
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-[var(--pixel-space)]">
                  <CardContent className="p-4 text-center">
                    <div className="text-xl font-bold text-[var(--pixel-cyan)] mb-2">
                      7
                    </div>
                    <div className="font-pixel text-sm text-[var(--pixel-grid)]">
                      ACHIEVEMENTS EARNED
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle className="text-[var(--pixel-orange)]">
            RECENT ACTIVITY
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-[var(--pixel-space)] rounded-lg">
                <div>
                  <p className="font-pixel text-sm text-[var(--foreground)]">
                    {activity.action}
                  </p>
                  <p className="font-pixel text-xs text-[var(--pixel-grid)]">
                    {activity.time}
                  </p>
                </div>
                <Badge variant="default" className="font-pixel">
                  +{activity.xp} XP
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Account Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="text-[var(--pixel-purple)]">
            ACCOUNT SETTINGS
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-pixel text-sm text-[var(--pixel-grid)] mb-2">
                EMAIL
              </label>
              <div className="pixel-input bg-[var(--pixel-space)] p-3 rounded">
                {user.email}
              </div>
            </div>
            <div>
              <label className="block font-pixel text-sm text-[var(--pixel-grid)] mb-2">
                MEMBER SINCE
              </label>
              <div className="pixel-input bg-[var(--pixel-space)] p-3 rounded">
                January 2025
              </div>
            </div>
          </div>
          <div className="mt-6 flex space-x-4">
            <Button variant="outline">
              CHANGE PASSWORD
            </Button>
            <Button variant="outline">
              UPDATE EMAIL
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;
