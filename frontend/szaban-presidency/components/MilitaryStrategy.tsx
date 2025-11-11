// components/MilitaryStrategy.tsx
'use client';
import { useState } from 'react';

interface Country {
  id: string;
  name: string;
  military_strength: number;
  nuclear_arsenal: number;
  technology_level: number;
}

interface MilitaryStrategyProps {
  countries: Country[];
}

export default function MilitaryStrategy({ countries }: MilitaryStrategyProps) {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [actionType, setActionType] = useState('military_exercises');
  const [intensity, setIntensity] = useState(50);
  const [result, setResult] = useState('');

  const targetCountries = countries.filter(country => country.name !== 'SZABAN');

  const executeMilitaryAction = async () => {
    if (!selectedCountry) return;

    try {
      const response = await fetch('http://localhost:8000/military/action', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          target_country: selectedCountry,
          action_type: actionType,
          intensity: intensity,
          details: {}
        })
      });

      const data = await response.json();
      setResult(data.result);
      
      if (data.consequences) {
        console.log('Consequences:', data.consequences);
      }
    } catch (error) {
      console.error('Error executing military action:', error);
      setResult('Failed to execute military action');
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-2">⚔️ Military Strategy Command</h1>
        <p className="text-gray-400">Strategic military operations and intelligence</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Operations Panel */}
        <div className="bg-gray-800/50 rounded-2xl border border-gray-700 p-6 backdrop-blur-lg">
          <h3 className="text-xl font-bold text-red-400 mb-6 flex items-center">
            🎯 Military Operations
          </h3>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Target Country</label>
              <select 
                value={selectedCountry} 
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-red-500 focus:border-transparent"
              >
                <option value="" className="text-gray-400">Select target</option>
                {targetCountries.map(country => (
                  <option key={country.id} value={country.name} className="text-white">
                    {country.name} (Military: {country.military_strength})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Operation Type</label>
              <select 
                value={actionType} 
                onChange={(e) => setActionType(e.target.value)}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-red-500 focus:border-transparent"
              >
                <option value="military_exercises" className="text-white">Military Exercises</option>
                <option value="nuclear_threat" className="text-white">Nuclear Deterrence</option>
                <option value="covert_ops" className="text-white">Covert Operations</option>
                <option value="cyber_attack" className="text-white">Cyber Attack</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Intensity: <span className="text-red-400">{intensity}%</span>
              </label>
              <input 
                type="range" 
                min="10" 
                max="100" 
                value={intensity}
                onChange={(e) => setIntensity(Number(e.target.value))}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
              />
            </div>

            <button 
              className="w-full bg-red-600 hover:bg-red-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white py-3 px-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 disabled:scale-100"
              onClick={executeMilitaryAction}
              disabled={!selectedCountry}
            >
              🚀 Execute Military Operation
            </button>
          </div>
        </div>

        {/* Intelligence Panel */}
        <div className="bg-gray-800/50 rounded-2xl border border-gray-700 p-6 backdrop-blur-lg">
          <h3 className="text-xl font-bold text-blue-400 mb-6 flex items-center">
            📡 Military Intelligence
          </h3>
          <div className="grid gap-4 max-h-96 overflow-y-auto">
            {targetCountries.map(country => (
              <div key={country.id} className="bg-gray-700/50 rounded-xl border border-gray-600 p-4">
                <h4 className="font-bold text-white text-lg mb-3">{country.name}</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Military Strength:</span>
                    <span className="text-red-400 font-bold">{country.military_strength}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Nuclear Arsenal:</span>
                    <span className="text-orange-400 font-bold">{country.nuclear_arsenal}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Tech Level:</span>
                    <span className="text-blue-400 font-bold">{country.technology_level}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Results Panel */}
        {result && (
          <div className="lg:col-span-2 bg-gray-800/50 rounded-2xl border border-gray-700 p-6 backdrop-blur-lg">
            <h3 className="text-xl font-bold text-yellow-400 mb-4">Operation Result</h3>
            <div className="bg-black/30 rounded-xl border border-gray-600 p-4">
              <p className="text-gray-200 leading-relaxed">{result}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}