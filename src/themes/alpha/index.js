// Libs and Vendors
import React from 'react';
import GoogleFontLoader from 'react-google-font-loader';

// Components
import Header from './components/header';
import ListingItems from './components/listingItems';
import ContactForm from './components/contactForm';

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
            
            <main>
                {/* Header */}
                <Header 
                    name={Mock.user.fullname}
                    website={Mock.user.website}
                />
                <div className="container">
                    <ListingItems />
                </div>
            </main>
        </>
    )
}

export default Home;
