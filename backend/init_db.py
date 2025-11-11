# init_db.py - UPDATED VERSION
import os
from supabase import create_client
from dotenv import load_dotenv
import random

load_dotenv()

supabase = create_client(
    os.getenv('SUPABASE_URL'),
    os.getenv('SUPABASE_KEY')
)

# Clear existing countries first
try:
    supabase.table('countries').delete().neq('name', 'SZABAN').execute()
    print("Cleared existing countries")
except Exception as e:
    print(f"Error clearing countries: {e}")

# Create initial countries with ALL required fields
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

# Add 14 more countries with all required fields
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
        'nuclear_arsenal': max(0, (i - 5) * 50),
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

# Insert countries
for country in countries:
    try:
        supabase.table('countries').insert(country).execute()
        print(f"✅ Added {country['name']} with all fields")
    except Exception as e:
        print(f"❌ Error adding {country['name']}: {e}")

print("✅ Database initialization complete!")