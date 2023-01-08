import CategoriesPros from '@interfaces/categories';
import UserProps from '@interfaces/user';
import LinksProps from '@interfaces/links';
import SocialLinksProps from '@interfaces/social-links';

export default interface DataProps {
  user: UserProps;
  categories: CategoriesPros[];
  links: LinksProps[];
  socialLinks: SocialLinksProps;
}
