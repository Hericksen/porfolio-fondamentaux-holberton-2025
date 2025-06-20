import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const success = await login({ email, password });
      if (!success) {
        setError('Invalid credentials. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen space-gradient pixel-grid-bg retro-scan-lines flex items-center justify-center p-4">
      <Card className="w-full max-w-md pixel-glow">
        <CardHeader className="text-center">
          <div className="mb-4">
            <h1 className="pixel-title text-4xl mb-2">
              <span className="text-[var(--pixel-cyan)]">PIXEL</span>
              <span className="text-[var(--pixel-purple)]">PUMP</span>
            </h1>
            <p className="text-[var(--pixel-grid)] font-pixel text-sm">
              Level up your coding journey
            </p>
          </div>
          <CardTitle className="text-[var(--pixel-purple)]">LOGIN</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-[var(--foreground)] font-pixel font-bold mb-2">
                EMAIL
              </label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-[var(--foreground)] font-pixel font-bold mb-2">
                PASSWORD
              </label>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                className="w-full"
              />
            </div>

            {error && (
              <div className="pixel-card bg-[var(--pixel-red)]/20 border-[var(--pixel-red)]">
                <p className="text-[var(--pixel-red)] font-pixel text-sm">
                  ⚠️ {error}
                </p>
              </div>
            )}

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full py-3"
              variant="default"
            >
              {isLoading ? 'LOGGING IN...' : 'LOGIN'}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-[var(--pixel-grid)] font-pixel text-sm">
              Don't have an account?{' '}
              <Link
                to="/register"
                className="text-[var(--pixel-cyan)] hover:text-[var(--pixel-pink)] transition-colors"
              >
                Register here
              </Link>
            </p>
          </div>

          {/* Pixel Art Decoration */}
          <div className="mt-6 flex justify-center space-x-4">
            <div className="w-4 h-4 bg-[var(--pixel-purple)] pixel-glow"></div>
            <div className="w-4 h-4 bg-[var(--pixel-cyan)] pixel-glow" style={{ animationDelay: '0.5s' }}></div>
            <div className="w-4 h-4 bg-[var(--pixel-yellow)] pixel-glow" style={{ animationDelay: '1s' }}></div>
            <div className="w-4 h-4 bg-[var(--pixel-orange)] pixel-glow" style={{ animationDelay: '1.5s' }}></div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
