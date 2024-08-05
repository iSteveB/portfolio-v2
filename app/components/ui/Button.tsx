'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

import MailIcon from '../icon/MailIcon';

const Button = () => {
	return (
		<motion.div className='group relative flex size-12 items-center justify-around overflow-hidden rounded-3xl border-s-2 border-accent-100 pl-2 transition-all duration-300 ease-in-out hover:w-48'>
			<span className='overflow-hidden whitespace-nowrap pr-10 text-neutral group-hover:overflow-visible'>
				Copier mon mail
			</span>
			<Link
				href='#'
				className='absolute right-0 rounded-full bg-accent-100 p-3'
				aria-label=''>
				<MailIcon />
			</Link>
		</motion.div>
	);
};

export default Button;
