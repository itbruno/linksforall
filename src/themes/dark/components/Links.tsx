import LinksProps from '@interfaces/links';
import { Linkto } from './Linkto';

interface LinksComponentProps {
	links: LinksProps[];
	className: string;
}

function Links({ className, links }: LinksComponentProps) {
	return (
		<div className={`${className} flex flex-col gap-4`}>
			{links.map((link) => (
				<Linkto
					key={link.url}
					url={link.url}
					categoryId={link.categoryId}
					label={link.label}
				></Linkto>
			))}
		</div>
	);
}

export { Links };
