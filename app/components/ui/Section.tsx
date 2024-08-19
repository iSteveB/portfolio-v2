import React from 'react';

type SectionProps = {
	children: React.ReactNode;
	color: 'light' | 'dark';
	css?: string;
};
const Section: React.FC<SectionProps> = ({ children, color, css }) => {
	const bgColor = {
		none: 'px-32 w-full bg-none',
		light: ' px-32 w-full bg-base-700',
		dark: 'px-32 w-full bg-base-850',
	};
	return <section className={`${bgColor[color]} ${css}`}>{children}</section>;
};

export default Section;
