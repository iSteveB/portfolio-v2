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
      <Button text='Accueil' link='#hero' icon={<HomeIcon />} isInternalLink={true} />
      <Button text='À propos' link='#about' icon={<UserIcon />} isInternalLink={true} />
      <Button text='Portfolio' link='#portfolio' icon={<WorkIcon />} isInternalLink={true} />
      <Button text='Copier mon mail' icon={<MailIcon />} email='contact@stevebasse.fr' />
    </motion.nav>
  );
};

export default Navigation;