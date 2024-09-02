'use client';
import React, { useState, useEffect } from 'react';
import Logo from '../ui/Logo';
import Button from '../ui/Button';
import MailIcon from '../icon/MailIcon';
import CVIcon from '../icon/CVIcon';
import LinkedInIcon from '../icon/LinkedInIcon';
import GitHubIcon from '../icon/GitHubIcon';
import useWindowSize from '@/app/hook/useWindowSize';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
	const { width } = useWindowSize();

  useEffect(() => {
		setIsMobile(width !== undefined && width <= 768);
	}, [width]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const buttons = [
    { text: 'Mon e-mail', icon: <MailIcon />, email: 'contact@stevebasse.fr' },
    { text: 'LinkedIn', icon: <LinkedInIcon />, link: 'https://www.linkedin.com/in/steve-basse/' },
    { text: 'GitHub', icon: <GitHubIcon />, link: 'https://github.com/isteveb' },
    { text: 'CV', icon: <CVIcon />, link: '/download/cv-steve-basse.pdf' },
  ];

  return (
    <header className='flex w-full max-w-screen-2xl justify-between bg-base-900 px-6 py-4'>
      <Logo />
      {isMobile ? (
        <div className='relative'>
          <button
            onClick={toggleMenu}
            className='text-white focus:outline-none'
            aria-label='Menu'
          >
            <svg
              className='size-8 text-accent-100'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path d='M4 6h16M4 12h16m-7 6h7'></path>
            </svg>
          </button>
          {isMenuOpen && (
            <div className='absolute right-0 z-50 mt-2 w-auto rounded-md bg-base-800 py-1 shadow-lg'>
              {buttons.map((button, index) => (
                <div key={index} className='px-4 py-2'>
                  <Button
                    text={button.text}
                    icon={button.icon}
                    direction='right'
                    email={button.email}
                    link={button.link}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className='flex gap-4'>
          {buttons.map((button, index) => (
            <Button
              key={index}
              text={button.text}
              icon={button.icon}
              direction='right'
              email={button.email}
              link={button.link}
            />
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;