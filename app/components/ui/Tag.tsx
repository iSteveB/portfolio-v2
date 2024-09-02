import React from 'react';

type TagProps = {
  text: string
}

const Tag = ({text}: TagProps) => {
  return (
    <span className='rounded-sm bg-accent-100 px-3 py-1 text-xl text-base-900'>
      {text}
    </span>
  );
};

export default Tag;