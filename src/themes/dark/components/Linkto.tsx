import Link from 'next/link';
import { CaretRight } from 'phosphor-react';

interface LinksComponentProps {
	url: string;
	categoryId: string;
	label: string;
}

function Linkto({ url, categoryId, label }: LinksComponentProps) {
	return (
		<Link
			key={url}
			data-category={categoryId}
			className="animate-slide-up opacity-0 border-0 inline-flex items-center justify-between gap-6 transition-all px-4 py-4 rounded-lg font-medium  text-dark-cyan/70 hover:bg-dark-comment/10 hover:text-dark-cyan"
			href={url}
		>
			{label}
			<CaretRight className="min-w-[1.25rem]" size={20} />
		</Link>
	);
}

export { Linkto };
