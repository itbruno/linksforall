import SocialLinksProps from './social-links';

export default interface UserProps {
  fullname: string;
  website?: string;
  image?: string;
  bio?: string;
  role?: string;
  socialLinks?: SocialLinksProps;
}
