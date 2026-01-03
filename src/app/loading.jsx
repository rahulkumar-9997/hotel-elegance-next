import React from 'react';
import './Loading.css';
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
const Loading = ({
    size = 'medium',
    color = '#3498db',
    text = 'Loading...',
    fullScreen = false
}) => {
    const sizeMap = {
        small: '40px',
        medium: '60px',
        large: '80px'
    };

    const spinnerStyle = {
        width: sizeMap[size],
        height: sizeMap[size],
        border: `4px solid rgba(0, 0, 0, 0.1)`,
        borderTop: `4px solid ${color}`,
        borderRadius: '50%',
        animation: 'spin 1s linear infinite'
    };

    const containerStyle = fullScreen ? {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        zIndex: 9999,
        flexDirection: 'column'
    } : {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '200px',
        width: '100%',
        flexDirection: 'column'
    };

    return (
        <>
            <section className="section-breadcrumb padding-b-50">
                <div
                    className="rx-breadcrumb-image">
                    <div className="rx-breadcrumb-overlay" />
                    <div className="inner-breadcrumb-contact sub_header_content">
                        <div className="main-breadcrumb-contact">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="rx-banner-contact">
                                            
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="loading-wrapper" style={containerStyle}>
                <div className="spinner" style={spinnerStyle}></div>
                <p className="loading-text" style={{ marginTop: '1rem', color, fontSize: '1rem' }}>
                    {text}
                </p>
            </div>
        </>
    );
};

export default Loading;