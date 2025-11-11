# economic_warfare.py
from fastapi import APIRouter
from pydantic import BaseModel
import google.generativeai as genai
from supabase import create_client
import os
import random
from datetime import datetime, timedelta

router = APIRouter()

class SanctionRequest(BaseModel):
    target_country: str
    sanction_type: str
    strength: int

class EspionageRequest(BaseModel):
    target_country: str

@router.post("/economic/sanctions")
async def impose_sanctions(request: SanctionRequest):
    # Apply economic sanctions to target country
    target = get_country(request.target_country)
    
    if not target:
        return {"error": "Country not found"}
    
    # Calculate economic impact based on sanction strength
    impact_multiplier = request.strength / 100
    
    # Different effects based on sanction type
    if request.sanction_type == "trade":
        gdp_reduction = target['gdp'] * (impact_multiplier * 0.1)  # Up to 10% GDP reduction
        new_gdp = target['gdp'] - gdp_reduction
    elif request.sanction_type == "financial":
        gdp_reduction = target['gdp'] * (impact_multiplier * 0.15)
        new_gdp = target['gdp'] - gdp_reduction
    elif request.sanction_type == "technology":
        gdp_reduction = target['gdp'] * (impact_multiplier * 0.08)
        new_gdp = target['gdp'] - gdp_reduction
    else:  # energy
        gdp_reduction = target['gdp'] * (impact_multiplier * 0.12)
        new_gdp = target['gdp'] - gdp_reduction
    
    # Update target country's GDP
    supabase.table('countries').update({
        'gdp': new_gdp,
        'gdp_growth_rate': target['gdp_growth_rate'] - (impact_multiplier * 2)
    }).eq('name', request.target_country).execute()
    
    # Boost SZABAN's economy slightly (economic dominance)
    szaban = get_country("SZABAN")
    szaban_boost = gdp_reduction * 0.1  # SZABAN gains 10% of target's loss
    supabase.table('countries').update({
        'gdp': szaban['gdp'] + szaban_boost
    }).eq('name', "SZABAN").execute()
    
    # Log the sanction
    supabase.table('presidential_decisions').insert({
        'decision_type': 'economic_sanctions',
        'details': {
            'target': request.target_country,
            'type': request.sanction_type,
            'strength': request.strength,
            'gdp_impact': gdp_reduction
        },
        'outcome': f"Sanctions imposed on {request.target_country}, GDP reduced by ${gdp_reduction:,.2f}"
    }).execute()
    
    return {
        "status": "success",
        "message": f"Sanctions imposed on {request.target_country}",
        "economic_impact": f"Target GDP reduced by ${gdp_reduction:,.2f}",
        "szaban_boost": f"SZABAN GDP increased by ${szaban_boost:,.2f}"
    }

@router.post("/economic/espionage")
async def conduct_economic_espionage(request: EspionageRequest):
    # Generate AI-powered economic intelligence report
    model = genai.GenerativeModel('gemini-pro')
    
    target = get_country(request.target_country)
    
    prompt = f"""
    Generate a detailed economic espionage report about {request.target_country}.
    Include:
    - Current economic vulnerabilities
    - Key industries and their weaknesses
    - Potential for economic sabotage
    - Recommended covert economic operations
    - Estimated impact of various economic warfare tactics
    
    Make this a realistic intelligence briefing for a national leader.
    Current GDP: ${target['gdp']:,.2f}
    Growth Rate: {target['gdp_growth_rate']}%
    """
    
    response = model.generate_content(prompt)
    
    # Store intelligence report
    supabase.table('intelligence_reports').insert({
        'target_country': request.target_country,
        'report_type': 'economic_espionage',
        'content': response.text,
        'confidence_level': random.randint(70, 95)
    }).execute()
    
    return {
        "report": response.text,
        "target": request.target_country,
        "timestamp": datetime.now().isoformat()
    }

def get_country(name: str):
    response = supabase.table('countries').select('*').eq('name', name).execute()
    return response.data[0] if response.data else None

# Add this to your main FastAPI app
# from economic_warfare import router as economic_router
# app.include_router(economic_router, prefix="/economic")