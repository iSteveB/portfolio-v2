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
		<motion.nav className='fixed -bottom-1 z-50 flex w-screen justify-around gap-3 bg-base-800 px-4 py-6 lg:sticky lg:top-1/2 lg:ml-6 lg:w-auto lg:-translate-y-1/2 lg:flex-col lg:justify-center lg:rounded-lg'>
			<Button
				text='Accueil'
				link='#hero'
				icon={<HomeIcon />}
				isInternalLink={true}
			/>
			<Button
				text='À propos'
				link='#about'
				icon={<UserIcon />}
				isInternalLink={true}
			/>
			<Button
				text='Portfolio'
				link='#portfolio'
				icon={<WorkIcon />}
				isInternalLink={true}
			/>
			<Button
				text='Mon e-mail'
				icon={<MailIcon />}
				email='contact@stevebasse.fr'
			/>
		</motion.nav>
	);
};

export default Navigation;
