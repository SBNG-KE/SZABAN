// components/CrisisManagement.tsx
'use client';
import { useState, useEffect } from 'react';

interface Crisis {
  id: number;
  title: string;
  description: string;
  severity: string;
  affected_countries: string[];
  resolution_options: string[];
  active: boolean;
}

export default function CrisisManagement() {
  const [crises, setCrises] = useState<Crisis[]>([]);
  const [selectedResolution, setSelectedResolution] = useState('');
  const [result, setResult] = useState('');

  useEffect(() => {
    // eslint-disable-next-line react-hooks/immutability
    fetchActiveCrises();
  }, []);

  const fetchActiveCrises = async () => {
    try {
      const response = await fetch('http://localhost:8000/crisis/active');
      const data = await response.json();
      setCrises(data.crisis_events);
    } catch (error) {
      console.error('Error fetching crises:', error);
    }
  };

  const resolveCrisis = async (crisisId: number) => {
    if (!selectedResolution) return;

    try {
      const response = await fetch('http://localhost:8000/crisis/resolve', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          crisis_id: crisisId,
          resolution: selectedResolution,
          resources_committed: {}
        })
      });

      const data = await response.json();
      setResult(data.result);
      fetchActiveCrises();
    } catch (error) {
      console.error('Error resolving crisis:', error);
      setResult('Failed to resolve crisis');
    }
  };

  const generateNewCrisis = async () => {
    try {
      const response = await fetch('http://localhost:8000/crisis/generate', {
        method: 'POST'
      });
      const data = await response.json();
      if (data.crisis) {
        setCrises(prev => [...prev, data.crisis]);
      }
    } catch (error) {
      console.error('Error generating crisis:', error);
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'low': return 'bg-green-500/20 border-green-500 text-green-400';
      case 'medium': return 'bg-yellow-500/20 border-yellow-500 text-yellow-400';
      case 'high': return 'bg-red-500/20 border-red-500 text-red-400';
      default: return 'bg-gray-500/20 border-gray-500 text-gray-400';
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-2">🚨 Crisis Management Center</h1>
        <p className="text-gray-400">National emergency response and crisis resolution</p>
      </div>

      {/* Crisis Controls */}
      <div className="flex justify-center">
        <button 
          className="bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 flex items-center space-x-2"
          onClick={generateNewCrisis}
        >
          <span>⚠️</span>
          <span>Simulate New Crisis</span>
        </button>
      </div>

      {/* Crises Grid */}
      <div className="grid gap-6">
        {crises.length === 0 ? (
          <div className="bg-gray-800/50 rounded-2xl border border-gray-700 p-12 text-center backdrop-blur-lg">
            <div className="text-6xl mb-4">🕊️</div>
            <h3 className="text-2xl font-bold text-green-400 mb-2">No Active Crises</h3>
            <p className="text-gray-400">The nation is at peace. All systems operational.</p>
          </div>
        ) : (
          crises.map(crisis => (
            <div 
              key={crisis.id} 
              className="bg-gray-800/50 rounded-2xl border border-gray-700 p-6 backdrop-blur-lg"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-white">{crisis.title}</h3>
                <span className={`px-3 py-1 rounded-full text-sm font-semibold border ${getSeverityColor(crisis.severity)}`}>
                  {crisis.severity.toUpperCase()}
                </span>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">{crisis.description}</p>
              
              <div className="bg-gray-700/50 rounded-xl border border-gray-600 p-4">
                <h4 className="text-lg font-bold text-yellow-400 mb-3">🛡️ Resolution Options</h4>
                <div className="flex flex-col lg:flex-row lg:items-end gap-4">
                  <div className="flex-1">
                    <select 
                      value={selectedResolution} 
                      onChange={(e) => setSelectedResolution(e.target.value)}
                      className="w-full bg-gray-600 border border-gray-500 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    >
                      <option value="" className="text-gray-400">Select resolution</option>
                      {crisis.resolution_options.map(option => (
                        <option key={option} value={option} className="text-white">
                          {option.replace(/_/g, ' ')}
                        </option>
                      ))}
                    </select>
                  </div>
                  <button 
                    className="bg-yellow-600 hover:bg-yellow-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white py-3 px-6 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 disabled:scale-100 whitespace-nowrap"
                    onClick={() => resolveCrisis(crisis.id)}
                    disabled={!selectedResolution}
                  >
                    🚀 Resolve Crisis
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Results Panel */}
      {result && (
        <div className="bg-gray-800/50 rounded-2xl border border-gray-700 p-6 backdrop-blur-lg">
          <h3 className="text-xl font-bold text-green-400 mb-4">Resolution Results</h3>
          <div className="bg-black/30 rounded-xl border border-gray-600 p-4">
            <p className="text-gray-200 leading-relaxed">{result}</p>
          </div>
        </div>
      )}
    </div>
  );
}