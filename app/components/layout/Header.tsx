import React from 'react';
import Logo from '../ui/Logo';
import Button from '../ui/Button';

const Header = () => {
	return (
		<header className='w-full flex justify-between px-6 py-4 bg-base-900'>
			<Logo />
			<Button />
		</header>
	);
};

export default Header;
