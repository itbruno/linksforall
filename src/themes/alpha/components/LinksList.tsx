import DataProps from '@interfaces/data';
import { CategoriesList } from './CategoriesList';
import CategoriesPros from '@interfaces/categories';
import LinksProps from '@interfaces/links';
import { Links } from './Links';

interface LinksListProps {
  categories: CategoriesPros[];
  links: LinksProps[];
}

function LinksList({ categories, links }: LinksListProps) {
  const hasCategories = categories && categories?.length > 0;

  return (
    <div className="container px-4 max-w-lg relative">
      {hasCategories && <CategoriesList categories={categories} />}
      <Links className="mt-6" links={links} />
    </div>
  );
}

export { LinksList };
