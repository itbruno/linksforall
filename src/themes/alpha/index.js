// Libs and Vendors
import React from 'react';
import GoogleFontLoader from 'react-google-font-loader';

// Components
import Header from './components/header';
import ListingItems from './components/listingItems';
import SocialLink from './components/socialLink';

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

                {/* List with links */}
                <div className="container">
                    <ListingItems />
                </div>

                {/* Social Icons */}
                <div className="container social-links-wrapper">
                    <h2>Acompanhe</h2>
                    <ul className="social-links">
                        { Mock.social_links.map(link => (
                            <li key={link.name}>
                                <SocialLink
                                    name={link.name}
                                    url={link.url}
                                />
                            </li>
                        ))}
                    </ul>
                    
                </div>
            </main>
        </>
    )
}

export default Home;