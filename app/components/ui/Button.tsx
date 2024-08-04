'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

import MailIcon from '../icon/MailIcon';


const Button = () => {
	return (
		<motion.div className='outline outline-1 outline-neutral rounded-3xl p-2'>
			<Link href='#' className='text-neutral' aria-label=''>
				<MailIcon />
			</Link>
			
		</motion.div>
	);
};

export default Button;
