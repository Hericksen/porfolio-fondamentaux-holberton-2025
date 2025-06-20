import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';

interface DashboardProps {}

export const Dashboard: React.FC<DashboardProps> = () => {
  return (
    <div className="min-h-screen space-gradient pixel-grid-bg retro-scan-lines">
      <div className="container mx-auto p-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="pixel-title text-6xl mb-4 text-[var(--pixel-purple)]">
            PIXELPUMP
          </h1>
          <p className="pixel-title text-2xl text-[var(--pixel-pink)]">
            TRANSFORME TON HÉRO
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Character Avatar */}
          <div className="lg:col-span-1">
            <Card className="pixel-glow">
              <CardContent className="p-6">
                <div className="aspect-square bg-gradient-to-b from-[var(--pixel-purple)] to-[var(--pixel-pink)] rounded-lg flex items-center justify-center mb-4">
                  {/* Pixel Character - simplified representation */}
                  <div className="w-32 h-32 relative">
                    <div className="absolute inset-0 bg-[var(--pixel-orange)] opacity-80 rounded-lg"></div>
                    <div className="absolute top-4 left-8 w-4 h-4 bg-[var(--pixel-dark)] rounded-sm"></div>
                    <div className="absolute top-4 right-8 w-4 h-4 bg-[var(--pixel-dark)] rounded-sm"></div>
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-8 h-2 bg-[var(--pixel-dark)] rounded-sm"></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Character Progress */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-[var(--pixel-purple)]">PROGRESSION PERSONNAGE</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-4xl font-bold text-[var(--pixel-cyan)] mb-2">Niv.6</div>
                  <div className="w-24 h-24 mx-auto bg-gradient-to-br from-[var(--pixel-purple)] to-[var(--pixel-pink)] rounded-lg flex items-center justify-center">
                    {/* Mini character sprite */}
                    <div className="w-12 h-12 bg-[var(--pixel-orange)] rounded opacity-90"></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Stats */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-[var(--pixel-purple)]">BADGES</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-[var(--pixel-red)] rounded"></div>
                    <span className="font-pixel text-sm">Force</span>
                  </div>
                  <Badge variant="destructive">12</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-[var(--pixel-pink)] rounded"></div>
                    <span className="font-pixel text-sm">Endurance</span>
                  </div>
                  <Badge variant="secondary">8</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-[var(--pixel-yellow)] rounded"></div>
                    <span className="font-pixel text-sm">Vitesse</span>
                  </div>
                  <Badge variant="outline">13</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Daily Quests */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-[var(--pixel-orange)]">DÉFIS DU JOUR</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="pixel-card bg-[var(--pixel-space)]">
                    <div className="space-y-2">
                      <div className="font-pixel text-sm text-[var(--pixel-orange)]">- 20 SQUATS</div>
                      <div className="font-pixel text-sm text-[var(--pixel-orange)]">- 5 POMPES</div>
                      <div className="font-pixel text-sm text-[var(--pixel-yellow)]">+50 XP</div>
                    </div>
                  </div>

                  <div className="pixel-card bg-[var(--pixel-space)]">
                    <div className="flex justify-center gap-4 items-center">
                      <div className="w-8 h-8 bg-[var(--pixel-yellow)] rounded"></div>
                      <div className="w-8 h-8 bg-[var(--pixel-pink)] rounded"></div>
                      <div className="w-8 h-8 bg-[var(--pixel-orange)] rounded"></div>
                    </div>
                    <div className="text-center mt-2">
                      <div className="text-2xl font-pixel text-[var(--pixel-yellow)]">T</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Achievements */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-[var(--pixel-orange)]">BADGES</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="pixel-card bg-[var(--pixel-space)] h-32">
                  {/* Empty state for now */}
                  <div className="h-full flex items-center justify-center text-[var(--pixel-grid)] font-pixel">
                    BIENTÔT...
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4 mt-8">
          <Button variant="default" size="lg">
            COMMENCER ENTRAÎNEMENT
          </Button>
          <Button variant="outline" size="lg">
            VOIR PROFIL
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
