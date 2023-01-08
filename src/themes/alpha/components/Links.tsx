import LinksProps from '@interfaces/links';
import { ArrowArcRight, ArrowCircleRight, LinkSimple } from 'phosphor-react';

interface LinksComponentProps {
  links: LinksProps[];
  className: string;
}

function Links({ className, links }: LinksComponentProps) {
  return (
    <div className={`${className} flex flex-col gap-4`}>
      {links.map((link) => (
        <a
          key={link.url}
          data-category={link.categoryId}
          className="inline-flex items-center justify-between gap-6 transition-all px-4 py-4 rounded-lg font-semibold text-sm text-cyan-700 hover:ring-cyan-200 hover:bg-blue-50/50"
          href={link.url}
        >
          {link.label}
          <ArrowCircleRight className="min-w-[1.25rem]" size={20} />
        </a>
      ))}
    </div>
  );
}

export { Links };
