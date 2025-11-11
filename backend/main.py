from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import google.generativeai as genai
import os
from supabase import create_client
import random
from typing import Dict, List
import json
from dotenv import load_dotenv
import asyncio
from datetime import datetime, timedelta

# Load environment variables
load_dotenv()

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Next.js frontend
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configuration with error handling
try:
    genai.configure(api_key=os.getenv('GEMINI_API_KEY'))
    supabase = create_client(
        os.getenv('SUPABASE_URL'),
        os.getenv('SUPABASE_KEY')
    )
    print("✅ Supabase and Gemini configured successfully")
except Exception as e:
    print(f"❌ Initialization error: {e}")
    supabase = None

# Data Models
class CountryAction(BaseModel):
    action_type: str
    target_country: str = None
    details: Dict = {}

class IntelligenceRequest(BaseModel):
    target_country: str
    intelligence_type: str = "comprehensive"

class SanctionRequest(BaseModel):
    target_country: str
    sanction_type: str
    strength: int

class EspionageRequest(BaseModel):
    target_country: str

class MilitaryAction(BaseModel):
    target_country: str
    action_type: str  # "nuclear_threat", "covert_ops", "military_exercises", "cyber_attack"
    intensity: int
    details: Dict = {}

class DiplomacyRequest(BaseModel):
    target_country: str
    diplomacy_type: str  # "alliance", "treaty", "negotiation", "summit"
    terms: Dict = {}

class InternalAffairsAction(BaseModel):
    action_type: str  # "develop_tech", "extract_resources", "build_infrastructure", "research_weapons"
    focus_area: str
    investment: float
    details: Dict = {}

class CrisisResolution(BaseModel):
    crisis_id: int
    resolution: str
    resources_committed: Dict = {}

class IntelligenceOperation(BaseModel):
    target_country: str
    operation_type: str  # "surveillance", "sabotage", "propaganda", "recruitment"
    resources: Dict = {}

class ResourceManagement(BaseModel):
    action_type: str  # "develop_tech", "extract_resources", "build_infrastructure"
    focus_area: str
    investment: float

# Game Engine Class
class GameEngine:
    def __init__(self):
        self.countries = []
        self.crisis_events = []
        self.load_countries()
        self.generate_initial_crisis_events()
    
    def load_countries(self):
        if not supabase:
            self.countries = self.create_default_countries()
            return
            
        try:
            response = supabase.table('countries').select('*').execute()
            if response.data:
                self.countries = response.data
            else:
                self.countries = self.create_default_countries()
                self.save_countries_to_db()
        except Exception as e:
            print(f"Error loading countries: {e}")
            self.countries = self.create_default_countries()
    
    def create_default_countries(self):
        countries = [
            {
                'name': 'SZABAN',
                'gdp': 20000000000000,
                'gdp_growth_rate': 3.5,
                'military_strength': 100,
                'nuclear_arsenal': 1500,
                'technology_level': 95,
                'resources': {'oil': 200, 'uranium': 150, 'food': 300},
                'alliances': [],
                'public_opinion': 85,
                'stability': 90
            }
        ]
        
        # Create 14 rival countries
        country_names = [
            'ARCTURIA', 'VERIDIA', 'NOVARIA', 'KYTHORA', 'ZEPHYRIA',
            'SOLARIA', 'LUNARIA', 'TERRA_NOVA', 'AQUILON', 'BOREALIA',
            'MERIDIA', 'ORIENTIS', 'OCCIDENTA', 'CENTRUM'
        ]
        
        for i, name in enumerate(country_names):
            countries.append({
                'name': name,
                'gdp': 5000000000000 + (i * 1000000000000),
                'gdp_growth_rate': 2.0 + (i * 0.1),
                'military_strength': 30 + (i * 5),
                'nuclear_arsenal': max(0, (i - 5) * 50),  # Some have nukes
                'technology_level': 60 + i,
                'resources': {
                    'oil': 150 - (i * 5),
                    'uranium': 80 - (i * 3),
                    'food': 250 - (i * 8)
                },
                'alliances': [],
                'public_opinion': 70 + random.randint(-10, 10),
                'stability': 75 + random.randint(-15, 15)
            })
        
        return countries
    
    def save_countries_to_db(self):
        if not supabase:
            return
            
        try:
            # Clear existing countries
            supabase.table('countries').delete().neq('name', 'SZABAN').execute()
            
            # Insert new countries
            for country in self.countries:
                supabase.table('countries').insert(country).execute()
        except Exception as e:
            print(f"Error saving countries to DB: {e}")
    
    def update_economies(self):
        for country in self.countries:
            # Random economic fluctuations
            growth_change = random.uniform(-0.5, 0.5)
            new_growth = max(0.1, min(6.0, country['gdp_growth_rate'] + growth_change))
            new_gdp = country['gdp'] * (1 + new_growth/100)
            
            if supabase:
                supabase.table('countries').update({
                    'gdp': new_gdp,
                    'gdp_growth_rate': new_growth
                }).eq('name', country['name']).execute()
            
            country['gdp'] = new_gdp
            country['gdp_growth_rate'] = new_growth
    
    def generate_intelligence_report(self, target_country: str, report_type: str):
        try:
            model = genai.GenerativeModel('gemini-2.5-flash')
            
            target = self.get_country(target_country)
            if not target:
                return "Target country not found."
            
            prompt = f"""
            Generate a detailed {report_type} intelligence report about {target_country}.
            
            Current Status:
            - GDP: ${target['gdp']:,.2f}
            - Military Strength: {target['military_strength']}
            - Nuclear Arsenal: {target['nuclear_arsenal']}
            - Technology Level: {target['technology_level']}
            
            Include:
            - Current activities and developments
            - Potential threats to SZABAN
            - Economic and military vulnerabilities
            - Recommended actions for SZABAN
            - Assessment of their intentions
            
            Make this a realistic, concise intelligence briefing for a national leader.
            """
            
            response = model.generate_content(prompt)
            
            # Store in database
            if supabase:
                supabase.table('intelligence_reports').insert({
                    'target_country': target_country,
                    'report_type': report_type,
                    'content': response.text,
                    'confidence_level': random.randint(70, 95),
                    'created_at': datetime.now().isoformat()
                }).execute()
            
            return response.text
        except Exception as e:
            return f"Intelligence generation failed: {str(e)}"
    
    def get_country(self, name: str):
        return next((c for c in self.countries if c['name'] == name), None)
    
    def generate_initial_crisis_events(self):
        self.crisis_events = [
            {
                'id': 1,
                'title': 'Border Dispute',
                'description': 'Tensions rising at the border with ARCTURIA',
                'severity': 'medium',
                'affected_countries': ['SZABAN', 'ARCTURIA'],
                'resolution_options': ['diplomatic_talks', 'military_show_of_force', 'economic_pressure'],
                'active': True
            },
            {
                'id': 2,
                'title': 'Economic Crisis',
                'description': 'Global markets unstable, affecting trade',
                'severity': 'high',
                'affected_countries': ['ALL'],
                'resolution_options': ['stimulus_package', 'trade_agreements', 'austerity_measures'],
                'active': True
            }
        ]
    
    def generate_random_crisis(self):
        crisis_templates = [
            {
                'title': 'Terrorist Threat',
                'description': 'Intelligence indicates potential terrorist activity',
                'severity': random.choice(['low', 'medium', 'high']),
                'affected_countries': ['SZABAN'],
                'resolution_options': ['counter_terrorism_ops', 'intelligence_sweep', 'diplomatic_pressure']
            },
            {
                'title': 'Natural Disaster',
                'description': 'Major earthquake affecting key industrial regions',
                'severity': 'high',
                'affected_countries': ['SZABAN'],
                'resolution_options': ['disaster_relief', 'international_aid', 'mobilize_military']
            },
            {
                'title': 'Cyber Attack',
                'description': 'Critical infrastructure under cyber attack',
                'severity': 'medium',
                'affected_countries': ['SZABAN'],
                'resolution_options': ['cyber_defense', 'retaliatory_hacks', 'diplomatic_protests']
            }
        ]
        
        if random.random() < 0.3:  # 30% chance each check
            new_crisis = random.choice(crisis_templates).copy()
            new_crisis['id'] = len(self.crisis_events) + 1
            new_crisis['active'] = True
            self.crisis_events.append(new_crisis)
            return new_crisis
        return None

# Initialize game engine
game_engine = GameEngine()

# API Routes
@app.get("/")
async def root():
    return {"message": "SZABAN Presidential API Running", "status": "operational"}

@app.get("/game-state")
async def get_game_state():
    return {"countries": game_engine.countries}

@app.get("/crisis-events")
async def get_crisis_events():
    active_crises = [c for c in game_engine.crisis_events if c['active']]
    return {"crisis_events": active_crises}

@app.post("/president/action")
async def presidential_action(action: CountryAction):
    try:
        result = ""
        
        if action.action_type == "trade_sanctions":
            result = implement_sanctions(action.target_country, action.details)
        elif action.action_type == "military_exercises":
            result = execute_military_action(action.target_country, action.details)
        elif action.action_type == "diplomacy":
            result = conduct_diplomacy(action.target_country, action.details)
        elif action.action_type == "intelligence_gathering":
            result = game_engine.generate_intelligence_report(action.target_country, "comprehensive")
        else:
            result = f"Action {action.action_type} executed on {action.target_country}"
        
        # Log decision
        if supabase:
            supabase.table('presidential_decisions').insert({
                'decision_type': action.action_type,
                'details': action.details,
                'outcome': result,
                'timestamp': datetime.now().isoformat()
            }).execute()
        
        return {"status": "success", "result": result}
    except Exception as e:
        return {"status": "error", "result": str(e)}

@app.get("/intelligence/{target_country}")
async def get_intelligence(target_country: str):
    report = game_engine.generate_intelligence_report(target_country, "comprehensive")
    return {"intelligence_report": report}

# Economic Warfare Routes
@app.post("/economic/sanctions")
async def impose_sanctions(request: SanctionRequest):
    target = game_engine.get_country(request.target_country)
    if not target:
        return {"error": "Country not found"}
    
    # Calculate economic impact
    impact_multiplier = request.strength / 100
    
    if request.sanction_type == "trade":
        gdp_reduction = target['gdp'] * (impact_multiplier * 0.1)
    elif request.sanction_type == "financial":
        gdp_reduction = target['gdp'] * (impact_multiplier * 0.15)
    elif request.sanction_type == "technology":
        gdp_reduction = target['gdp'] * (impact_multiplier * 0.08)
    else:  # energy
        gdp_reduction = target['gdp'] * (impact_multiplier * 0.12)
    
    new_gdp = target['gdp'] - gdp_reduction
    
    # Update target country
    target['gdp'] = new_gdp
    target['gdp_growth_rate'] = max(0.1, target['gdp_growth_rate'] - (impact_multiplier * 2))
    
    # Boost SZABAN
    szaban = game_engine.get_country("SZABAN")
    szaban_boost = gdp_reduction * 0.1
    szaban['gdp'] += szaban_boost
    
    # Save to database
    if supabase:
        supabase.table('countries').update({
            'gdp': new_gdp,
            'gdp_growth_rate': target['gdp_growth_rate']
        }).eq('name', request.target_country).execute()
        
        supabase.table('countries').update({
            'gdp': szaban['gdp']
        }).eq('name', "SZABAN").execute()
    
    return {
        "status": "success",
        "message": f"Sanctions imposed on {request.target_country}",
        "economic_impact": f"Target GDP reduced by ${gdp_reduction:,.2f}",
        "szaban_boost": f"SZABAN GDP increased by ${szaban_boost:,.2f}"
    }

@app.post("/economic/espionage")
async def conduct_economic_espionage(request: EspionageRequest):
    report = game_engine.generate_intelligence_report(request.target_country, "economic_espionage")
    return {
        "report": report,
        "target": request.target_country,
        "timestamp": datetime.now().isoformat()
    }

# Military Operations Routes
@app.post("/military/action")
async def military_operation(action: MilitaryAction):
    target = game_engine.get_country(action.target_country)
    szaban = game_engine.get_country("SZABAN")
    
    if not target:
        return {"error": "Target country not found"}
    
    result = ""
    consequences = {}
    
    if action.action_type == "nuclear_threat":
        # Increase SZABAN's deterrence but risk escalation
        szaban['military_strength'] += 8
        szaban['nuclear_arsenal'] -= action.intensity // 10  # Small cost for readiness
        target['stability'] = max(10, target['stability'] - (action.intensity * 3))
        target['public_opinion'] = max(20, target['public_opinion'] - (action.intensity * 2))
        
        # Chance of diplomatic backlash
        if random.random() < 0.3:
            for country in game_engine.countries:
                if country['name'] != 'SZABAN' and country['name'] != action.target_country:
                    country['public_opinion'] = max(10, country['public_opinion'] - 5)
        
        result = f"🚀 Nuclear deterrence demonstrated against {action.target_country}. Global tensions increased."
        consequences = {
            "szaban_military_boost": 8,
            "target_stability_reduction": action.intensity * 3,
            "nuclear_arsenal_cost": action.intensity // 10
        }

    elif action.action_type == "covert_ops":
        success_chance = min(85, 50 + (action.intensity * 8) + szaban['technology_level'] // 2)
        if random.randint(1, 100) <= success_chance:
            # Successful covert operations
            damage = action.intensity * 4
            target['military_strength'] = max(10, target['military_strength'] - damage)
            target['technology_level'] = max(20, target['technology_level'] - (action.intensity * 1))
            target['resources']['oil'] = max(0, target['resources']['oil'] - (action.intensity * 2))
            
            # Gain intelligence or technology
            intel_gain = random.randint(1, action.intensity)
            result = f"🕵️ Successful covert operations against {action.target_country}. Inflicted {damage} military damage and gained valuable intelligence."
            consequences = {
                "target_military_damage": damage,
                "intelligence_gained": intel_gain,
                "operation_success": True
            }
        else:
            # Failed operation - diplomatic incident
            szaban['public_opinion'] = max(30, szaban['public_opinion'] - 10)
            result = f"❌ Covert operations failed against {action.target_country}. Operation discovered, diplomatic incident created."
            consequences = {"operation_success": False, "diplomatic_penalty": 10}

    elif action.action_type == "military_exercises":
        # Boost SZABAN's military readiness
        military_boost = action.intensity * 2
        szaban['military_strength'] += military_boost
        szaban['public_opinion'] = min(100, szaban['public_opinion'] + 3)
        
        # Show of force affects neighbors
        for country in game_engine.countries:
            if country['name'] != 'SZABAN':
                distance_penalty = random.randint(0, 10)
                country['stability'] = max(10, country['stability'] - distance_penalty)
        
        result = f"💪 Military exercises completed. Readiness increased by {military_boost}. Regional stability affected."
        consequences = {"military_boost": military_boost, "public_opinion_boost": 3}

    elif action.action_type == "cyber_attack":
        tech_advantage = szaban['technology_level'] - target['technology_level']
        success_chance = min(80, 40 + (action.intensity * 6) + max(0, tech_advantage))
        
        if random.randint(1, 100) <= success_chance:
            # Successful cyber attack
            economic_damage = target['gdp'] * (action.intensity / 1000)
            target['gdp'] -= economic_damage
            target['technology_level'] = max(30, target['technology_level'] - (action.intensity // 10))
            
            # SZABAN might gain technology
            if random.random() < 0.4:
                tech_gain = action.intensity // 5
                szaban['technology_level'] = min(100, szaban['technology_level'] + tech_gain)
                result = f"💻 Successful cyber attack on {action.target_country}. Caused ${economic_damage:,.0f} economic damage and gained {tech_gain} technology points."
                consequences = {"economic_damage": economic_damage, "technology_gained": tech_gain}
            else:
                result = f"💻 Successful cyber attack on {action.target_country}. Caused ${economic_damage:,.0f} economic damage."
                consequences = {"economic_damage": economic_damage}
        else:
            result = f"❌ Cyber attack failed against {action.target_country}. Their cyber defenses held."
            consequences = {"operation_success": False}

    # Update database
    if supabase:
        supabase.table('countries').update({
            'military_strength': szaban['military_strength'],
            'nuclear_arsenal': szaban['nuclear_arsenal'],
            'public_opinion': szaban['public_opinion'],
            'technology_level': szaban['technology_level']
        }).eq('name', 'SZABAN').execute()
        
        if action.action_type != "military_exercises":
            supabase.table('countries').update({
                'military_strength': target['military_strength'],
                'technology_level': target['technology_level'],
                'stability': target['stability'],
                'public_opinion': target['public_opinion'],
                'gdp': target['gdp'],
                'resources': target['resources']
            }).eq('name', action.target_country).execute()

    # Log military action
    if supabase:
        supabase.table('military_operations').insert({
            'operation_type': action.action_type,
            'target_country': action.target_country,
            'intensity': action.intensity,
            'result': result,
            'consequences': consequences,
            'timestamp': datetime.now().isoformat()
        }).execute()

    return {"status": "success", "result": result, "consequences": consequences}

# Diplomacy Routes
@app.post("/diplomacy/action")
async def diplomacy_action(request: DiplomacyRequest):
    target = game_engine.get_country(request.target_country)
    szaban = game_engine.get_country("SZABAN")
    
    if not target:
        return {"error": "Target country not found"}
    
    result = ""
    diplomatic_effects = {}

    if request.diplomacy_type == "alliance":
        if target['name'] not in szaban['alliances']:
            # Check if alliance is possible
            relation_score = target['public_opinion'] - 50 + random.randint(-10, 20)
            if relation_score >= 20:
                szaban['alliances'].append(target['name'])
                target['alliances'].append('SZABAN')
                szaban['military_strength'] += 15  # Alliance bonus
                target['military_strength'] += 10
                result = f"🤝 Alliance formed with {request.target_country}! Military strength boosted for both nations."
                diplomatic_effects = {"military_boost_szaban": 15, "military_boost_target": 10}
            else:
                result = f"❌ {request.target_country} rejected alliance proposal. Relations not strong enough."
                diplomatic_effects = {"alliance_rejected": True}
        else:
            result = f"ℹ️ Already allied with {request.target_country}"

    elif request.diplomacy_type == "treaty":
        treaty_type = request.terms.get('treaty_type', 'trade')
        
        if treaty_type == 'trade':
            trade_boost = random.uniform(0.5, 3.0)
            szaban['gdp_growth_rate'] += trade_boost
            target['gdp_growth_rate'] += trade_boost
            result = f"📊 Trade treaty signed with {request.target_country}. GDP growth +{trade_boost:.1f}% for both nations."
            diplomatic_effects = {"gdp_growth_boost": trade_boost}
            
        elif treaty_type == 'non_aggression':
            szaban['stability'] = min(100, szaban['stability'] + 10)
            target['stability'] = min(100, target['stability'] + 10)
            result = f"🕊️ Non-aggression pact signed with {request.target_country}. Stability increased."
            diplomatic_effects = {"stability_boost": 10}
            
        elif treaty_type == 'research':
            tech_boost = random.uniform(1.0, 4.0)
            szaban['technology_level'] = min(100, szaban['technology_level'] + tech_boost)
            target['technology_level'] = min(100, target['technology_level'] + tech_boost)
            result = f"🔬 Research partnership established with {request.target_country}. Technology levels improved."
            diplomatic_effects = {"technology_boost": tech_boost}

    elif request.diplomacy_type == "negotiation":
        # Use AI for realistic negotiation outcomes
        try:
            model = genai.GenerativeModel('gemini-pro')
            prompt = f"""
            Simulate a diplomatic negotiation between SZABAN (your country) and {request.target_country}.
            
            SZABAN's Position: {request.terms.get('szaban_position', 'Seeking favorable terms')}
            {request.target_country}'s Interests: {request.terms.get('target_interests', 'Protecting their sovereignty')}
            Negotiation Tone: {request.terms.get('tone', 'professional')}
            
            Provide a realistic negotiation outcome including:
            - Key agreements reached
            - Concessions made by both sides  
            - Impact on bilateral relations
            - Public and international reaction
            - Specific benefits for SZABAN
            
            Keep it concise and realistic as a diplomatic briefing.
            """
            response = model.generate_content(prompt)
            
            # Apply some game effects based on negotiation success
            success_level = random.randint(1, 10)
            if success_level >= 7:
                szaban['public_opinion'] += 3
                target['public_opinion'] += 5
                diplomatic_effects = {"relations_improved": True, "success_level": success_level}
            else:
                diplomatic_effects = {"success_level": success_level}
                
            result = f"💬 Diplomatic Negotiation with {request.target_country}:\n{response.text}"
            
        except Exception as e:
            result = f"Diplomatic negotiation conducted with {request.target_country}. Outcome: Moderate success."
            diplomatic_effects = {"success_level": 6}

    elif request.diplomacy_type == "summit":
        # International summit - affects multiple countries
        participants = random.sample([c for c in game_engine.countries if c['name'] != 'SZABAN'], 
                                   min(5, len(game_engine.countries) - 1))
        
        for participant in participants:
            opinion_boost = random.randint(1, 8)
            participant['public_opinion'] = min(100, participant['public_opinion'] + opinion_boost)
        
        szaban['public_opinion'] += 10
        result = f"🌍 International summit hosted. Improved relations with {len(participants)} countries. Global prestige increased."
        diplomatic_effects = {"participants": len(participants), "prestige_boost": 10}

    # Update database
    if supabase:
        supabase.table('countries').update({
            'alliances': szaban['alliances'],
            'gdp_growth_rate': szaban['gdp_growth_rate'],
            'technology_level': szaban['technology_level'],
            'military_strength': szaban['military_strength'],
            'stability': szaban['stability'],
            'public_opinion': szaban['public_opinion']
        }).eq('name', 'SZABAN').execute()
        
        supabase.table('countries').update({
            'alliances': target['alliances'],
            'gdp_growth_rate': target['gdp_growth_rate'],
            'technology_level': target['technology_level'],
            'military_strength': target['military_strength'],
            'stability': target['stability'],
            'public_opinion': target['public_opinion']
        }).eq('name', request.target_country).execute()

    # Log diplomacy action
    if supabase:
        supabase.table('diplomatic_actions').insert({
            'action_type': request.diplomacy_type,
            'target_country': request.target_country,
            'terms': request.terms,
            'result': result,
            'effects': diplomatic_effects,
            'timestamp': datetime.now().isoformat()
        }).execute()

    return {"status": "success", "result": result, "effects": diplomatic_effects}

# Resource Management Routes
@app.post("/resources/manage")
async def manage_resources(action: ResourceManagement):
    szaban = game_engine.get_country("SZABAN")
    
    if action.action_type == "develop_tech":
        tech_boost = action.investment / 1000000000  # Scale investment
        szaban['technology_level'] = min(100, szaban['technology_level'] + tech_boost)
        szaban['gdp'] -= action.investment
        result = f"Technology development initiated in {action.focus_area}"
    
    elif action.action_type == "extract_resources":
        resource_gain = action.investment / 500000000  # Scale investment
        if action.focus_area in szaban['resources']:
            szaban['resources'][action.focus_area] += resource_gain
        szaban['gdp'] -= action.investment
        result = f"Resource extraction expanded for {action.focus_area}"
    
    elif action.action_type == "build_infrastructure":
        gdp_boost = action.investment * 1.2  # Infrastructure ROI
        szaban['gdp'] += gdp_boost - action.investment
        result = f"Infrastructure built in {action.focus_area}, economic capacity increased"
    
    # Update database
    if supabase:
        supabase.table('countries').update({
            'technology_level': szaban['technology_level'],
            'gdp': szaban['gdp'],
            'resources': szaban['resources']
        }).eq('name', 'SZABAN').execute()
    
    return {"status": "success", "result": result}

@app.post("/internal/action")
async def internal_affairs_action(action: InternalAffairsAction):
    szaban = game_engine.get_country("SZABAN")
    
    result = ""
    development_effects = {}

    if action.action_type == "develop_tech":
        tech_boost = (action.investment / 1000000000) * (1 + szaban['technology_level'] / 100)
        szaban['technology_level'] = min(100, szaban['technology_level'] + tech_boost)
        szaban['gdp'] -= action.investment
        
        # Chance of breakthrough
        if random.random() < 0.2:
            breakthrough_boost = tech_boost * 2
            szaban['technology_level'] = min(100, szaban['technology_level'] + breakthrough_boost)
            result = f"🚀 TECHNOLOGICAL BREAKTHROUGH in {action.focus_area}! Gained {tech_boost + breakthrough_boost:.1f} technology levels."
            development_effects = {"breakthrough": True, "total_tech_gain": tech_boost + breakthrough_boost}
        else:
            result = f"🔬 Technology development in {action.focus_area}. Gained {tech_boost:.1f} technology levels."
            development_effects = {"tech_gain": tech_boost}

    elif action.action_type == "extract_resources":
        resource_gain = (action.investment / 500000000) * (1 + random.uniform(0.1, 0.5))
        if action.focus_area in szaban['resources']:
            szaban['resources'][action.focus_area] += resource_gain
        
        # Economic boost from resource sales
        economic_return = action.investment * random.uniform(0.1, 0.3)
        szaban['gdp'] += economic_return
        
        result = f"⛏️ Resource extraction expanded for {action.focus_area}. Gained {resource_gain:.1f} units. Economic return: ${economic_return:,.0f}"
        development_effects = {"resource_gain": resource_gain, "economic_return": economic_return}

    elif action.action_type == "build_infrastructure":
        gdp_boost = action.investment * random.uniform(1.1, 1.5)  # Infrastructure ROI
        szaban['gdp'] += gdp_boost - action.investment
        szaban['public_opinion'] = min(100, szaban['public_opinion'] + 5)
        
        result = f"🏗️ Infrastructure built in {action.focus_area}. Economic capacity increased. Public approval +5."
        development_effects = {"net_gdp_gain": gdp_boost - action.investment, "public_opinion_boost": 5}

    elif action.action_type == "research_weapons":
        military_tech_boost = (action.investment / 2000000000) * 2
        szaban['military_strength'] += military_tech_boost
        szaban['technology_level'] = min(100, szaban['technology_level'] + (military_tech_boost / 2))
        szaban['gdp'] -= action.investment
        
        # Chance of new weapon system
        if random.random() < 0.15:
            new_weapon_boost = military_tech_boost * 3
            szaban['military_strength'] += new_weapon_boost
            result = f"💥 NEW WEAPON SYSTEM DEVELOPED in {action.focus_area}! Military strength +{military_tech_boost + new_weapon_boost:.1f}"
            development_effects = {"weapon_breakthrough": True, "total_military_boost": military_tech_boost + new_weapon_boost}
        else:
            result = f"🔫 Weapons research in {action.focus_area}. Military strength +{military_tech_boost:.1f}"
            development_effects = {"military_boost": military_tech_boost}

    # Update database
    if supabase:
        supabase.table('countries').update({
            'technology_level': szaban['technology_level'],
            'gdp': szaban['gdp'],
            'resources': szaban['resources'],
            'military_strength': szaban['military_strength'],
            'public_opinion': szaban['public_opinion']
        }).eq('name', 'SZABAN').execute()

    # Log internal development
    if supabase:
        supabase.table('internal_developments').insert({
            'action_type': action.action_type,
            'focus_area': action.focus_area,
            'investment': action.investment,
            'result': result,
            'effects': development_effects,
            'timestamp': datetime.now().isoformat()
        }).execute()

    return {"status": "success", "result": result, "effects": development_effects}

# Crisis Management Routes
@app.post("/crisis/resolve")
async def resolve_crisis(resolution: CrisisResolution):
    crisis = next((c for c in game_engine.crisis_events if c['id'] == resolution.crisis_id and c['active']), None)
    
    if not crisis:
        return {"error": "Crisis not found or already resolved"}
    
    szaban = game_engine.get_country("SZABAN")
    result = ""
    resolution_effects = {}

    # Resolve crisis based on chosen resolution
    crisis['active'] = False
    crisis['resolved_with'] = resolution.resolution
    crisis['resolved_at'] = datetime.now().isoformat()

    if resolution.resolution in ['diplomatic_talks', 'disaster_relief', 'stimulus_package', 'international_aid']:
        # Peaceful resolutions
        if crisis['severity'] == 'low':
            outcome_boost = 10
        elif crisis['severity'] == 'medium':
            outcome_boost = 5
        else:  # high
            outcome_boost = 2
            
        szaban['public_opinion'] = min(100, szaban['public_opinion'] + outcome_boost)
        szaban['stability'] = min(100, szaban['stability'] + outcome_boost)
        
        result = f"🕊️ Crisis resolved peacefully using {resolution.resolution}. Public opinion +{outcome_boost}, Stability +{outcome_boost}."
        resolution_effects = {
            "public_opinion_boost": outcome_boost,
            "stability_boost": outcome_boost,
            "resolution_type": "peaceful"
        }

    elif resolution.resolution in ['military_show_of_force', 'counter_terrorism_ops', 'retaliatory_hacks']:
        # Aggressive resolutions
        if crisis['severity'] == 'low':
            stability_cost = 5
            military_gain = 8
        elif crisis['severity'] == 'medium':
            stability_cost = 10
            military_gain = 12
        else:  # high
            stability_cost = 15
            military_gain = 20
            
        szaban['stability'] = max(0, szaban['stability'] - stability_cost)
        szaban['military_strength'] += military_gain
        
        result = f"💪 Crisis resolved with decisive action ({resolution.resolution}). Military strength +{military_gain}, Stability -{stability_cost}."
        resolution_effects = {
            "stability_cost": stability_cost,
            "military_boost": military_gain,
            "resolution_type": "decisive"
        }

    elif resolution.resolution in ['economic_pressure', 'cyber_defense', 'intelligence_sweep']:
        # Strategic resolutions
        tech_gain = random.randint(3, 8)
        szaban['technology_level'] = min(100, szaban['technology_level'] + tech_gain)
        
        result = f"🎯 Crisis resolved strategically ({resolution.resolution}). Technology level +{tech_gain}."
        resolution_effects = {
            "technology_gain": tech_gain,
            "resolution_type": "strategic"
        }

    # Update database
    if supabase:
        supabase.table('countries').update({
            'public_opinion': szaban['public_opinion'],
            'stability': szaban['stability'],
            'military_strength': szaban['military_strength'],
            'technology_level': szaban['technology_level']
        }).eq('name', 'SZABAN').execute()

    # Log crisis resolution
    if supabase:
        supabase.table('crisis_resolutions').insert({
            'crisis_id': resolution.crisis_id,
            'resolution': resolution.resolution,
            'result': result,
            'effects': resolution_effects,
            'timestamp': datetime.now().isoformat()
        }).execute()

    return {"status": "success", "result": result, "effects": resolution_effects, "crisis": crisis}

@app.post("/intelligence/operation")
async def intelligence_operation(operation: IntelligenceOperation):
    target = game_engine.get_country(operation.target_country)
    szaban = game_engine.get_country("SZABAN")
    
    if not target:
        return {"error": "Target country not found"}
    
    result = ""
    intel_effects = {}

    if operation.operation_type == "surveillance":
        success_chance = min(90, 60 + (szaban['technology_level'] - target['technology_level']))
        if random.randint(1, 100) <= success_chance:
            # Successful surveillance
            intel_quality = random.randint(1, 10)
            if intel_quality >= 8:
                # High-value intelligence
                target_vulnerability = random.choice(['military', 'economic', 'political'])
                result = f"📡 HIGH-VALUE SURVEILLANCE: Discovered {target_vulnerability} vulnerability in {operation.target_country}"
                intel_effects = {"intel_quality": "high", "vulnerability_type": target_vulnerability}
            else:
                result = f"📡 Surveillance operation successful against {operation.target_country}. Gathered routine intelligence."
                intel_effects = {"intel_quality": "medium"}
        else:
            result = f"❌ Surveillance operation detected by {operation.target_country}. Diplomatic protest filed."
            intel_effects = {"operation_compromised": True}

    elif operation.operation_type == "sabotage":
        success_chance = min(70, 40 + (szaban['technology_level'] // 2))
        if random.randint(1, 100) <= success_chance:
            damage = random.randint(10, 30)
            target['military_strength'] = max(10, target['military_strength'] - damage)
            result = f"💣 Successful sabotage against {operation.target_country}. Military strength reduced by {damage}."
            intel_effects = {"sabotage_damage": damage}
        else:
            szaban['public_opinion'] = max(20, szaban['public_opinion'] - 8)
            result = f"❌ Sabotage operation failed against {operation.target_country}. Public outrage over exposed operation."
            intel_effects = {"operation_failed": True, "public_opinion_penalty": 8}

    elif operation.operation_type == "propaganda":
        influence_effect = random.randint(5, 15)
        target['public_opinion'] = max(10, target['public_opinion'] - influence_effect)
        szaban['public_opinion'] = min(100, szaban['public_opinion'] + 3)
        
        result = f"📢 Propaganda campaign successful against {operation.target_country}. Their public opinion -{influence_effect}, ours +3."
        intel_effects = {"target_opinion_reduction": influence_effect, "szaban_opinion_boost": 3}

    elif operation.operation_type == "recruitment":
        success_chance = min(60, 30 + szaban['technology_level'] // 3)
        if random.randint(1, 100) <= success_chance:
            asset_level = random.choice(['low', 'medium', 'high'])
            result = f"🕵️ ASSET RECRUITED: Successfully recruited a {asset_level}-level asset within {operation.target_country}."
            intel_effects = {"asset_recruited": True, "asset_level": asset_level}
        else:
            result = f"❌ Recruitment operation failed in {operation.target_country}. No assets secured."
            intel_effects = {"recruitment_failed": True}

    # Update database for affected countries
    if supabase:
        if operation.operation_type in ["sabotage", "propaganda"]:
            supabase.table('countries').update({
                'military_strength': target['military_strength'],
                'public_opinion': target['public_opinion']
            }).eq('name', operation.target_country).execute()
        
        supabase.table('countries').update({
            'public_opinion': szaban['public_opinion']
        }).eq('name', 'SZABAN').execute()

    # Log intelligence operation
    if supabase:
        supabase.table('intelligence_operations').insert({
            'operation_type': operation.operation_type,
            'target_country': operation.target_country,
            'result': result,
            'effects': intel_effects,
            'timestamp': datetime.now().isoformat()
        }).execute()

    return {"status": "success", "result": result, "effects": intel_effects}

# Get active crises
@app.get("/crisis/active")
async def get_active_crises():
    active_crises = [c for c in game_engine.crisis_events if c['active']]
    return {"crisis_events": active_crises}

# Generate new crisis
@app.post("/crisis/generate")
async def generate_crisis():
    new_crisis = game_engine.generate_random_crisis()
    if new_crisis:
        return {"status": "success", "crisis": new_crisis}
    else:
        return {"status": "no_new_crisis"}

# Background task to update game state periodically
@app.on_event("startup")
async def startup_event():
    asyncio.create_task(periodic_updates())

async def periodic_updates():
    while True:
        await asyncio.sleep(60)  # Update every minute
        game_engine.update_economies()
        game_engine.generate_random_crisis()

# Helper functions
def implement_sanctions(target_country: str, details: Dict):
    return f"Economic sanctions implemented against {target_country}"

def execute_military_action(target_country: str, details: Dict):
    return f"Military action executed against {target_country}"

def conduct_diplomacy(target_country: str, details: Dict):
    return f"Diplomatic efforts initiated with {target_country}"

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)