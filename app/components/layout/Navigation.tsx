'use client';
import React from 'react';
import Button from '../ui/Button';
import { motion } from 'framer-motion';

import HomeIcon from '../icon/HomeIcon';
import MailIcon from '../icon/MailIcon';
import UserIcon from '../icon/UserIcon';
import WorkIcon from '../icon/WorkIcon';

const Navigation = () => {
	return (
		<motion.nav className='fixed left-6 top-1/2 flex -translate-y-1/2 flex-col justify-center gap-3 rounded-lg bg-base-800 px-4 py-6'>
			<Button text='Accueil' icon={<HomeIcon />} />
			<Button text='À propos' icon={<UserIcon />} />
			<Button text='Portfolio' icon={<WorkIcon />} />
			<Button text='Copier mon mail' icon={<MailIcon />} email='contact@stevebasse.fr' />
		</motion.nav>
	);
};

export default Navigation;
