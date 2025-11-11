// components/InternalAffairs.tsx
'use client';
import { useState } from 'react';

interface Country {
  id: string;
  name: string;
  gdp: number;
  technology_level: number;
  resources: {
    oil: number;
    uranium: number;
    food: number;
  };
}

interface InternalAffairsProps {
  countries: Country[];
}

export default function InternalAffairs({ countries }: InternalAffairsProps) {
  const [actionType, setActionType] = useState('develop_tech');
  const [focusArea, setFocusArea] = useState('general');
  const [investment, setInvestment] = useState(1000000000);
  const [result, setResult] = useState('');

  const szaban = countries.find(country => country.name === 'SZABAN');

  const executeInternalAction = async () => {
    if (!szaban) return;

    try {
      const response = await fetch('http://localhost:8000/internal/action', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action_type: actionType,
          focus_area: focusArea,
          investment: investment,
          details: {}
        })
      });

      const data = await response.json();
      setResult(data.result);
    } catch (error) {
      console.error('Error executing internal action:', error);
      setResult('Failed to execute internal action');
    }
  };

  if (!szaban) return (
    <div className="text-center py-12">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500 mx-auto mb-4"></div>
      <p className="text-gray-400">Loading SZABAN data...</p>
    </div>
  );

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-2">🏛️ Internal Affairs & Development</h1>
        <p className="text-gray-400">National development and resource management</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Status Panel */}
        <div className="bg-gray-800/50 rounded-2xl border border-gray-700 p-6 backdrop-blur-lg">
          <h3 className="text-xl font-bold text-yellow-400 mb-6 flex items-center">
            📈 National Status
          </h3>
          <div className="grid gap-4">
            <div className="bg-gray-700/50 rounded-xl border border-gray-600 p-4">
              <h4 className="font-bold text-green-400 mb-2">💰 Economy</h4>
              <div className="text-2xl font-bold text-white">${(szaban.gdp / 1e9).toFixed(1)}B GDP</div>
              <div className="text-sm text-gray-300 mt-1">National Economic Power</div>
            </div>
            <div className="bg-gray-700/50 rounded-xl border border-gray-600 p-4">
              <h4 className="font-bold text-blue-400 mb-2">🔬 Technology</h4>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-white">{szaban.technology_level}/100</div>
                <div className="w-24 bg-gray-600 rounded-full h-2">
                  <div 
                    className="bg-blue-500 h-2 rounded-full" 
                    style={{ width: `${szaban.technology_level}%` }}
                  ></div>
                </div>
              </div>
              <div className="text-sm text-gray-300 mt-1">Technology Level</div>
            </div>
            <div className="bg-gray-700/50 rounded-xl border border-gray-600 p-4">
              <h4 className="font-bold text-orange-400 mb-2">⛽ Resources</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-300">Oil:</span>
                  <span className="text-orange-400 font-bold">{szaban.resources.oil}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Uranium:</span>
                  <span className="text-green-400 font-bold">{szaban.resources.uranium}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Food:</span>
                  <span className="text-yellow-400 font-bold">{szaban.resources.food}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Actions Panel */}
        <div className="bg-gray-800/50 rounded-2xl border border-gray-700 p-6 backdrop-blur-lg">
          <h3 className="text-xl font-bold text-purple-400 mb-6 flex items-center">
            🚀 Development Actions
          </h3>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Action Type</label>
              <select 
                value={actionType} 
                onChange={(e) => setActionType(e.target.value)}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="develop_tech" className="text-white">Develop Technology</option>
                <option value="extract_resources" className="text-white">Extract Resources</option>
                <option value="build_infrastructure" className="text-white">Build Infrastructure</option>
                <option value="research_weapons" className="text-white">Research Weapons</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Focus Area</label>
              <select 
                value={focusArea} 
                onChange={(e) => setFocusArea(e.target.value)}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="general" className="text-white">General</option>
                <option value="energy" className="text-white">Energy</option>
                <option value="defense" className="text-white">Defense</option>
                <option value="agriculture" className="text-white">Agriculture</option>
                <option value="technology" className="text-white">Advanced Tech</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Investment: <span className="text-green-400">${(investment / 1e6).toFixed(0)}M</span>
              </label>
              <input 
                type="range" 
                min="100000000" 
                max="10000000000" 
                step="100000000"
                value={investment}
                onChange={(e) => setInvestment(Number(e.target.value))}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>$100M</span>
                <span>$10B</span>
              </div>
            </div>

            <button 
              className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
              onClick={executeInternalAction}
            >
              💫 Execute Development
            </button>
          </div>

          {result && (
            <div className="mt-6 bg-gray-700/50 rounded-xl border border-gray-600 p-4">
              <h4 className="text-lg font-bold text-yellow-400 mb-2">Development Result</h4>
              <div className="bg-black/30 rounded-lg p-3 border border-gray-600">
                <p className="text-gray-200 text-sm leading-relaxed">{result}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}