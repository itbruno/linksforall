// Libs and Vendors
import React, { useEffect, useState } from 'react';
import GoogleFontLoader from 'react-google-font-loader';

// Components
import Header from './components/header';

// Styles
import './styles/globals.scss';

// Main
function Home() {
    const [userData, setUserData] = useState();

    useEffect(() => {
        handleData();
    }, [])

    async function handleData() {
        const response = await fetch('https://demo5777528.mockable.io/mylinks')
            .then(res => res.json())
            .then(data => data);
        
        setUserData(response);
    }

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
