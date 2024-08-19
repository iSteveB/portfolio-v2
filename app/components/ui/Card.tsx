import React from 'react';

type CardProps = {
  title: string;
  text: string;
};

const Card: React.FC<CardProps> = ({title, text}) => {
  return (
    <div className='flex w-full flex-col gap-2 rounded-md bg-base-700 px-4 py-5'>
      <h3 className='text-4xl text-accent-100 '>{title}</h3>
      <p className='text-xl text-neutral'>{text}</p>
    </div>
  );
};

export default Card;