// components/DiplomaticRelations.tsx
'use client';
import { useState } from 'react';

interface Country {
  id: string;
  name: string;
  public_opinion: number;
  alliances: string[];
  stability: number;
}

interface DiplomaticRelationsProps {
  countries: Country[];
}

export default function DiplomaticRelations({ countries }: DiplomaticRelationsProps) {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [diplomacyType, setDiplomacyType] = useState('alliance');
  const [terms, setTerms] = useState('');
  const [result, setResult] = useState('');

  const targetCountries = countries.filter(country => country.name !== 'SZABAN');

  const executeDiplomacy = async () => {
    if (!selectedCountry) return;

    try {
      const response = await fetch('http://localhost:8000/diplomacy/action', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          target_country: selectedCountry,
          diplomacy_type: diplomacyType,
          terms: terms ? JSON.parse(terms) : {}
        })
      });

      const data = await response.json();
      setResult(data.result);
    } catch (error) {
      console.error('Error executing diplomacy:', error);
      setResult('Failed to execute diplomatic action');
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-2">🤝 Diplomatic Relations</h1>
        <p className="text-gray-400">International diplomacy and alliance management</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Actions Panel */}
        <div className="bg-gray-800/50 rounded-2xl border border-gray-700 p-6 backdrop-blur-lg">
          <h3 className="text-xl font-bold text-green-400 mb-6 flex items-center">
            🌐 Diplomatic Actions
          </h3>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Target Country</label>
              <select 
                value={selectedCountry} 
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="" className="text-gray-400">Select country</option>
                {targetCountries.map(country => (
                  <option key={country.id} value={country.name} className="text-white">
                    {country.name} (Relations: {country.public_opinion})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Diplomacy Type</label>
              <select 
                value={diplomacyType} 
                onChange={(e) => setDiplomacyType(e.target.value)}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="alliance" className="text-white">Form Alliance</option>
                <option value="treaty" className="text-white">Sign Treaty</option>
                <option value="negotiation" className="text-white">Initiate Negotiation</option>
                <option value="summit" className="text-white">Host Summit</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Terms (JSON)</label>
              <textarea 
                value={terms}
                onChange={(e) => setTerms(e.target.value)}
                placeholder='{"treaty_type": "trade", "szaban_position": "..."}'
                rows={3}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
              />
            </div>

            <button 
              className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white py-3 px-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 disabled:scale-100"
              onClick={executeDiplomacy}
              disabled={!selectedCountry}
            >
              ✨ Execute Diplomatic Action
            </button>
          </div>
        </div>

        {/* Relations Panel */}
        <div className="bg-gray-800/50 rounded-2xl border border-gray-700 p-6 backdrop-blur-lg">
          <h3 className="text-xl font-bold text-blue-400 mb-6 flex items-center">
            📊 Current Relations
          </h3>
          <div className="grid gap-4 max-h-96 overflow-y-auto">
            {targetCountries.map(country => (
              <div key={country.id} className="bg-gray-700/50 rounded-xl border border-gray-600 p-4">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-bold text-white text-lg">{country.name}</h4>
                  {country.alliances.includes('SZABAN') && (
                    <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-full font-semibold">
                      ALLIED
                    </span>
                  )}
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Relations:</span>
                    <div className="flex items-center">
                      <div className="w-20 bg-gray-600 rounded-full h-2 mr-2">
                        <div 
                          className="bg-blue-500 h-2 rounded-full" 
                          style={{ width: `${country.public_opinion}%` }}
                        ></div>
                      </div>
                      <span className={`font-bold ${
                        country.public_opinion >= 80 ? 'text-green-400' :
                        country.public_opinion >= 60 ? 'text-yellow-400' : 'text-red-400'
                      }`}>
                        {country.public_opinion}/100
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Stability:</span>
                    <span className={`font-bold ${
                      country.stability >= 80 ? 'text-green-400' :
                      country.stability >= 60 ? 'text-yellow-400' : 'text-red-400'
                    }`}>
                      {country.stability}/100
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Alliances:</span>
                    <span className="text-purple-400 font-bold">{country.alliances.length}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Results Panel */}
        {result && (
          <div className="lg:col-span-2 bg-gray-800/50 rounded-2xl border border-gray-700 p-6 backdrop-blur-lg">
            <h3 className="text-xl font-bold text-yellow-400 mb-4">Diplomatic Result</h3>
            <div className="bg-black/30 rounded-xl border border-gray-600 p-4">
              <p className="text-gray-200 leading-relaxed">{result}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}