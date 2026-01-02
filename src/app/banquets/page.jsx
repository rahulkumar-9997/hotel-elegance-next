import React from 'react';
import OnexBanquet from './OnexBanquet'; 
import SapphireBanquet from './SapphireBanquet'; 
async function getOnexBanquetData() {
    try {
        const res = await fetch(
            'https://www.inforbit.in/demo/hotel-elegance-backend/api/banquets/onex-banquet'
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
            'https://www.inforbit.in/demo/hotel-elegance-backend/api/banquets/sapphire-banquet', 
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
                title: 'Banquets - Hotel Elegance',
                description: 'Explore our premium banquet halls for your special events',
            };
        }
        
        return {
            title: `${onexData.data.title} - Hotel Elegance Banquets`,
            description: 'Best banquet halls in Varanasi for weddings, parties, and corporate events',
        };
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
            <section className="section-breadcrumb padding-b-50">
                <div className="rx-breadcrumb-image">
                    <div className="rx-breadcrumb-overlay" />
                    <div className="inner-breadcrumb-contact sub_header_content">
                        <div className="main-breadcrumb-contact">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="rx-banner-contact">
                                            <h1>Banquets</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Pass fetched data as props */}
            <OnexBanquet onexData={onexData} />
            <SapphireBanquet sapphireData={sapphireData} />
        </>
    );
}