// components/PresidentialDashboard.tsx
'use client';
import { useState } from 'react';

interface Country {
  id: string;
  name: string;
  gdp: number;
  military_strength: number;
  nuclear_arsenal: number;
}

interface PresidentialDashboardProps {
  countries: Country[];
}

export default function PresidentialDashboard({ countries }: PresidentialDashboardProps) {
  const [targetCountry, setTargetCountry] = useState('');
  const [result, setResult] = useState('');

  const safeCountries = countries || [];
  const targetCountries = safeCountries.filter(country => country.name !== 'SZABAN');
  const sortedCountries = [...safeCountries].sort((a, b) => b.gdp - a.gdp);

  const executePresidentialAction = async (action: string) => {
    if (!targetCountry) return;
    
    try {
      const response = await fetch('http://localhost:8000/president/action', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action_type: action,
          target_country: targetCountry,
          details: {}
        })
      });
      
      const data = await response.json();
      setResult(data.result || 'Action completed');
    } catch (error) {
      console.error('Error executing action:', error);
      setResult('Failed to execute action');
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-2">Office of the President - SZABAN</h1>
        <p className="text-gray-400">Global Power Command Center</p>
      </div>
      
      {/* Country Rankings */}
      <div className="bg-gray-800/50 rounded-2xl border border-gray-700 p-6 backdrop-blur-lg">
        <h2 className="text-2xl font-bold text-yellow-400 mb-6 text-center">🌍 Global Power Rankings</h2>
        {safeCountries.length === 0 ? (
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500 mx-auto mb-4"></div>
            <p className="text-gray-400">Loading countries data...</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-600">
                  <th className="text-left py-4 px-4 text-yellow-400 font-semibold">Rank</th>
                  <th className="text-left py-4 px-4 text-yellow-400 font-semibold">Country</th>
                  <th className="text-left py-4 px-4 text-yellow-400 font-semibold">GDP ($)</th>
                  <th className="text-left py-4 px-4 text-yellow-400 font-semibold">Military Power</th>
                  <th className="text-left py-4 px-4 text-yellow-400 font-semibold">Nuclear Arsenal</th>
                </tr>
              </thead>
              <tbody>
                {sortedCountries.map((country, index) => (
                  <tr 
                    key={`${country.id}-${index}`} 
                    className={`border-b border-gray-700/50 transition-colors hover:bg-gray-700/30 ${
                      country.name === 'SZABAN' ? 'bg-yellow-500/10 border-l-4 border-l-yellow-500' : ''
                    }`}
                  >
                    <td className="py-4 px-4">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                        index === 0 ? 'bg-yellow-500 text-black' : 
                        index === 1 ? 'bg-gray-400 text-black' : 
                        index === 2 ? 'bg-orange-500 text-black' : 'bg-gray-600 text-white'
                      }`}>
                        {index + 1}
                      </div>
                    </td>
                    <td className="py-4 px-4 font-semibold">
                      {country.name === 'SZABAN' ? '🇸🇿 ' : ''}{country.name}
                    </td>
                    <td className="py-4 px-4 text-green-400 font-mono">
                      ${(country.gdp / 1e9).toFixed(1)}B
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center">
                        <div className="w-24 bg-gray-700 rounded-full h-2 mr-3">
                          <div 
                            className="bg-red-500 h-2 rounded-full" 
                            style={{ width: `${Math.min(100, country.military_strength)}%` }}
                          ></div>
                        </div>
                        <span className="text-red-400 font-semibold">{country.military_strength}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center">
                        <div className="w-24 bg-gray-700 rounded-full h-2 mr-3">
                          <div 
                            className="bg-orange-500 h-2 rounded-full" 
                            style={{ width: `${Math.min(100, country.nuclear_arsenal / 20)}%` }}
                          ></div>
                        </div>
                        <span className="text-orange-400 font-semibold">{country.nuclear_arsenal}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Presidential Actions */}
      <div className="bg-gray-800/50 rounded-2xl border border-gray-700 p-6 backdrop-blur-lg">
        <h2 className="text-2xl font-bold text-yellow-400 mb-6 text-center">⚡ Presidential Actions</h2>
        
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Target Country</label>
              <select 
                value={targetCountry} 
                onChange={(e) => setTargetCountry(e.target.value)}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
              >
                <option value="" className="text-gray-400">Select Target Country</option>
                {targetCountries.map(country => (
                  <option key={country.id} value={country.name} className="text-white">
                    {country.name} (Military: {country.military_strength})
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button 
                onClick={() => executePresidentialAction('trade_sanctions')}
                disabled={!targetCountry}
                className="bg-red-600 hover:bg-red-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white py-3 px-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 disabled:scale-100"
              >
                🚫 Trade Sanctions
              </button>
              <button 
                onClick={() => executePresidentialAction('military_exercises')}
                disabled={!targetCountry}
                className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white py-3 px-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 disabled:scale-100"
              >
                💪 Military Exercises
              </button>
              <button 
                onClick={() => executePresidentialAction('diplomacy')}
                disabled={!targetCountry}
                className="bg-green-600 hover:bg-green-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white py-3 px-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 disabled:scale-100"
              >
                🤝 Initiate Diplomacy
              </button>
              <button 
                onClick={() => executePresidentialAction('intelligence_gathering')}
                disabled={!targetCountry}
                className="bg-purple-600 hover:bg-purple-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white py-3 px-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 disabled:scale-100"
              >
                🕵️ Gather Intelligence
              </button>
            </div>
          </div>

          {result && (
            <div className="bg-gray-700/50 rounded-xl border border-gray-600 p-6">
              <h3 className="text-lg font-bold text-yellow-400 mb-3">Action Result</h3>
              <div className="bg-black/30 rounded-lg p-4 border border-gray-600">
                <p className="text-gray-200 leading-relaxed">{result}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}