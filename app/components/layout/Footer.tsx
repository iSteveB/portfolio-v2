
import React from 'react';
import Button from '../ui/Button';
import MailIcon from '../icon/MailIcon';
import LinkedInIcon from '../icon/LinkedInIcon';
import GitHubIcon from '../icon/GitHubIcon';
import CVIcon from '../icon/CVIcon';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className='flex w-full max-w-screen-2xl flex-col items-center justify-center gap-3 bg-base-900 p-4'>
      <div className='flex gap-4'>
      <Button
					text='Mon e-mail'
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
      <div>
        <p className='text-neutral'>© {year} Steve Basse. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;