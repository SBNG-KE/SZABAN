// app/page.tsx
'use client';
import { useState, useEffect } from 'react';
import PresidentialDashboard from '../components/PresidentialDashboard';
import SecretIntelligence from '../components/SecretIntelligence';
import EconomicWarfare from '../components/EconomicWarfare';
import DiplomaticRelations from '@/components/DiplomaticRelations';
import MilitaryStrategy from '@/components/MilitaryStrategy';
import InternalAffairs from '@/components/InternalAffairs';
import EnhancedIntelligence from '@/components/EnhancedIntelligence';
import CrisisManagement from '@/components/CrisisManagement';

interface Country {
  id: string;
  name: string;
  gdp: number;
  gdp_growth_rate: number;
  military_strength: number;
  nuclear_arsenal: number;
  technology_level: number;
  resources: {
    oil: number;
    uranium: number;
    food: number;
  };
  public_opinion: number;
  stability: number;
  alliances: string[];
}

type TabType = 'dashboard' | 'economic' | 'military' | 'diplomacy' | 'internal' | 'crisis' | 'intelligence';

export default function PresidentialOffice() {
  const [activeTab, setActiveTab] = useState<TabType>('dashboard');
  const [countries, setCountries] = useState<Country[]>([]);
  const [szabanData, setSzabanData] = useState<Country | null>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/immutability
    fetchGameState();
    const interval = setInterval(fetchGameState, 10000);
    return () => clearInterval(interval);
  }, []);

  const fetchGameState = async () => {
    try {
      const response = await fetch('http://localhost:8000/game-state');
      const data = await response.json();
      
      const safeCountries = data.countries || [];
      const countriesWithDefaults = safeCountries.map((country: Partial<Country>) => ({
        id: country.id || `temp-${Math.random()}`,
        name: country.name || 'Unknown',
        gdp: country.gdp || 0,
        gdp_growth_rate: country.gdp_growth_rate || 2.0,
        military_strength: country.military_strength || 50,
        nuclear_arsenal: country.nuclear_arsenal || 0,
        technology_level: country.technology_level || 60,
        resources: country.resources || { oil: 100, uranium: 50, food: 200 },
        public_opinion: country.public_opinion || 70,
        stability: country.stability || 75,
        alliances: country.alliances || []
      }));
      
      setCountries(countriesWithDefaults);
      const szaban = countriesWithDefaults.find((c: Country) => c.name === 'SZABAN');
      setSzabanData(szaban);
    } catch (error) {
      console.error('Error fetching game state:', error);
      setCountries([]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
      {/* Presidential Header */}
      <header className="bg-black/80 border-b border-yellow-500/30 backdrop-blur-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <h1 className="text-2xl lg:text-3xl font-bold text-yellow-400 mb-4 lg:mb-0">
              🇸🇿 Office of the President - Republic of SZABAN
            </h1>
            {szabanData && (
              <div className="flex flex-wrap gap-4">
                <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg px-4 py-2">
                  <div className="text-sm text-yellow-300">GDP Rank</div>
                  <div className="text-lg font-bold text-white">
                    #{countries.sort((a, b) => b.gdp - a.gdp).findIndex(c => c.name === 'SZABAN') + 1}
                  </div>
                </div>
                <div className="bg-red-500/10 border border-red-500/30 rounded-lg px-4 py-2">
                  <div className="text-sm text-red-300">Military Power</div>
                  <div className="text-lg font-bold text-white">{szabanData.military_strength}</div>
                </div>
                <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg px-4 py-2">
                  <div className="text-sm text-orange-300">Nuclear Arsenal</div>
                  <div className="text-lg font-bold text-white">{szabanData.nuclear_arsenal}</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="bg-black/60 border-b border-gray-700 backdrop-blur-lg">
        <div className="container mx-auto px-6">
          <div className="flex overflow-x-auto space-x-1 py-2">
            {[
              { key: 'dashboard', label: '🏛️ Dashboard', emoji: '🏛️' },
              { key: 'economic', label: '💰 Economic', emoji: '💰' },
              { key: 'military', label: '⚔️ Military', emoji: '⚔️' },
              { key: 'diplomacy', label: '🤝 Diplomacy', emoji: '🤝' },
              { key: 'internal', label: '🏛️ Internal', emoji: '🏛️' },
              { key: 'crisis', label: '🚨 Crisis', emoji: '🚨' },
              { key: 'intelligence', label: '🕵️ Intelligence', emoji: '🕵️' },
            ].map((tab) => (
              <button
                key={tab.key}
                className={`flex items-center space-x-2 px-4 py-3 rounded-lg font-semibold transition-all duration-200 whitespace-nowrap ${
                  activeTab === tab.key
                    ? 'bg-yellow-500 text-black shadow-lg shadow-yellow-500/25'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
                onClick={() => setActiveTab(tab.key as TabType)}
              >
                <span className="text-lg">{tab.emoji}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        {activeTab === 'dashboard' && <PresidentialDashboard countries={countries} />}
        {activeTab === 'economic' && <EconomicWarfare countries={countries} />}
        {activeTab === 'military' && <MilitaryStrategy countries={countries} />}
        {activeTab === 'diplomacy' && <DiplomaticRelations countries={countries} />}
        {activeTab === 'internal' && <InternalAffairs countries={countries} />}
        {activeTab === 'crisis' && <CrisisManagement />}
        {activeTab === 'intelligence' && <EnhancedIntelligence countries={countries} />}
      </main>

      {/* Presidential Footer */}
      <footer className="bg-black/80 border-t border-gray-700 py-4 mt-12">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400 text-sm">🔒 Classified - For Presidential Eyes Only</p>
          <p className="text-gray-500 text-xs mt-1">
            Secure Terminal Active | Last Updated: <span suppressHydrationWarning>{new Date().toLocaleTimeString()}</span>
          </p>
        </div>
      </footer>
    </div>
  );
}