// components/SecretIntelligence.tsx
'use client';
import { useState } from 'react';

export default function SecretIntelligence() {
  const [intelligenceReport, setIntelligenceReport] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const gatherIntelligence = async (targetCountry: string) => {
    setIsLoading(true);
    try {
      const response = await fetch(`http://localhost:8000/intelligence/${targetCountry}`);
      const data = await response.json();
      setIntelligenceReport(data.intelligence_report);
    } catch (error) {
      console.error('Error gathering intelligence:', error);
      setIntelligenceReport('Failed to gather intelligence');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-2">🔒 Classified Intelligence Portal</h1>
        <p className="text-gray-400">Access restricted to President only - Top Secret Clearance Required</p>
      </div>

      <div className="bg-gray-800/50 rounded-2xl border border-gray-700 p-8 backdrop-blur-lg max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">🕵️‍♂️</div>
          <h2 className="text-2xl font-bold text-red-400">SECRET INTELLIGENCE NETWORK</h2>
          <p className="text-gray-400 mt-2">Strategic intelligence gathering operations</p>
        </div>

        {/* Intelligence Actions */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <button 
            onClick={() => gatherIntelligence('NEIGHBOR_COUNTRY')}
            disabled={isLoading}
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white py-4 px-6 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 disabled:scale-100 flex items-center justify-center space-x-3"
          >
            <span className="text-2xl">🏰</span>
            <div className="text-left">
              <div className="font-bold">Gather Intel on Neighbor</div>
              <div className="text-sm opacity-75">Regional threat assessment</div>
            </div>
          </button>
          
          <button 
            onClick={() => gatherIntelligence('RIVAL_COUNTRY')}
            disabled={isLoading}
            className="bg-red-600 hover:bg-red-700 disabled:bg-gray-600 text-white py-4 px-6 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 disabled:scale-100 flex items-center justify-center space-x-3"
          >
            <span className="text-2xl">⚔️</span>
            <div className="text-left">
              <div className="font-bold">Monitor Rival Activities</div>
              <div className="text-sm opacity-75">Strategic competitor analysis</div>
            </div>
          </button>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500 mx-auto mb-4"></div>
            <p className="text-yellow-400 font-semibold">Generating intelligence report...</p>
            <p className="text-gray-400 text-sm mt-2">Accessing classified networks</p>
          </div>
        )}

        {/* Intelligence Report */}
        {intelligenceReport && !isLoading && (
          <div className="bg-black/40 rounded-xl border border-red-500/30 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-red-400 flex items-center">
                📋 CLASSIFIED INTELLIGENCE REPORT
              </h3>
              <span className="bg-red-600 text-white text-xs px-2 py-1 rounded font-semibold">
                TOP SECRET
              </span>
            </div>
            <div className="bg-gray-900/50 rounded-lg border border-gray-700 p-4">
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-200 leading-relaxed whitespace-pre-line">{intelligenceReport}</p>
              </div>
            </div>
            <div className="mt-4 text-center">
              <p className="text-gray-500 text-sm">This document contains classified information - Handle with extreme caution</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}