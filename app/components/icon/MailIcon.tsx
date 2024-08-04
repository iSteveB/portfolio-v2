'use client';
import { motion } from 'framer-motion';

const MailIcon = () => {
	return (
		<motion.svg
			initial={{ rotate: -45, x: 0, y: 0 }}
			animate={{ x: [3, 0, 3], y: [-3, 0, -3] }}
			transition={{ duration: 1, repeat: Infinity, }}
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 24 24'
			className='size-6 fill-base-800'>
			<path d='M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z' />
		</motion.svg>
	);
};

export default MailIcon;
