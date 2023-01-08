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
    <nav className="sticky top-0 flex gap-5 items-center bg-blue-50 z-10 sm:rounded-bl-xl sm:rounded-br-xl px-4 -mx-4 sm:mx-0">
      <h2 className="text-cyan-600 text-sm font-medium min-w-[5rem]">
        Filtrar por:
      </h2>
      <ul className="scrollbar-hide flex flex-nowrap overflow-x-auto -ml-4 -mr-4">
        {categories?.map((category) => (
          <li key={category.id}>
            <button
              onClick={onSelectCategory}
              className={`inline-flex px-3 py-4 text-blue-400 hover:text-blue-600 font-semibold items-center sm:text-sm transition-colors ${
                activeCategory == category.id
                  ? 'text-blue-600 border-b-2 border-b-blue-600'
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
