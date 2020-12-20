// Libs and Vendors
import React from 'react';
import GoogleFontLoader from 'react-google-font-loader';

// Components
import Header from './components/header';
import ListingItems from './components/listingItems';

// Services
import Mock from '../services/api/mock';

// Styles
import './styles/globals.scss';

// Main
function Home() {
    
    return (
        <>
            {/* Load Google Font */}
            <GoogleFontLoader fonts={[{ font: 'Montserrat', weights: [500, 600] }]} />
            
            {/* Header */}
            <Header 
                name={Mock.user.fullname}
                website={Mock.user.website}
            />
            <div className="container">
                <ListingItems />
            </div>
        </>
    )
}

export default Home;
