'use client';
import { useState, ReactNode } from 'react';
import CollapseArrow from '../icon/CollapseArrow';

type CollapseProps = {
  title: string;
  children: ReactNode;
  className?: string;
};

const Collapse: React.FC<CollapseProps> = ({ title, children, className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <div className='relative' onClick={() => setIsOpen(!isOpen)}>
        <h3 className='cursor-pointer rounded-md bg-base-800 px-6 py-4 text-5xl font-bold text-accent-100'>
          {title}
        </h3>
        <CollapseArrow color='stroke-accent-100' rotate={isOpen} />
      </div>
      <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 overflow-scroll' : 'max-h-0 overflow-hidden bg-none'}`}>
        {children}
      </div>
    </div>
  );
};

export default Collapse;