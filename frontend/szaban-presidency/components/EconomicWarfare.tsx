// components/EconomicWarfare.tsx
'use client';
import { useState } from 'react';

interface Country {
  id: string;
  name: string;
  gdp: number;
  gdp_growth_rate: number;
  military_strength: number;
  resources: {
    oil: number;
    uranium: number;
    food: number;
  };
}

interface EconomicWarfareProps {
  countries: Country[];
}

interface Sanction {
  type: string;
  target: string;
  strength: number;
  duration: number;
}

export default function EconomicWarfare({ countries }: EconomicWarfareProps) {
  const [selectedCountry, setSelectedCountry] = useState<string>('');
  const [sanctionType, setSanctionType] = useState<string>('trade');
  const [sanctionStrength, setSanctionStrength] = useState<number>(50);
  const [activeSanctions, setActiveSanctions] = useState<Sanction[]>([]);
  const [espionageTarget, setEspionageTarget] = useState<string>('');
  const [espionageResults, setEspionageResults] = useState<string>('');

  const targetCountries = countries.filter(country => country.name !== 'SZABAN');

  const imposeSanctions = async () => {
    if (!selectedCountry) return;

    const sanction: Sanction = {
      type: sanctionType,
      target: selectedCountry,
      strength: sanctionStrength,
      duration: 12
    };

    try {
      const response = await fetch('http://localhost:8000/economic/sanctions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          target_country: selectedCountry,
          sanction_type: sanctionType,
          strength: sanctionStrength
        })
      });

      if (response.ok) {
        setActiveSanctions(prev => [...prev, sanction]);
        alert(`Sanctions imposed on ${selectedCountry}`);
      }
    } catch (error) {
      console.error('Error imposing sanctions:', error);
    }
  };

  const conductEconomicEspionage = async () => {
    if (!espionageTarget) return;

    try {
      const response = await fetch('http://localhost:8000/economic/espionage', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          target_country: espionageTarget
        })
      });

      const data = await response.json();
      setEspionageResults(data.report);
    } catch (error) {
      console.error('Error conducting espionage:', error);
    }
  };

  const liftSanctions = (target: string) => {
    setActiveSanctions(prev => prev.filter(s => s.target !== target));
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-2">💰 Economic Warfare Command</h1>
        <p className="text-gray-400">Strategic economic operations to maintain SZABANs dominance</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Sanctions Panel */}
        <div className="bg-gray-800/50 rounded-2xl border border-gray-700 p-6 backdrop-blur-lg">
          <h3 className="text-xl font-bold text-red-400 mb-4 flex items-center">
            ⚡ Economic Sanctions
          </h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Target Country</label>
              <select 
                value={selectedCountry} 
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-red-500 focus:border-transparent"
              >
                <option value="" className="text-gray-400">Select target country</option>
                {targetCountries.map(country => (
                  <option key={country.id} value={country.name} className="text-white">
                    {country.name} (GDP: ${(country.gdp / 1e9).toFixed(1)}B)
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Sanction Type</label>
              <select 
                value={sanctionType} 
                onChange={(e) => setSanctionType(e.target.value)}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-red-500 focus:border-transparent"
              >
                <option value="trade" className="text-white">Trade Embargo</option>
                <option value="financial" className="text-white">Financial Sanctions</option>
                <option value="technology" className="text-white">Technology Export Ban</option>
                <option value="energy" className="text-white">Energy Sanctions</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Sanction Strength: <span className="text-red-400">{sanctionStrength}%</span>
              </label>
              <input 
                type="range" 
                min="10" 
                max="100" 
                value={sanctionStrength}
                onChange={(e) => setSanctionStrength(Number(e.target.value))}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
              />
            </div>

            <button 
              className="w-full bg-red-600 hover:bg-red-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white py-3 px-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 disabled:scale-100"
              onClick={imposeSanctions}
              disabled={!selectedCountry}
            >
              🚫 Impose Sanctions
            </button>
          </div>
        </div>

        {/* Espionage Panel */}
        <div className="bg-gray-800/50 rounded-2xl border border-gray-700 p-6 backdrop-blur-lg">
          <h3 className="text-xl font-bold text-purple-400 mb-4 flex items-center">
            🕵️ Economic Espionage
          </h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Espionage Target</label>
              <select 
                value={espionageTarget} 
                onChange={(e) => setEspionageTarget(e.target.value)}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="" className="text-gray-400">Select target for intelligence</option>
                {targetCountries.map(country => (
                  <option key={country.id} value={country.name} className="text-white">
                    {country.name}
                  </option>
                ))}
              </select>
            </div>

            <button 
              className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white py-3 px-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 disabled:scale-100"
              onClick={conductEconomicEspionage}
              disabled={!espionageTarget}
            >
              🔍 Conduct Economic Espionage
            </button>

            {espionageResults && (
              <div className="bg-gray-700/50 rounded-xl border border-gray-600 p-4 mt-4">
                <h4 className="text-lg font-bold text-purple-400 mb-2">Espionage Report</h4>
                <div className="bg-black/30 rounded-lg p-3 border border-gray-600">
                  <p className="text-gray-200 text-sm leading-relaxed">{espionageResults}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Active Sanctions */}
        <div className="bg-gray-800/50 rounded-2xl border border-gray-700 p-6 backdrop-blur-lg">
          <h3 className="text-xl font-bold text-orange-400 mb-4 flex items-center">
            📋 Active Sanctions
          </h3>
          {activeSanctions.length === 0 ? (
            <p className="text-gray-400 text-center py-4">No active sanctions</p>
          ) : (
            <div className="space-y-3">
              {activeSanctions.map((sanction, index) => (
                <div key={index} className="bg-gray-700/50 rounded-lg border border-gray-600 p-4 flex justify-between items-center">
                  <div>
                    <div className="font-bold text-white">{sanction.target}</div>
                    <div className="text-sm text-gray-300">
                      Type: {sanction.type} | Strength: {sanction.strength}%
                    </div>
                  </div>
                  <button 
                    className="bg-green-600 hover:bg-green-700 text-white py-1 px-3 rounded text-sm font-semibold transition-colors"
                    onClick={() => liftSanctions(sanction.target)}
                  >
                    Lift
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Economic Intelligence */}
        <div className="bg-gray-800/50 rounded-2xl border border-gray-700 p-6 backdrop-blur-lg">
          <h3 className="text-xl font-bold text-blue-400 mb-4 flex items-center">
            📊 Economic Intelligence
          </h3>
          <div className="grid gap-3 max-h-96 overflow-y-auto">
            {targetCountries.map(country => (
              <div key={country.id} className="bg-gray-700/50 rounded-lg border border-gray-600 p-4">
                <h4 className="font-bold text-white mb-2">{country.name}</h4>
                <div className="text-sm space-y-1">
                  <p className="text-green-400">GDP: ${(country.gdp / 1e9).toFixed(1)}B</p>
                  <p className="text-yellow-400">Growth: {country.gdp_growth_rate.toFixed(1)}%</p>
                  <p className="text-gray-300">
                    Resources: Oil: {country.resources.oil} | Food: {country.resources.food}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}