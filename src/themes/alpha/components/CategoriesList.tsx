import CategoriesPros from '@interfaces/categories';

interface CategoriesListProps {
  categories: CategoriesPros[];
  onSelectCategory?: () => void;
}
function CategoriesList({ categories, onSelectCategory }: CategoriesListProps) {
  return (
    <nav>
      <ul className="scrollbar-hide flex flex-nowrap overflow-x-auto gap-4 -mt-6 -ml-4 -mr-4 px-4 min-h-[4rem]">
        {categories?.map((category) => (
          <li key={category.id}>
            <button
              onClick={onSelectCategory}
              className="inline-flex bg-white px-6 shadow-lg shadow-blue-100/40 py-3 rounded-full text-blue-300 font-semibold items-center text-sm"
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
