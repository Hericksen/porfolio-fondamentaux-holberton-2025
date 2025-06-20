import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';

const Register: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const { register } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      setIsLoading(false);
      return;
    }

    try {
      const success = await register({ email, password, username });
      if (!success) {
        setError('Registration failed. Please try again.');
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
              Join the pixel revolution
            </p>
          </div>
          <CardTitle className="text-[var(--pixel-purple)]">REGISTER</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-[var(--foreground)] font-pixel font-bold mb-2">
                USERNAME
              </label>
              <Input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Choose your username"
                required
                className="w-full"
              />
            </div>

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
                placeholder="Create a password"
                required
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-[var(--foreground)] font-pixel font-bold mb-2">
                CONFIRM PASSWORD
              </label>
              <Input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm your password"
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
            >
              {isLoading ? 'CREATING ACCOUNT...' : 'REGISTER'}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-[var(--pixel-grid)] font-pixel text-sm">
              Already have an account?{' '}
              <Link
                to="/login"
                className="text-[var(--pixel-cyan)] hover:text-[var(--pixel-pink)] transition-colors"
              >
                Login here
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Register;
