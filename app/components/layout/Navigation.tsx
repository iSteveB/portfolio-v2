'use client';
import React from 'react';
import Button from '../ui/Button';
import { motion } from 'framer-motion';

import HomeIcon from '../icon/HomeIcon';
import MailIcon from '../icon/MailIcon';
import UserIcon from '../icon/UserIcon';
import WorkIcon from '../icon/WorkIcon';

const navigationLinks = [
	{
		text: 'Accueil',
		link: '#hero',
		icon: <HomeIcon />,
		isInternalLink: true,
	},
	{
		text: 'À propos',
		link: '#about',
		icon: <UserIcon />,
		isInternalLink: true,
	},
	{
		text: 'Portfolio',
		link: '#portfolio',
		icon: <WorkIcon />,
		isInternalLink: true,
	},
	{
		text: 'Mon e-mail',
		icon: <MailIcon />,
		email: 'contact@stevebasse.fr',
	},
];

const Navigation = () => {

	return (
		<motion.nav className='fixed bottom-0 z-50 flex w-screen justify-around gap-3 bg-base-800 px-4 py-6 lg:sticky lg:top-1/2 lg:ml-6 lg:w-auto lg:-translate-y-1/2 lg:flex-col lg:justify-center lg:rounded-lg'>
			{navigationLinks.map(
				({ text, link, icon, isInternalLink, email }) => (
					<Button
						key={text}
						text={text}
						link={link}
						icon={icon}
						isInternalLink={isInternalLink}
						email={email}
					/>
				)
			)}
		</motion.nav>
	);
};

export default Navigation;
