// Libs and Vendors
import React from 'react';
import GoogleFontLoader from 'react-google-font-loader';

// Components
import Header from './components/header';
import CategoryButton from './components/categoryButton';
import LinkItem from './components/linkItem';

// Styles
import './styles/globals.scss';

// Main
function Home() {
    
    return (
        <>
            {/* Load Google Font */}
            <GoogleFontLoader fonts={[{ font: 'Montserrat', weights: [500, 600] }]} />
            
            {/* Header */}
            <Header />

            {/* Nav with categories */}
            <nav className="nav-categories">
                <div className="container">
                    <div id="categories" className="nav-list">
                        {/* TO-DO: Map categories */}
                        <li className="nav-item">
                            <CategoryButton label="Todos" icon="FiLink" id="all" active={true} />
                        </li>

                        <li className="nav-item">
                            <CategoryButton label="Projetos" icon="FiLayers" id="all" />
                        </li>

                        <li className="nav-item">
                            <CategoryButton label="Artigos" icon="FiEdit" id="all" />
                        </li>
                    </div>
                </div>
            </nav>

            {/* Category title */}
            <div className="container">
                <h2>Links</h2>

                <div id="links">
                    <LinkItem 
                        url="https://google.com"
                        label="Repositório com o código do projeto Linksforall" 
                    />

                    <LinkItem 
                        url="https://google.com"
                        label="Repositório com o código do projeto Linksforall" 
                    />
                </div>
            </div>
        </>
    )
}

export default Home;
