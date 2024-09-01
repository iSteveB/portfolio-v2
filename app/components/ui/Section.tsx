import React from 'react';

type SectionProps = {
	children: React.ReactNode;
	color: 'light' | 'dark';
	css?: string;
	id?: string;
};
const Section: React.FC<SectionProps> = ({ children, color, css, id }) => {
	const bgColor = {
		light: 'px-32 w-full bg-base-700',
		dark: 'px-32 w-full bg-base-850',
	};
	return <section id={id} className={`${bgColor[color]} ${css}`}>{children}</section>;
};

export default Section;
