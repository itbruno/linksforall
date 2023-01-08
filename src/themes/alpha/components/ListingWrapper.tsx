import DataProps from '@interfaces/data';
import CategoriesPros from '@interfaces/categories';
import LinksProps from '@interfaces/links';

import { CategoriesList } from './Categories';
import { Links } from './Links';
import React, { useState } from 'react';

interface ListingWrapperProps {
  categories: CategoriesPros[];
  links: LinksProps[];
}

function ListingWrapper({ categories, links }: ListingWrapperProps) {
  const hasCategories = categories && categories?.length > 0;

  const [linkItems, setLinkItems] = useState(links);
  const [activeCategory, setActiveCategory] = useState('all');

  function setLinksByCategory(event: React.MouseEvent<HTMLButtonElement>) {
    const getCategory = event.currentTarget.dataset.id;

    const filterLinks = links.filter((link) => link.categoryId == getCategory);
    const newLinks = getCategory === 'all' ? links : filterLinks;

    setActiveCategory(getCategory ?? 'all');
    setLinkItems(newLinks);
  }

  return (
    <div className="container px-4 max-w-lg relative">
      {hasCategories && (
        <CategoriesList
          onSelectCategory={setLinksByCategory}
          activeCategory={activeCategory}
          categories={categories}
        />
      )}
      <Links className="mt-6 pb-10" links={linkItems} />
    </div>
  );
}

export { ListingWrapper };
