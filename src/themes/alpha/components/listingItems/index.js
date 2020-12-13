import { useParams } from 'react-router-dom';
import { useState, React, useEffect } from 'react';

// Services
import api from '../../../services/api';

// Components
import CategoryButton from '../categoryButton';
import LinkItem from '../linkItem';

function ListingItems() {
    const { userId } = useParams();
    
    const [links, setLinks] = useState();
    const [categories, setCategories] = useState();
    const [activeCategory, setActiveCategory] = useState();
    
    const categoryClass = 'js-category-button';
    const linkItemClass = 'js-link-item';
    

    useEffect(() => {
        apiResponse();
    })

    async function apiResponse() {
        const res = await api.get(userId);
        setLinks(res.data.links);
        setCategories(res.data.categories);

        setActiveCategory(res.data.categories[0].label);
    }

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
                { categories && categories.map((category, index) => (
                        <li className="nav-item" key={category.id}>
                            <CategoryButton
                                handleEvent={handleActive} 
                                label={category.label}
                                icon={category.icon}
                                categoryId={category.id}
                                classes={index === 0 ? 'active' : ''}
                            />
                        </li>
                    ))}
                </div>
            </nav>
            
            <div id="links">
                <h2>{activeCategory}</h2>
                { links && links.map((link) => (
                    <LinkItem 
                        key={link.label}
                        url={link.url}
                        label={link.label}
                        category={link.categoryId}
                    />
                ))}
            </div>
        </>
    )
}

export default ListingItems;
