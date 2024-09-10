import SocialLinksProps from '@interfaces/social-links';
import {
  DribbbleLogo,
  FacebookLogo,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  MediumLogo,
  XLogo,
  YoutubeLogo
} from '@phosphor-icons/react';

interface SocialLinksComponentProps {
  socialLinks: SocialLinksProps;
}

function SocialLinks({ socialLinks }: SocialLinksComponentProps) {
  return (
    <div className="group mt-4 flex items-center justify-center text-white gap-4">
      {!!socialLinks.facebook && (
        <a
          className="transition-all group-hover:opacity-60 hover:!opacity-100 hover:-translate-y-[0.12rem]"
          target="_blank"
          rel="noreferrer"
          href={socialLinks.facebook}
          aria-label="facebook"
        >
          <FacebookLogo size={32} />
        </a>
      )}

      {!!socialLinks.x && (
        <a
          className="transition-all group-hover:opacity-60 hover:!opacity-100 hover:-translate-y-[0.12rem]"
          target="_blank"
          rel="noreferrer"
          href={socialLinks.x}
          aria-label="x"
        >
          <XLogo size={32} />
        </a>
      )}

      {!!socialLinks.medium && (
        <a
          className="transition-all group-hover:opacity-60 hover:!opacity-100 hover:-translate-y-[0.12rem]"
          target="_blank"
          rel="noreferrer"
          href={socialLinks.medium}
          aria-label="medium"
        >
          <MediumLogo size={32} />
        </a>
      )}

      {!!socialLinks.youtube && (
        <a
          className="transition-all group-hover:opacity-60 hover:!opacity-100 hover:-translate-y-[0.12rem]"
          target="_blank"
          rel="noreferrer"
          href={socialLinks.youtube}
          aria-label="youtube"
        >
          <YoutubeLogo size={32} />
        </a>
      )}

      {!!socialLinks.instagram && (
        <a
          className="transition-all group-hover:opacity-60 hover:!opacity-100 hover:-translate-y-[0.12rem]"
          target="_blank"
          rel="noreferrer"
          href={socialLinks.instagram}
          aria-label="instagram"
        >
          <InstagramLogo size={32} />
        </a>
      )}

      {!!socialLinks.linkedin && (
        <a
          className="transition-all group-hover:opacity-60 hover:!opacity-100 hover:-translate-y-[0.12rem]"
          target="_blank"
          rel="noreferrer"
          href={socialLinks.linkedin}
          aria-label="linkedin"
        >
          <LinkedinLogo size={32} />
        </a>
      )}

      {!!socialLinks.github && (
        <a
          className="transition-all group-hover:opacity-60 hover:!opacity-100 hover:-translate-y-[0.12rem]"
          target="_blank"
          rel="noreferrer"
          href={socialLinks.github}
          aria-label="github"
        >
          <GithubLogo size={32} />
        </a>
      )}

      {!!socialLinks.dribbble && (
        <a
          className="transition-all group-hover:opacity-60 hover:!opacity-100 hover:-translate-y-[0.12rem]"
          target="_blank"
          rel="noreferrer"
          href={socialLinks.dribbble}
          aria-label="dribbble"
        >
          <DribbbleLogo size={32} />
        </a>
      )}
    </div>
  );
}

export { SocialLinks };
