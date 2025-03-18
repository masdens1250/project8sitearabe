import React, { useState, useEffect } from 'react';
import { getServiceStats, resetServiceUsage } from '../utils/emailService';

// Ce composant est destiné à l'administration pour surveiller l'utilisation des services d'email
// Il n'est pas lié à une route publique et devrait être protégé par authentification dans une application réelle

const AdminEmailStats = () => {
  const [stats, setStats] = useState<any[]>([]);
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (isAuthenticated) {
      setStats(getServiceStats());
    }
  }, [isAuthenticated]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mot de passe simple pour la démonstration - dans une application réelle, utilisez une authentification sécurisée
    if (password === 'admin123') {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Mot de passe incorrect');
    }
  };

  const handleReset = () => {
    if (window.confirm('Êtes-vous sûr de vouloir réinitialiser les compteurs d\'utilisation?')) {
      resetServiceUsage();
      setStats(getServiceStats());
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Accès administrateur</h2>
        {error && <p className="text-red-600 mb-4">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Mot de passe
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors"
          >
            Se connecter
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Statistiques d'utilisation des services d'email</h2>
        <button
          onClick={() => setIsAuthenticated(false)}
          className="text-sm text-gray-600 hover:text-gray-800"
        >
          Déconnexion
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border-b text-left">Email</th>
              <th className="py-2 px-4 border-b text-center">Utilisation</th>
              <th className="py-2 px-4 border-b text-center">Maximum</th>
              <th className="py-2 px-4 border-b text-center">Restant</th>
              <th className="py-2 px-4 border-b text-center">Statut</th>
            </tr>
          </thead>
          <tbody>
            {stats.map((stat, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="py-2 px-4 border-b">{stat.email}</td>
                <td className="py-2 px-4 border-b text-center">{stat.usage}</td>
                <td className="py-2 px-4 border-b text-center">{stat.maxUsage}</td>
                <td className="py-2 px-4 border-b text-center">{stat.remaining}</td>
                <td className="py-2 px-4 border-b text-center">
                  <span
                    className={`inline-block px-2 py-1 rounded-full text-xs ${
                      stat.usage >= stat.maxUsage
                        ? 'bg-red-100 text-red-800'
                        : stat.usage > stat.maxUsage * 0.8
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-green-100 text-green-800'
                    }`}
                  >
                    {stat.usage >= stat.maxUsage
                      ? 'Quota atteint'
                      : stat.usage > stat.maxUsage * 0.8
                      ? 'Presque plein'
                      : 'Actif'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6">
        <p className="text-gray-600 mb-4">
          Total des emails envoyés: {stats.reduce((total, stat) => total + stat.usage, 0)}
          <br />
          Capacité totale: {stats.reduce((total, stat) => total + stat.maxUsage, 0)}
          <br />
          Emails restants: {stats.reduce((total, stat) => total + stat.remaining, 0)}
        </p>

        <button
          onClick={handleReset}
          className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors"
        >
          Réinitialiser les compteurs
        </button>
      </div>
    </div>
  );
};

export default AdminEmailStats;