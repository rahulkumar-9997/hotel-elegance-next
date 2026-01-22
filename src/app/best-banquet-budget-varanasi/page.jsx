import React from 'react';
import OnexBanquet from './OnexBanquet'; 
import SapphireBanquet from './SapphireBanquet'; 
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
async function getOnexBanquetData() {
    try {
        const res = await fetch(
            'https://www.inforbit.in/demo/hotel-elegance-backend/api/banquets/onex-banquet',{ next: { revalidate: 10 } }
        ); 
        if (!res.ok) {
            throw new Error(`Failed to fetch Onex Banquet data: ${res.status}`);
        }        
        return await res.json();
    } catch (error) {
        console.error('Error fetching Onex Banquet:', error);
        return null;
    }
}

async function getSapphireBanquetData() {
    try {
        const res = await fetch(
            'https://www.inforbit.in/demo/hotel-elegance-backend/api/banquets/sapphire-banquet',{ next: { revalidate: 10 } }
        );
        
        if (!res.ok) {
            throw new Error(`Failed to fetch Sapphire Banquet data: ${res.status}`);
        }
        
        return await res.json();
    } catch (error) {
        console.error('Error fetching Sapphire Banquet:', error);
        return null;
    }
}
export async function generateMetadata() {
    try {
        const onexData = await getOnexBanquetData();
        
        if (!onexData?.status) {
            return {
                title: 'Best Budget Banquet in Varanasi for Weddings & Events',
                description: 'Planning an event in Varanasi? Book a spacious, elegant banquet at budget-friendly prices. Ideal for weddings, parties, and celebrations.',
            };
        }
    } catch (error) {
        return {
            title: 'Banquets - Hotel Elegance',
            description: 'Premium banquet halls for your special celebrations',
        };
    }
}

export default async function BanquetsPage() {
    const [onexData, sapphireData] = await Promise.all([
        getOnexBanquetData(),
        getSapphireBanquetData(),
    ]);  
    return (
        <>
            <Breadcrumb 
                title="Banquets" 
                backgroundImage="/assets/dev-img/bread-banner/Banquet.jpg"
                mobileBackgroundImage="/assets/dev-img/bread-banner/mobile/Banquets.jpg"
                subtitle=""
            />
            
            {/* Pass fetched data as props */}
            <OnexBanquet onexData={onexData} />
            <SapphireBanquet sapphireData={sapphireData} />
        </>
    );
}