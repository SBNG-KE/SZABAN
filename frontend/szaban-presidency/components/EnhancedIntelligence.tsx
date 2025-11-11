// components/EnhancedIntelligence.tsx
'use client';
import { useState } from 'react';

interface Country {
  id: string;
  name: string;
  technology_level: number;
  public_opinion: number;
}

interface EnhancedIntelligenceProps {
  countries: Country[];
}

export default function EnhancedIntelligence({ countries }: EnhancedIntelligenceProps) {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [operationType, setOperationType] = useState('surveillance');
  const [result, setResult] = useState('');

  const targetCountries = countries.filter(country => country.name !== 'SZABAN');

  const executeIntelligenceOperation = async () => {
    if (!selectedCountry) return;

    try {
      const response = await fetch('http://localhost:8000/intelligence/operation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          target_country: selectedCountry,
          operation_type: operationType,
          resources: {}
        })
      });

      const data = await response.json();
      setResult(data.result);
    } catch (error) {
      console.error('Error executing intelligence operation:', error);
      setResult('Failed to execute intelligence operation');
    }
  };

  const getRiskLevelColor = (risk: string) => {
    switch (risk) {
      case 'Low Risk': return 'bg-green-500/20 text-green-400 border-green-500';
      case 'Medium Risk': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500';
      case 'High Risk': return 'bg-orange-500/20 text-orange-400 border-orange-500';
      case 'Very High Risk': return 'bg-red-500/20 text-red-400 border-red-500';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500';
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-2">🕵️ Enhanced Intelligence Network</h1>
        <p className="text-gray-400">Covert operations and intelligence gathering</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Operations Panel */}
        <div className="bg-gray-800/50 rounded-2xl border border-gray-700 p-6 backdrop-blur-lg">
          <h3 className="text-xl font-bold text-purple-400 mb-6 flex items-center">
            🎭 Covert Operations
          </h3>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Target Country</label>
              <select 
                value={selectedCountry} 
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="" className="text-gray-400">Select target</option>
                {targetCountries.map(country => (
                  <option key={country.id} value={country.name} className="text-white">
                    {country.name} (Tech: {country.technology_level})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Operation Type</label>
              <select 
                value={operationType} 
                onChange={(e) => setOperationType(e.target.value)}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="surveillance" className="text-white">Surveillance</option>
                <option value="sabotage" className="text-white">Sabotage</option>
                <option value="propaganda" className="text-white">Propaganda</option>
                <option value="recruitment" className="text-white">Asset Recruitment</option>
              </select>
            </div>

            <button 
              className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white py-3 px-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 disabled:scale-100"
              onClick={executeIntelligenceOperation}
              disabled={!selectedCountry}
            >
              🎯 Execute Covert Operation
            </button>
          </div>

          {result && (
            <div className="mt-6 bg-gray-700/50 rounded-xl border border-gray-600 p-4">
              <h4 className="text-lg font-bold text-yellow-400 mb-2">Operation Result</h4>
              <div className="bg-black/30 rounded-lg p-3 border border-gray-600">
                <p className="text-gray-200 text-sm leading-relaxed">{result}</p>
              </div>
            </div>
          )}
        </div>

        {/* Capabilities Panel */}
        <div className="bg-gray-800/50 rounded-2xl border border-gray-700 p-6 backdrop-blur-lg">
          <h3 className="text-xl font-bold text-blue-400 mb-6 flex items-center">
            💼 Intelligence Capabilities
          </h3>
          <div className="grid gap-4">
            {[
              { icon: '📡', title: 'Surveillance', description: 'Monitor enemy communications and movements', risk: 'Medium Risk' },
              { icon: '💣', title: 'Sabotage', description: 'Disrupt enemy military and economic capabilities', risk: 'High Risk' },
              { icon: '📢', title: 'Propaganda', description: 'Influence foreign public opinion', risk: 'Low Risk' },
              { icon: '🕵️', title: 'Recruitment', description: 'Recruit assets within enemy governments', risk: 'Very High Risk' },
            ].map((capability, index) => (
              <div key={index} className="bg-gray-700/50 rounded-xl border border-gray-600 p-4">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{capability.icon}</span>
                    <h4 className="font-bold text-white text-lg">{capability.title}</h4>
                  </div>
                  <span className={`px-2 py-1 rounded text-xs font-semibold border ${getRiskLevelColor(capability.risk)}`}>
                    {capability.risk}
                  </span>
                </div>
                <p className="text-gray-300 text-sm">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}