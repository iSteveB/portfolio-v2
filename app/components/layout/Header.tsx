import React from 'react';
import Logo from '../ui/Logo';
import Button from '../ui/Button';
import MailIcon from '../icon/MailIcon';
import CVIcon from '../icon/CVIcon';
import LinkedInIcon from '../icon/LinkedInIcon';
import GitHubIcon from '../icon/GitHubIcon';


const Header = () => {
	return (
		<header className='flex w-full justify-between bg-base-900 px-6 py-4'>
			<Logo />
			<div className='flex gap-4'>
				<Button
					text='Copier mon mail'
					icon={<MailIcon />}
					direction='right'
					email='contact@stevebasse.fr'
				/>
				<Button
					text='LinkedIn'
					icon={<LinkedInIcon />}
					direction='right'
					link='https://www.linkedin.com/in/steve-basse/'
				/>
				<Button
					text='GitHub'
					icon={<GitHubIcon />}
					direction='right'
					link='https://github.com/isteveb'
				/>
				<Button
					text='CV'
					icon={<CVIcon />}
					direction='right'
					link='/download/cv-steve-basse.pdf'
				/>
			</div>
		</header>
	);
};

export default Header;
