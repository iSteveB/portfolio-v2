'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

type ButtonProps = {
  text: string;
  icon: JSX.Element;
  link?: string;
  email?: string;
  direction?: 'left' | 'right';
  isInternalLink?: boolean;
  onClick?: () => void;
};

const Button = ({
  text,
  icon,
  direction = 'left',
  link = '/',
  email,
  isInternalLink = false,
  onClick,
}: ButtonProps) => {
  const [copied, setCopied] = useState(false);

	const animationDirection = {
		left: {
			icon: 'absolute left-0 rounded-full bg-accent-100 p-3',
			text: 'overflow-hidden whitespace-nowrap p-14 text-neutral group-hover:overflow-visible',
			parent: 'group relative flex size-12 items-center justify-around overflow-hidden rounded-3xl border-e-2 border-accent-100 pl-2 transition-all duration-300 ease-in-out hover:w-40',
		},
		right: {
			icon: 'absolute right-0 rounded-full bg-accent-100 p-3',
			text: 'overflow-hidden whitespace-nowrap p-4 text-neutral group-hover:overflow-visible',
			parent: 'group relative flex size-12 items-center overflow-hidden rounded-3xl border-s-2 border-accent-100 pl-2 transition-all duration-300 ease-in-out hover:w-40',
		},
	};

	const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (email) {
      event.preventDefault();
      navigator.clipboard.writeText(email).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    } else if (isInternalLink && link.startsWith('#')) {
      event.preventDefault();
      const element = document.querySelector(link);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    if (onClick) {
      onClick();
    }
  };

  const ButtonContent = () => (
    <>
      <span className={animationDirection[direction].text}>{copied ? "C'est copié !" : text}</span>
      <span className={animationDirection[direction].icon}>{icon}</span>
    </>
  );

  return (
    <motion.div className={animationDirection[direction].parent}>
      {isInternalLink ? (
        <a
          href={link}
          className="flex size-full items-center justify-between"
          onClick={handleClick}
          aria-label={text}
        >
          <ButtonContent />
        </a>
      ) : (
        <Link
          href={link}
          className="flex size-full items-center justify-between"
          onClick={handleClick}
          aria-label={text}
          target={!isInternalLink && link !== '/' ? '_blank' : undefined}
          rel={!isInternalLink && link !== '/' ? 'noopener noreferrer' : undefined}
        >
          <ButtonContent />
        </Link>
      )}
    </motion.div>
  );
};

export default Button;