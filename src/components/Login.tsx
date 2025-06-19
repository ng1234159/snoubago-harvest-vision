
import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { TreePine, LogIn } from 'lucide-react';

interface LoginProps {
  onLogin: (success: boolean) => void;
}

const Login = ({ onLogin }: LoginProps) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple demo authentication - in production, this would connect to a real auth system
    if (username === 'snoubago' && password === 'harvest2024') {
      onLogin(true);
      setError('');
    } else {
      setError('Invalid credentials. Try username: snoubago, password: harvest2024');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex items-center justify-center px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <TreePine className="h-12 w-12 text-green-600" />
          </div>
          <CardTitle className="text-2xl font-bold text-green-800">Snoubago Login</CardTitle>
          <CardDescription>Access the harvest data dashboard</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
                required
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                required
              />
            </div>
            {error && (
              <div className="text-red-600 text-sm bg-red-50 p-2 rounded">
                {error}
              </div>
            )}
            <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
              <LogIn className="h-4 w-4 mr-2" />
              Login
            </Button>
          </form>
          <div className="mt-4 text-sm text-gray-600 text-center">
            Demo credentials: snoubago / harvest2024
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
