import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';

const Quests: React.FC = () => {
  const dailyQuests = [
    {
      id: 1,
      title: "Morning Workout",
      description: "Complete your morning fitness routine",
      tasks: ["20 SQUATS", "5 POMPES", "1 MIN PLANK"],
      xp: 50,
      completed: false,
      difficulty: "EASY"
    },
    {
      id: 2,
      title: "Code Challenge",
      description: "Solve 3 algorithm problems",
      tasks: ["3 PROBLEMS", "NO BUGS", "CLEAN CODE"],
      xp: 75,
      completed: true,
      difficulty: "MEDIUM"
    },
    {
      id: 3,
      title: "Evening Run",
      description: "Go for a 30-minute run",
      tasks: ["30 MIN RUN", "5 KM DISTANCE"],
      xp: 60,
      completed: false,
      difficulty: "HARD"
    }
  ];

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="text-center mb-8">
        <h1 className="pixel-title text-4xl text-[var(--pixel-purple)] mb-2">
          DAILY QUESTS
        </h1>
        <p className="font-pixel text-[var(--pixel-grid)]">
          Complete your daily challenges to level up!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dailyQuests.map((quest) => (
          <Card key={quest.id} className={`relative ${quest.completed ? 'opacity-75' : 'pixel-glow'}`}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-[var(--pixel-orange)] text-lg">
                  {quest.title}
                </CardTitle>
                <Badge
                  variant={quest.difficulty === 'EASY' ? 'secondary' : quest.difficulty === 'MEDIUM' ? 'outline' : 'destructive'}
                  className="font-pixel"
                >
                  {quest.difficulty}
                </Badge>
              </div>
              <p className="text-[var(--pixel-grid)] font-pixel text-sm">
                {quest.description}
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 mb-4">
                {quest.tasks.map((task, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className={`w-4 h-4 rounded border-2 ${
                      quest.completed
                        ? 'bg-[var(--pixel-cyan)] border-[var(--pixel-cyan)]'
                        : 'border-[var(--pixel-grid)]'
                    }`}>
                      {quest.completed && (
                        <div className="w-full h-full flex items-center justify-center">
                          <span className="text-[var(--pixel-dark)] text-xs">✓</span>
                        </div>
                      )}
                    </div>
                    <span className="font-pixel text-sm text-[var(--pixel-orange)]">
                      {task}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="font-pixel text-[var(--pixel-yellow)]">
                    +{quest.xp} XP
                  </span>
                </div>
                <Button
                  variant={quest.completed ? "outline" : "default"}
                  size="sm"
                  disabled={quest.completed}
                  className="font-pixel"
                >
                  {quest.completed ? 'COMPLETED' : 'START'}
                </Button>
              </div>

              {quest.completed && (
                <div className="absolute top-2 right-2">
                  <div className="w-8 h-8 bg-[var(--pixel-cyan)] rounded-full flex items-center justify-center">
                    <span className="text-[var(--pixel-dark)] font-bold">✓</span>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-8">
        <Card className="max-w-md mx-auto">
          <CardContent className="p-6">
            <h3 className="pixel-title text-xl text-[var(--pixel-purple)] mb-4">
              WEEKLY BONUS
            </h3>
            <p className="font-pixel text-sm text-[var(--pixel-grid)] mb-4">
              Complete all daily quests for 7 days in a row
            </p>
            <div className="flex justify-center space-x-2 mb-4">
              {[...Array(7)].map((_, i) => (
                <div
                  key={i}
                  className={`w-6 h-6 rounded border-2 ${
                    i < 2 ? 'bg-[var(--pixel-cyan)] border-[var(--pixel-cyan)]' : 'border-[var(--pixel-grid)]'
                  }`}
                />
              ))}
            </div>
            <Badge variant="outline" className="font-pixel">
              +500 XP BONUS
            </Badge>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Quests;
