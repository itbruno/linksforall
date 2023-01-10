import UserProps from '@interfaces/user';
import Image from 'next/image';
import { CircleWavyCheck } from 'phosphor-react';
import { SocialLinks } from './SocialLinks';

function Header({ fullname, image, role, socialLinks }: UserProps) {
  return (
    <header className="bg-blue-500 relative overflow-hidden">
      <div className="bg-[#556BDA] rounded-[100%] w-72 h-40 absolute -left-32 -rotate-[30deg]"></div>
      <div className="bg-orange-300 rounded-[100%] w-72 h-40 absolute -sm:right-20 -right-32 -bottom-12 -rotate-[30deg]"></div>
      <div className="container max-w-lg text-center py-16 relative">
        <div className="group relative inline-flex">
          {image && (
            <Image
              className="rounded-full ring-4 ring-white mx-auto mb-4"
              src={image}
              alt={fullname}
              width={90}
              height={90}
            />
          )}

          <div className="text-orange-300 absolute bottom-3 right-0 ">
            <CircleWavyCheck weight="fill" size={28} />
          </div>
        </div>

        <h1 className="font-semibold text-xl text-white mb-1">{fullname}</h1>
        <p className="text-sm inline-flex text-white font-semibold items-center opacity-80">
          {role}
        </p>

        {socialLinks && <SocialLinks socialLinks={socialLinks} />}
      </div>
    </header>
  );
}

export { Header };
