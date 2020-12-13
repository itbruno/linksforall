import { useState, React, useEffect } from 'react';
import CategoryButton from '../categoryButton';
import LinkItem from '../linkItem';

function ListingItems() {
    // Get icon value to create dynamic component
    const categoryClass = 'js-category-button';
    const linkItemClass = 'js-link-item';
    const [activeCategory, setActiveCategory] = useState();

    useEffect(() => {
        const getFirstCategoryName = document.querySelector(`.${categoryClass}`);
        setActiveCategory(getFirstCategoryName.innerText);
    }, [])

    // Add active class to button
    function handleActive(el) {
        const getCategoryId = el.currentTarget.dataset.category;
        setActiveCategory(el.currentTarget.innerText);

        // Clear all Categories and Links with '.active' class
        clearAllActiveItems(categoryClass);
        clearAllActiveItems(linkItemClass);

        document.querySelectorAll(`.${linkItemClass}`).forEach((e) => {
            if (e.dataset.category === getCategoryId || getCategoryId === 'all') {
                e.classList.add('active');
            }
        });

        el.currentTarget.classList.add('active');
    }

    // Remove all active class from buttons
    function clearAllActiveItems(el) {
        const activeItems = document.querySelectorAll(`.${el}`);

        activeItems.forEach((e) => {
            e.classList.remove('active');
        });
    }

    return (
        <>
            {/* Nav with categories */}
            <nav className="nav-categories">
                <div id="categories" className="nav-list">
                    <li className="nav-item">
                        <CategoryButton
                            handleEvent={handleActive} 
                            label="Todos"
                            icon="FiLink"
                            id="all"
                            classes="active"
                            categoryId="all"
                        />
                    </li>

                    <li className="nav-item">
                        <CategoryButton
                            handleEvent={handleActive}
                            label="Projects"
                            icon="FiLayers"
                            id="projects"
                            categoryId="projects"
                        />
                    </li>

                    <li className="nav-item">
                        <CategoryButton
                            handleEvent={handleActive}
                            label="Articles"
                            icon="FiEdit"
                            id="articles"
                            categoryId="articles"
                        />
                    </li>
                </div>
            </nav>
            
            <div id="links">
                <h2>{activeCategory}</h2>
                <LinkItem 
                    url="https://google.com"
                    label="Links para projeto"
                    category="projects"
                />

                <LinkItem 
                    url="https://google.com"
                    label="Link de artigo" 
                    category="articles"
                />
            </div>
        </>
    )
}

export default ListingItems;
