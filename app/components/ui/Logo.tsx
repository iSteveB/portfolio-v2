import React from 'react';
import { Mallanna } from 'next/font/google';

const mallanna = Mallanna({ subsets: ["latin"], weight: "400" });

const Logo = () => {
  return (
    <div className={ `${mallanna.className} flex items-center gap-2` }>
      <p className='text-4xl text-neutral'>steve<span className='text-accent-100'>basse.</span></p>
    </div>
  );
};

export default Logo;