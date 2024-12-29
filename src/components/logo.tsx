
import React from 'react';
import Image from 'next/image';

interface fillProps {
  fill : string
}
const Logo : React.FC<fillProps>= ({fill}) => {
  return (
    <div className="flex items-center gap-2">
      <Image src="/votecamLogo.svg" alt="Votecam Logo" width={36} height={40} />
      <p className={`logoText ${fill == 'white' ? `text-white` : `text-customBlack-500`}`}>VoteCam</p>
    </div>
  );
};

export default Logo;
