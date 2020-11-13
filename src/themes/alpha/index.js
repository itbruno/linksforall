// Libs and Vendors
import React from 'react';
import GoogleFontLoader from 'react-google-font-loader';

// Components
import Header from './components/header';

// Styles
import './styles/globals.scss';

// Main
function Home() {
    return (
        <>
        <GoogleFontLoader 
            fonts={[
                {
                    font: 'Montserrat',
                    weights: [500, 600]
                }
            ]}
        />
        
            <Header />
        </>
    )
}

export default Home;
