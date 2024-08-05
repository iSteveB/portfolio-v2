import React from 'react';
import Logo from '../ui/Logo';
import Button from '../ui/Button';
import MailIcon from '../icon/MailIcon';

const Header = () => {
	return (
		<header className='flex w-full justify-between bg-base-900 px-6 py-4'>
			<Logo />
			<Button text='Copier mon mail' icon={<MailIcon />} direction='right'/>
		</header>
	);
};

export default Header;
