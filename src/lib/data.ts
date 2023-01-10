import user from '@lib/user.json';
import categories from '@lib/categories.json';
import links from '@lib/links.json';
import DataProps from '@interfaces/data';

export const DATA: DataProps = {
  user,
  socialLinks: user.socialLinks,
  categories,
  links
};
