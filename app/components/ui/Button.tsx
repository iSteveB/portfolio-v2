'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

type ButtonProps = {
	text: string;
	icon: JSX.Element;
	direction?: 'left' | 'right';
};

const Button = ({ text, icon, direction = 'left' }: ButtonProps) => {
	const animationDirection = {
		left: {
			icon: 'absolute left-0 rounded-full bg-accent-100 p-3',
			text: 'overflow-hidden whitespace-nowrap pl-10 text-neutral group-hover:overflow-visible',
			parent: 'group relative flex size-12 items-center justify-around overflow-hidden rounded-3xl border-e-2 border-accent-100 pl-2 transition-all duration-300 ease-in-out hover:w-48'
		},
		right: {
			icon: 'absolute right-0 rounded-full bg-accent-100 p-3',
			text: 'overflow-hidden whitespace-nowrap pr-10 text-neutral group-hover:overflow-visible',
			parent: 'group relative flex size-12 items-center justify-around overflow-hidden rounded-3xl border-s-2 border-accent-100 pl-2 transition-all duration-300 ease-in-out hover:w-48'
		},
	};

	return (
		<motion.div className={animationDirection[direction].parent}>
			<span className={animationDirection[direction].text}>{text}</span>
			<Link
				href='#'
				className={animationDirection[direction].icon}
				aria-label=''>
				{icon}
			</Link>
		</motion.div>
	);
};

export default Button;
