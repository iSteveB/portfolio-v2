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

	onClick?: () => void;
};

const Button = ({
	text,
	icon,
	direction = 'left',
	link = '/',
	email,
	onClick,
}: ButtonProps) => {
	const [copied, setCopied] = useState(false);

	const animationDirection = {
		left: {
			icon: 'absolute left-0 rounded-full bg-accent-100 p-3',
			text: 'overflow-hidden whitespace-nowrap pl-10 text-neutral group-hover:overflow-visible',
			parent: 'group relative flex size-12 items-center justify-around overflow-hidden rounded-3xl border-e-2 border-accent-100 pl-2 transition-all duration-300 ease-in-out hover:w-48',
		},
		right: {
			icon: 'absolute right-0 rounded-full bg-accent-100 p-3',
			text: 'overflow-hidden whitespace-nowrap pr-10 text-neutral group-hover:overflow-visible',
			parent: 'group relative flex size-12 items-center justify-around overflow-hidden rounded-3xl border-s-2 border-accent-100 pl-2 transition-all duration-300 ease-in-out hover:w-48',
		},
	};

	const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (email) {
      e.preventDefault();
      navigator.clipboard.writeText(email).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    }
    if (onClick) {
      onClick();
    }
  };

	return (
		<motion.div className={animationDirection[direction].parent}>
			<span className={animationDirection[direction].text}>{copied ? "Copié !" : text}</span>
			<Link
				href={link}
				className={animationDirection[direction].icon}
				onClick={handleClick}
				aria-label={text}>
				{icon}
			</Link>
		</motion.div>
	);
};

export default Button;
