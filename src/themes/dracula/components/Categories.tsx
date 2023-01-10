import CategoriesPros from '@interfaces/categories';

interface CategoriesListProps {
  categories: CategoriesPros[];
  onSelectCategory?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  activeCategory: string;
}
function CategoriesList({
  activeCategory,
  categories,
  onSelectCategory
}: CategoriesListProps) {
  return (
    <nav className="sticky top-3 flex gap-5 items-center bg-dracula-current-line/30 backdrop-blur-sm z-10 rounded-xl px-4 sm:mx-0">
      <h2 className="text-dracula-orange text-sm font-medium min-w-[5rem]">
        Filtrar por:
      </h2>
      <ul className="scrollbar-hide flex flex-nowrap overflow-x-auto -ml-4 -mr-4">
        {categories?.map((category) => (
          <li key={category.id}>
            <button
              onClick={onSelectCategory}
              className={`inline-flex px-3 py-4 text-dracula-comment hover:text-dracula-cyan font-semibold items-center sm:text-sm transition-colors ${
                activeCategory == category.id
                  ? 'text-dracula-cyan border-b-2 border-b-dracula-cyan'
                  : ''
              }`}
              data-id={category.id}
              type="button"
            >
              {category.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export { CategoriesList };
